import PlaneIcon from "@/assets/icons/PlaneIcon";

export default function SearchTop() {
  return (
    <>
      {" "}
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
    </>
  );
}
