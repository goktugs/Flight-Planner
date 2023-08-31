import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionItem } from "@radix-ui/react-accordion";

export default function Faq() {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-2xl tracking-wide">Popular Questions</h3>
      <Accordion className="space-y-4" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>How to book a flight?</AccordionTrigger>
          <AccordionContent>
            Go to flights section, search for the necessary flight and press
            'book', fill your data, choose your baggage, seatin and proceed to
            the payment tab, enter your credit card details and press 'pay now'.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            How to book a hotel or rent a car?
          </AccordionTrigger>
          <AccordionContent>
            Go to hotels or cars section, search for the necessary hotel or a
            car and press 'book', fill your data and proceed to the payment tab,
            enter your credit card details and press 'pay now'.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I cancel my booking?</AccordionTrigger>
          <AccordionContent>
            Yes, you can cancel your booking in your profile section. You can
            also contact our support team and they will help you to cancel your
            booking.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Is there a loyalty program?</AccordionTrigger>
          <AccordionContent>
            No. We don't have a loyalty program yet, but we are working on it.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
