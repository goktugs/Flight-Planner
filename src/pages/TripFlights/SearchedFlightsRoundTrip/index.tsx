import { useTranslation } from "react-i18next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ToFlights from "./To";
import FromFlights from "./From";

export default function SearchedFlightsRoundTrip() {
  const { t } = useTranslation();

  return (
    <div className="flex-1 flex flex-col space-y-8">
      <Tabs defaultValue="From">
        <TabsList className=" space-x-4">
          <TabsTrigger value="From">{t("from")}</TabsTrigger>
          <TabsTrigger value="To"> {t("to")}</TabsTrigger>
        </TabsList>

        <TabsContent className="flex-1 flex flex-col space-y-8" value="From">
          <FromFlights />
        </TabsContent>
        <TabsContent className="flex-1 flex flex-col space-y-8" value="To">
          <ToFlights />
        </TabsContent>
      </Tabs>
    </div>
  );
}
