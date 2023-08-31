import { PlaneIcon, RightIcon } from "@/assets/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import clsx from "clsx";

import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import React, { useState } from "react";
import ArrowRightLeftIcon from "@/assets/icons/ArrowRightLeft";
import logo from "/logo.gif";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const [isChecked, setChecked] = useState(false);
  const [value, setValue] = useState();
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();

  console.log(value);

  return (
    <main className="mt-8 space-y-8 ">
      <div className="border-2 border-main-black rounded-lg p-4 space-y-4 relative">
        <h2 className="font-light tracking-normal text-xl md:text-5xl md:mb-12">
          TRAVEL WITH US
        </h2>
        <div
          className="h-40 w-40 mx-auto md:absolute md:right-0 
          md:-top-4 md:h-56 md:w-56 
        "
        >
          <img src="/mainGlobe.png" alt="hero" />
        </div>
        <h1 className="text-2xl font-light italic tracking-wide md:text-5xl">
          <span className="font-bold ">DISCOVER</span> THE WORLD
        </h1>
        <div className="border border-main-black p-0.5 rounded-full inline-block ">
          <div className="flex space-x-2 bg-black text-white items-center justify-center rounded-full px-4 py-2 text-sm">
            <span className="w-5 h-5">
              <PlaneIcon />
            </span>
            <p>Flights</p>
          </div>
        </div>
        <form className="space-y-4 md:flex md:space-y-0 md:justify-between md:space-x-4 ">
          <div className="flex space-x-2 w-full md:items-center">
            <div className="bg-main-black rounded-lg flex-1 pt-4 px-3 ">
              <div className="flex flex-col space-y-1">
                <div className="text-center bg-main-yellow-color text-xs rounded-md py-1">
                  From
                </div>
                <Select>
                  <SelectTrigger className="w-full text-white border-none focus:border-none focus:ring-0 text-xs px-1  ">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="hidden md:block w-6 h-6">
              <ArrowRightLeftIcon />
            </div>
            <div className="bg-main-black rounded-lg flex-1 pt-4 px-3 ">
              <div className="flex flex-col space-y-1">
                <div className="text-center bg-main-yellow-color text-xs rounded-md py-1">
                  To
                </div>
                <Select>
                  <SelectTrigger className="w-full text-white border-none focus:border-none focus:ring-0 text-xs px-1  ">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center md:items-center md:justify-center">
            <div className="bg-main-black rounded-lg pt-4 px-3 md:pb-2 ">
              <div className="flex flex-col space-y-1">
                <div className="text-center bg-main-yellow-color text-xs rounded-md py-1">
                  Trip
                </div>
                <div className="flex text-white text-xs items-center space-x-4 py-1">
                  <span className={clsx(isChecked ? "opacity-10" : "")}>
                    Round Trip
                  </span>
                  <Switch checked={isChecked} onCheckedChange={setChecked} />
                  <span className={clsx(isChecked ? "" : "opacity-10")}>
                    One Way
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-2 w-full ">
            <div className="bg-main-black rounded-lg flex-1 pt-4 px-3 pb-2 ">
              <div className="flex flex-col space-y-1">
                <div className="text-center bg-main-yellow-color text-xs rounded-md py-1">
                  Departure
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        " justify-start text-left font-normal text-xs text-white ",
                        !departureDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-main-yellow-color-dark" />
                      {departureDate ? (
                        format(departureDate, "d/MM/yyyy")
                      ) : (
                        <span className="whitespace-pre text-main-yellow-color-dark">
                          Select Date
                        </span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={departureDate}
                      onSelect={setDepartureDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div
              className={clsx(
                "bg-main-black rounded-lg flex-1 pt-4 px-3 pb-2",
                isChecked
                  ? "opacity-25 pointer-events-none transform transition-all duration-300 ease-linear "
                  : ""
              )}
            >
              <div className="flex flex-col space-y-1">
                <div className="text-center bg-main-yellow-color text-xs rounded-md py-1">
                  Return
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        " justify-start text-left font-normal text-xs text-white ",
                        !returnDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-main-yellow-color-dark" />
                      {returnDate ? (
                        format(returnDate, "d/MM/yyyy")
                      ) : (
                        <span className="whitespace-pre text-main-yellow-color-dark">
                          Select Date
                        </span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={returnDate}
                      onSelect={setReturnDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
          <div className="w-full md:flex md:justify-center">
            <Button className=" relative bg-main-black text-white text-lg py-2 rounded-lg md:h-full md:px-20 w-full ">
              <div className="hidden md:block">
                <img
                  src={logo}
                  alt="logo"
                  className="absolute left-4 w-14 h-14 top-1/2 transform -translate-y-1/2"
                />
              </div>
              Discover
              <div className="absolute right-4 w-6 h-6 ">
                <RightIcon />
              </div>
            </Button>
          </div>
        </form>
      </div>
      <div className="flex flex-col space-y-4">
        <h3 className="text-2xl tracking-wide">Why Us</h3>
        <div className="grid grid-cols-2 gap-2 md:flex md:space-x-20">
          <div className="border-2 border-main-black rounded-lg flex flex-col w-full  text-center bg-main-white space-y-4 ">
            <div className="bg-main-black py-1 text-white rounded-t-md  ">
              <h5 className="text-sm font-medium md:text-xl">Trip planning</h5>
            </div>
            <div className="text-xs md:px-4">
              Plan the whole trip with us. Get a flight ticket, choose a hotel
              and rent a car.
            </div>
          </div>
          <div className="border-2 border-main-black rounded-lg flex flex-col w-full  text-center bg-main-white space-y-4 ">
            <div className="bg-main-black py-1 text-white rounded-t-md  ">
              <h5 className="text-sm font-medium md:text-xl">Honest prices</h5>
            </div>
            <div className="text-xs md:px-4">
              We offer the best prices on the market. We will help you to find.
              For flights, hotels, cars, and more.
            </div>
          </div>
          <div className="border-2 border-main-black rounded-lg flex flex-col w-full  text-center bg-main-white space-y-4">
            <div className="bg-main-black py-1 text-white rounded-t-md  ">
              <h5 className="text-sm font-medium md:text-xl">Support 24/7</h5>
            </div>
            <div className="text-xs md:px-4">
              We're here for you. Our experienced team will provide a reliable
              support as soon as possible
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <h3 className="text-2xl tracking-wide">Popular Questions</h3>
        <Accordion className="space-y-4" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How to book a flight?</AccordionTrigger>
            <AccordionContent>
              Go to flights section, search for the necessary flight and press
              'book', fill your data, choose your baggage, seatin and proceed to
              the payment tab, enter your credit card details and press 'pay
              now'.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How to book a hotel or rent a car?
            </AccordionTrigger>
            <AccordionContent>
              Go to hotels or cars section, search for the necessary hotel or a
              car and press 'book', fill your data and proceed to the payment
              tab, enter your credit card details and press 'pay now'.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I cancel my booking?</AccordionTrigger>
            <AccordionContent>
              Yes, you can cancel your booking in your profile section. You can
              also contact our support team and they will help you to cancel
              your booking.
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
    </main>
  );
}
