
import React, { useState } from "react";
import { Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";

const bookingSchema = z.object({
  namn: z.string().min(2, { message: "Ange ett giltigt namn med minst 2 bokstäver." })
    .regex(/^[a-zA-ZåäöÅÄÖ\s]{2,}$/, { message: "Ange ett giltigt namn med minst 2 bokstäver." }),
  telefon: z.string().min(6, { message: "Ange ett giltigt telefonnummer." })
    .regex(/^[\d\s\+]{6,}$/, { message: "Ange ett giltigt telefonnummer." }),
  epost: z.string().email({ message: "Ange en giltig e-postadress." }),
  soker: z.string().max(200, { message: "Max 200 tecken." }),
  besvarstid: z.string().max(100, { message: "Max 100 tecken." }),
  meddelande: z.string().max(500, { message: "Max 500 tecken." }).optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const EvaHelde = () => {
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
      // Simulate form submission
      console.log("Form submitted:", data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Bokningsförfrågan skickad!",
        description: "Vi kommer att kontakta dig så snart som möjligt.",
      });
      
      form.reset();
    } catch (error) {
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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Page Banner */}
      <div className="bg-gray-100 pt-28 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Eva Helde, Specialistläkare</h1>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-lg text-gray-600 leading-relaxed">
              Eva Helde är specialist i allmänmedicin med OMT-examen och tar emot både nya och återkommande patienter på mottagningen hos Dr. Ersson på Byggmästargatan. Fokus ligger på smärtor från rörelse- och stödjeorganen. Vi erbjuder även försäkringsmedicinska tjänster såsom invaliditetsintyg samt enklare intygsskrivning, exempelvis körkortsintyg.
            </p>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Boka tid</h2>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
              <p className="text-lg text-gray-600 mb-6">
                För att boka tid, vänligen kontakta medicinska sekreteraren:
              </p>
              <div className="mb-4">
                <p className="font-bold text-gray-800">Elisabeth Yng</p>
              </div>
              <div className="flex items-center mb-3">
                <p className="font-bold text-gray-800 mr-2">Telefon:</p>
                <a 
                  href="tel:026127600" 
                  className="text-rehab-red hover:underline transition-colors"
                >
                  026-12 76 00
                </a>
              </div>
              <div className="flex items-center">
                <p className="font-bold text-gray-800 mr-2">E-post:</p>
                <a 
                  href="mailto:reception@rekg.se" 
                  className="text-rehab-red hover:underline transition-colors"
                >
                  reception@rekg.se
                </a>
              </div>
            </div>
            
            {/* Mobile Only Button */}
            <div className="md:hidden mb-8">
              <Button className="w-full py-6 text-lg bg-rehab-red hover:bg-rehab-red/90 flex items-center justify-center" asChild>
                <a href="tel:026127600">
                  <Phone className="mr-2" />
                  Ring oss direkt
                </a>
              </Button>
            </div>
          </div>
          
          {/* Booking Form */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Boka tid hos Eva Helde</h2>
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
          </div>
          
          {/* Cancellation Info */}
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-rehab-red">
            <p className="font-bold text-gray-800 mb-2">Avbokning:</p>
            <p className="text-gray-700">
              Avbokning eller ombokning måste ske minst 24 timmar i förväg.<br />
              Uteblivet besök eller försenad avbokning debiteras med 400 kr enligt Region Gävleborgs taxa.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default EvaHelde;
