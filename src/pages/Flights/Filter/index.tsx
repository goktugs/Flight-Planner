import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion2";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import clsx from "clsx";
import React, { useState } from "react";

const SORTBY_OPTIONS = [
  {
    id: 1,
    label: "Duration",
  },
  {
    id: 2,
    label: "Low Price",
  },
  {
    id: 3,
    label: "High Price",
  },
  {
    id: 4,
    label: "Hour",
  },
];

const CURRENCY_OPTIONS = [
  {
    id: 1,
    label: "USD",
  },
  {
    id: 2,
    label: "EUR",
  },
  {
    id: 3,
    label: "TRY",
  },
];
const AIRLINES_OPTIONS = [
  {
    id: 1,
    label: "Pegasus",
  },
  {
    id: 2,
    label: "Turkish Airlines",
  },

  {
    id: 3,
    label: "Anadolu Jet",
  },

  {
    id: 4,
    label: "SunExpress",
  },

  {
    id: 5,
    label: "American Airlines",
  },
  {
    id: 6,
    label: "Delta Airlines",
  },
  {
    id: 7,
    label: "Etihad Airways",
  },
  {
    id: 8,
    label: "Emirates",
  },
  {
    id: 9,
    label: "Qatar Airways",
  },
  {
    id: 10,
    label: "Air France",
  },
  {
    id: 11,
    label: "British Airways",
  },
  {
    id: 12,
    label: "Lufthansa",
  },
  {
    id: 13,
    label: "KLM",
  },
  {
    id: 14,
    label: "Aeroflot",
  },
  {
    id: 15,
    label: "Air Canada",
  },
];
export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col space-y-4 md:w-1/8">
      <div className="flex items-center space-x-4">
        <Switch checked={isOpen} onCheckedChange={setIsOpen} />
        <h3 className="text-2xl tracking-wide">Filters</h3>
      </div>
      <div
        className={clsx(
          "border-2 border-main-black rounded-md py-2 px-4",
          isOpen ? "" : "opacity-25 pointer-events-none "
        )}
      >
        <Accordion defaultValue={["item-1", "item-4"]} type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-normal">
              Sort by
            </AccordionTrigger>
            <AccordionContent>
              <RadioGroup>
                {SORTBY_OPTIONS.map((option) => (
                  <div key={option.id} className="flex items-center space-x-4">
                    <RadioGroupItem
                      value={option.label}
                      id={option.id.toString()}
                    />
                    <Label className="text-base" htmlFor={option.label}>
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-normal">
              Currency
            </AccordionTrigger>
            <AccordionContent>
              <RadioGroup>
                {CURRENCY_OPTIONS.map((option) => (
                  <div key={option.id} className="flex items-center space-x-4">
                    <RadioGroupItem
                      value={option.label}
                      id={option.id.toString()}
                    />
                    <Label className="text-base" htmlFor={option.label}>
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-normal">
              Price
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <Slider defaultValue={[33]} max={100} step={1} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-normal">
              Airlines
            </AccordionTrigger>
            <AccordionContent>
              <RadioGroup>
                {AIRLINES_OPTIONS.map((option) => (
                  <div key={option.id} className="flex items-center space-x-4">
                    <RadioGroupItem
                      value={option.label}
                      id={option.id.toString()}
                    />
                    <Label className="text-base" htmlFor={option.label}>
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
