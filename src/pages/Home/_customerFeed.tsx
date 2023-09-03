import { format } from "date-fns";

export default function CustomerFeedback() {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-2xl tracking-wide">Popular Questions</h3>
      <div className="flex-col flex md:flex-row space-y-4 md:space-x-2 md:space-y-0">
        <div className="rounded-xl bg-main-black text-white flex flex-col py-2 px-4 flex-1 space-y-8">
          <div className="flex justify-between items-center pt-4">
            <span className="w-16 h-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
            </span>
            <span className="text-2xl">Merlot Peaches</span>
          </div>
          <div className="text-xs">
            Litter kitter kitty litty little kitten big roar roar feed me purr
            eat from dog's food. Jump up to edge of bath, fall in then scramble
            in a mad panic to get out bury the poop bury it deep but meowsiers
            so cat cat moo moo lick ears lick paws. Nya nya nyan leave hair
            everywhere, yet catch small lizards, bring them into house, then
            unable to find them on carpet. Catching very fast laser pointer nap
            all day. Push your water glass on the floor sleep on keyboard, for
            am in trouble, roll over, too cute for human to get mad, warm up
            laptop with butt lick butt fart rainbows until owner yells pee in
            litter box hiss at cats but love fish and groom forever, stretch
            tongue and leave it
          </div>
          <div className="text-white">
            <span>{format(new Date(), "dd MMMM yyyy")}</span>
          </div>
        </div>
        <div className="rounded-xl bg-main-black text-white flex flex-col py-2 px-4 flex-1 space-y-8">
          <div className="flex justify-between items-center pt-4">
            <span className="w-16 h-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
            </span>
            <span className="text-2xl">Paprika Pumpkin</span>
          </div>
          <div className="text-xs flex-1">
            Cat ipsum dolor sit amet, purr like an angel i like cats because
            they are fat and fluffy. Sleep everywhere, but not in my bed ask to
            be pet then attack owners hand for hopped up on catnip. Eat all the
            power cords. Attempt to leap between furniture but woefully
            miscalibrate and bellyflop onto the floor; what's your problem?
          </div>
          <div className="text-white">
            <span>{format(new Date(), "dd MMMM yyyy")}</span>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
