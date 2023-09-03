import { useTranslation } from "react-i18next";

export default function WhyUs() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-2xl tracking-wide">{t("whyus")}</h3>
      <div className="grid grid-cols-2 gap-2 md:flex md:space-x-20">
        <div className="border-2 border-main-black rounded-lg flex flex-col w-full  text-center bg-main-white space-y-4 ">
          <div className="bg-main-black py-1 text-white rounded-t-md  ">
            <h5 className="text-sm font-medium md:text-xl">
              {t("tripPlanning")}
            </h5>
          </div>
          <div className="text-xs md:px-4">
            Plan the whole trip with us. Get a flight ticket, choose a hotel and
            rent a car.
          </div>
        </div>
        <div className="border-2 border-main-black rounded-lg flex flex-col w-full  text-center bg-main-white space-y-4 ">
          <div className="bg-main-black py-1 text-white rounded-t-md  ">
            <h5 className="text-sm font-medium md:text-xl">
              {t("honestPrices")}
            </h5>
          </div>
          <div className="text-xs md:px-4">
            We offer the best prices on the market. We will help you to find.
            For flights, hotels, cars, and more.
          </div>
        </div>
        <div className="border-2 border-main-black rounded-lg flex flex-col w-full  text-center bg-main-white space-y-4">
          <div className="bg-main-black py-1 text-white rounded-t-md  ">
            <h5 className="text-sm font-medium md:text-xl">
              {t("support")}
              24/7
            </h5>
          </div>
          <div className="text-xs md:px-4">
            We're here for you. Our experienced team will provide a reliable
            support as soon as possible
          </div>
        </div>
      </div>
    </div>
  );
}
