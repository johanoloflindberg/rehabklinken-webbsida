
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/utils/emailService";
import { EmailData } from "@/types/email";

const bookingSchema = z.object({
  namn: z.string().min(2, { message: "Ange ett giltigt namn med minst 2 bokstäver." })
    .regex(/^[a-zA-ZåäöÅÄÖ\s]{2,}$/, { message: "Ange ett giltigt namn med minst 2 bokstäver." }),
  telefon: z.string().min(6, { message: "Ange ett giltigt telefonnummer." })
    .regex(/^[\d\s\-\+]{6,}$/, { message: "Ange ett giltigt telefonnummer (siffror, mellanslag eller bindestreck tillåtna)" }),
  epost: z.string().email({ message: "Ange en giltig e-postadress." }),
  soker: z.string().max(200, { message: "Max 200 tecken." }),
  besvarstid: z.string().max(100, { message: "Max 100 tecken." }),
  meddelande: z.string().max(500, { message: "Max 500 tecken." }).optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      namn: "",
      telefon: "",
      epost: "",
      soker: "",
      besvarstid: "",
      meddelande: "",
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    
    try {
      const emailData: EmailData = {
        namn: data.namn,
        telefon: data.telefon,
        epost: data.epost,
        soker: data.soker,
        besvarstid: data.besvarstid,
        meddelande: data.meddelande || "–",
        recipient: "reception@rekg.se",
        subject: `Nytt meddelande från ${data.namn}`,
        replyTo: data.epost,
        fromName: "Viktigt meddelande",
      };
      
      await sendEmail(emailData);
      
      toast({
        title: "Bokningsförfrågan skickad!",
        description: "Vi kommer att kontakta dig så snart som möjligt.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Det gick inte att skicka din förfrågan",
        description: "Vänligen försök igen eller kontakta oss via telefon.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="namn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Namn</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                <FormLabel>Telefon</FormLabel>
                <FormControl>
                  <Input type="tel" {...field} />
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
                <FormLabel>E-post</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
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
                <FormLabel>Vad söker du för?</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                <FormLabel>Hur länge har du haft dina besvär?</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-rehab-red hover:bg-rehab-red/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Skickar..." : "Skicka förfrågan"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;
