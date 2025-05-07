
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { sendEmail } from "@/utils/emailService";
import { EmailData } from "@/types/email";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { supabase } from "@/App";

const formSchema = z.object({
  namn: z.string().min(2, { message: "Ange ett giltigt namn med minst 2 bokstäver." }),
  telefon: z.string().min(6, { message: "Ange ett giltigt telefonnummer." }),
  epost: z.string().email({ message: "Ange en giltig e-postadress." }),
  soker: z.string().max(200, { message: "Max 200 tecken." }),
  besvarstid: z.string().max(100, { message: "Max 100 tecken." }),
  meddelande: z.string().max(500, { message: "Max 500 tecken." }).optional(),
});

export interface BookingFormProps {
  recipient: string;
  subject: string;
  fromName: string;
  edgeFunctionName: string;
}

const BookingForm = ({ recipient, subject, fromName, edgeFunctionName }: BookingFormProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      namn: "",
      telefon: "",
      epost: "",
      soker: "",
      besvarstid: "",
      meddelande: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof formSchema>) => {
      // Create a full EmailData object with all required fields
      const emailData: EmailData = {
        namn: data.namn,
        telefon: data.telefon,
        epost: data.epost,
        soker: data.soker,
        besvarstid: data.besvarstid,
        meddelande: data.meddelande || "",
        recipient: recipient,
        subject: subject,
        replyTo: data.epost,
        fromName: fromName,
      };

      // Check if development mode (no Supabase)
      if (!supabase) {
        console.log("DEV MODE: would send email with data:", emailData);
        return new Promise<void>((resolve) => setTimeout(resolve, 1000));
      }

      try {
        // For forms that specify an edge function name, use that specific edge function
        if (edgeFunctionName) {
          console.log(`Using edge function: ${edgeFunctionName}`);
          const { data: responseData, error } = await supabase.functions.invoke(edgeFunctionName, {
            body: {
              to: recipient,
              subject: subject,
              html: `
                <h2>Nytt meddelande från ${emailData.namn}</h2>
                <p><strong>Namn:</strong> ${emailData.namn}</p>
                <p><strong>Telefon:</strong> ${emailData.telefon}</p>
                <p><strong>E-post:</strong> ${emailData.epost}</p>
                <p><strong>Vad söker patienten för?</strong><br>${emailData.soker}</p>
                <p><strong>Hur länge har patienten haft besvären?</strong><br>${emailData.besvarstid}</p>
                <p><strong>Övrigt meddelande:</strong><br>${emailData.meddelande || "–"}</p>
                <hr>
                <p><i>Meddelandet är skickat via formulär på webbsidan. Svara gärna direkt till avsändarens e-postadress.</i></p>
              `,
              from: {
                name: fromName,
                email: "skicka@skicka.rekg.se"  // Use the consistent sender email
              },
              replyTo: emailData.epost
            },
          });
          
          if (error) {
            console.error("Edge function error:", error);
            throw new Error(error.message);
          }
          
          // Check for specific errors returned by the edge function
          if (responseData?.error) {
            console.error("Email sending error:", responseData);
            
            if (responseData.error === "free_tier_limitation") {
              throw new Error("E-postmeddelandet kunde inte skickas på grund av begränsningar i Resend. Vänligen kontakta administratören för att verifiera din domän eller uppgradera Resend-kontot.");
            }
            
            if (responseData.error === "domain_not_verified") {
              throw new Error("E-postdomänen är inte verifierad. Vänligen kontakta administratören för att verifiera domänen på Resend.");
            }
            
            throw new Error(responseData.message || "Ett fel uppstod när e-postmeddelandet skulle skickas.");
          }
          
          if (!responseData?.id) {
            console.error("No email ID returned from Resend:", responseData);
            throw new Error("E-postleveransen kunde inte bekräftas.");
          }
          
          console.log("Email sent successfully via custom edge function:", responseData);
          return;
        }

        // Otherwise use the standard email service
        return await sendEmail(emailData);
      } catch (error: any) {
        console.error("Error sending email:", error);
        throw new Error(error.message || "Ett fel uppstod när meddelandet skulle skickas.");
      }
    },
    onSuccess: () => {
      form.reset();
      toast({
        title: "Tack för din förfrågan!",
        description: "Ditt meddelande har skickats. Vi återkommer så snart vi kan.",
      });
    },
    onError: (error: Error) => {
      console.error("Mutation error:", error);
      toast({
        variant: "destructive",
        title: "Något gick fel",
        description: error.message || "Det gick inte att skicka meddelandet. Försök igen senare eller kontakta oss via telefon.",
      });
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      await mutation.mutateAsync(data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="namn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Namn *</FormLabel>
              <FormControl>
                <Input placeholder="Skriv ditt namn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="telefon"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefon *</FormLabel>
              <FormControl>
                <Input placeholder="Skriv ditt telefonnummer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="epost"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-post *</FormLabel>
              <FormControl>
                <Input placeholder="Skriv din e-post" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="soker"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vad söker du för? *</FormLabel>
              <FormControl>
                <Input placeholder="Beskriv dina besvär" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="besvarstid"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hur länge har du haft dina besvär? *</FormLabel>
              <FormControl>
                <Input placeholder="T.ex. 2 veckor, 3 månader, etc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="meddelande"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Övrigt meddelande</FormLabel>
              <FormControl>
                <Textarea placeholder="Om du har något annat att meddela oss" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-rehab-red hover:bg-rehab-red/90"
          disabled={isLoading}
        >
          {isLoading ? "Skickar..." : "Skicka förfrågan"}
        </Button>
      </form>
    </Form>
  );
};

export default BookingForm;
