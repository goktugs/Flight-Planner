// fixme: from ve tonun calısma yapısı degismeli bazı komplike durumlar fixlenmedi
// fixme: ts hatalaruda fixlenmeli

import { RightIcon } from "@/assets/icons";
import ArrowRightLeftIcon from "@/assets/icons/ArrowRightLeft";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { PopoverTrigger } from "@radix-ui/react-popover";
import clsx from "clsx";
import { format } from "date-fns";
import { useState } from "react";

import logo from "/logo.gif";
import { useQuery } from "react-query";
import SearchTop from "./_searchTop";
import { AutoComplete } from "@/components/autoComplete";
import { IAirport } from "../../../types/fligthSearch";
import { useNavigate } from "react-router-dom";
import { useFlightStore } from "@/store/flightSlice";
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from "react-i18next";

export default function FlightSearch() {
  const [isTripType, setIsTripType] = useState<boolean>(false);
  const [departureDate, setDepartureDate] = useState<Date | undefined>();
  const [returnDate, setReturnDate] = useState<Date | undefined>();
  const [depAirport, setDepAirport] = useState<IAirport | undefined>();
  const [arrAirport, setArrAirport] = useState<IAirport | undefined>();
  const { t } = useTranslation();

  const { toast } = useToast();

  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: "flights",
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_PROD_URL}/api/getAllAirports`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return res.json();
    },
    staleTime: Infinity,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isTripType) {
      // Round trip seçili ise
      fetch(
        `${import.meta.env.VITE_PROD_URL}/api/postGetFlightsForRoundTrip/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            departureDate,
            returnDate,
            depAirport,
            arrAirport,
          }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.error) {
            toast({
              title: "Blank Fields",
              description: `${res.error}. Please fill all fields`,
              variant: "destructive",
            });
          } else {
            useFlightStore.setState({ flights: res });
            navigate("/flights", { state: { targetId: "flightsSection" } });
          }
        });
    } else {
      fetch(`${import.meta.env.VITE_PROD_URL}/api/getFlightsForOneWay/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          departureDate,
          depAirport,
          arrAirport,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.error) {
            toast({
              title: "Blank Fields",
              description: `${res.error}. Please fill all fields`,
              variant: "destructive",
            });
          } else {
            useFlightStore.setState({ flights: res });
            navigate("/flights", { state: { targetId: "flightsSection" } });
          }
        });
    }
  };

  return (
    <div className="border-2 border-main-black rounded-lg p-4 space-y-4 relative">
      <SearchTop />
      <form
        onSubmit={handleSubmit}
        className="space-y-4 md:flex md:space-y-0 md:space-x-4 "
      >
        <div className="flex space-x-2 w-full md:items-center">
          <div className="bg-main-black rounded-lg flex-1 pt-4 px-3 ">
            <div className="flex flex-col space-y-1">
              <div className="text-center bg-main-yellow-color text-xs rounded-md py-1">
                {t("from")}
              </div>

              <AutoComplete
                options={
                  data?.filter((item: IAirport) => {
                    if (arrAirport) {
                      return item.id !== arrAirport.id;
                    }
                    return true;
                  }) || []
                }
                emptyMessage={"Cannot Find an Airport"}
                // @ts-ignore next-line
                onValueChange={(value) => setDepAirport(value)}
              />
            </div>
          </div>
          <div className="hidden md:block w-6 h-6">
            <ArrowRightLeftIcon />
          </div>
          <div className="bg-main-black rounded-lg flex-1 pt-4 px-3 ">
            <div className="flex flex-col space-y-1">
              <div className="text-center bg-main-yellow-color text-xs rounded-md py-1">
                {t("to")}
              </div>

              <AutoComplete
                options={
                  data?.filter((item: IAirport) => {
                    if (depAirport) {
                      return item.id !== depAirport.id;
                    }
                    return true;
                  }) || []
                }
                emptyMessage={"Cannot Find an Airport"}
                // @ts-ignore next-line
                onValueChange={(value) => setArrAirport(value)}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center md:items-center md:justify-center">
          <div className="bg-main-black rounded-lg pt-4 px-3 md:pb-2 ">
            <div className="flex flex-col space-y-1">
              <div className="text-center bg-main-yellow-color text-xs rounded-md py-1">
                {t("trip")}
              </div>
              <div className="flex text-white text-center text-xs items-center space-x-4 py-1">
                <span className={clsx(isTripType ? "opacity-10" : "")}>
                  {t("oneWay")}
                </span>
                <Switch checked={isTripType} onCheckedChange={setIsTripType} />
                <span className={clsx(isTripType ? "" : "opacity-10")}>
                  {t("roundTrip")}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-2 w-full ">
          <div className="bg-main-black rounded-lg flex-1 pt-4 px-3 pb-2 ">
            <div className="flex flex-col space-y-1">
              <div className="text-center bg-main-yellow-color text-xs rounded-md py-1">
                {t("departure")}
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
                    disabled={
                      returnDate
                        ? { after: returnDate }
                        : { before: new Date() }
                    }
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
              !isTripType
                ? "opacity-25 pointer-events-none transform transition-all duration-300 ease-linear "
                : ""
            )}
          >
            <div className="flex flex-col space-y-1">
              <div className="text-center bg-main-yellow-color text-xs rounded-md py-1">
                {t("return")}
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
                    disabled={
                      departureDate
                        ? { before: departureDate }
                        : { before: new Date() }
                    }
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
          <Button
            type="submit"
            className=" relative bg-main-black text-white text-lg py-2 rounded-lg md:h-full md:px-20 w-full "
          >
            <div className="hidden md:block">
              <img
                src={logo}
                alt="logo"
                className="absolute left-4 w-14 h-14 top-1/2 transform -translate-y-1/2"
              />
            </div>
            {t("discover")}
            <div className="absolute right-4 w-6 h-6 ">
              <RightIcon />
            </div>
          </Button>
        </div>
      </form>
    </div>
  );
}
