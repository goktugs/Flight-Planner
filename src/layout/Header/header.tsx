import { SearchIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between container mt-6 ">
      <div>Tripper</div>

      <div className="hidden md:flex md:w-full md:max-w-xs relative">
        <Input />
        <Button className="absolute right-0 top-0 bg-main-yellow-color-dark p-2 text-main-black hover:bg-main-white hover:text-main-yellow-color-dark">
          <SearchIcon />
        </Button>
      </div>

      <ul className="flex flex-1 items-center justify-around space-x-2 md:justify-center md:space-x-40 md:flex-none ">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8 decoration-yellow-400 decoration-4"
                : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8 decoration-yellow-400 decoration-4"
                : ""
            }
            to="/flights"
          >
            Flights
          </NavLink>
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
