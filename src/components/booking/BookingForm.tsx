
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
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

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
  edgeFunctionName?: string; // Make this optional as we're not using it anymore
}

const BookingForm = ({ recipient, subject, fromName }: BookingFormProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
      setErrorMessage(null); // Clear any previous errors
      
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
      
      return await sendEmail(emailData);
    },
    onSuccess: () => {
      form.reset();
      toast({
        title: "Tack för din förfrågan!",
        description: "Ditt meddelande har skickats. Vi återkommer till dig så snart som möjligt.",
      });
    },
    onError: (error: Error) => {
      console.error("Mutation error:", error);
      
      // Set specific error message
      setErrorMessage("Det gick inte att skicka meddelandet. Tekniskt fel: " + error.message);
      
      toast({
        variant: "destructive",
        title: "Något gick fel",
        description: "Det gick inte att skicka ditt meddelande. Vänligen försök igen senare eller kontakta oss via telefon.",
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
        {errorMessage && (
          <Alert variant="destructive" className="mb-4">
            <AlertTitle>Ett fel uppstod</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
        
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
