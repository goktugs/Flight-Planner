import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Header() {
  return (
    <header className="flex items-center justify-between md:container">
      <div>Tripper</div>

      <ul className="flex flex-1 items-center justify-around space-x-2 ">
        <li className="underline underline-offset-8 decoration-yellow-400 decoration-4 ">
          <a href="/">Home</a>
        </li>
        <li className="underline underline-offset-8 decoration-yellow-400 decoration-4 ">
          <a href="/flights">Flights</a>
        </li>
      </ul>

      <div className="flex space-x-1 text-xs">
        <Select>
          <SelectTrigger className="w-full border-none bg-transparent shadow-none active:border-none focus:border-none focus-visible:border-none">
            <SelectValue placeholder="EN" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Language</SelectLabel>
              <SelectItem value="en">En</SelectItem>
              <SelectItem value="tr">Tr</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full border-none bg-transparent shadow-none active:border-none focus:border-none focus-visible:border-none">
            <SelectValue placeholder="USD" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Currency</SelectLabel>
              <SelectItem value="usd">Usd</SelectItem>
              <SelectItem value="euro">Euro</SelectItem>
              <SelectItem value="tl">Tl</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </header>
  );
}
