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
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  function handleClick() {
    navigate("/");
  }

  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
  };

  return (
    <header className="flex items-center justify-between container mt-6 ">
      <button type="button" className="text-2xl" onClick={handleClick}>
        Tripper
      </button>

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
            {t("home")}
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
            {t("flights")}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8 decoration-yellow-400 decoration-4"
                : ""
            }
            to="/tripflights"
          >
            {t("tripFlight")}
          </NavLink>
        </li>
      </ul>

      <div className="flex space-x-1 text-xs">
        <Select
          onValueChange={(value) => {
            changeLanguage(value);
          }}
        >
          <SelectTrigger className="w-full border-none bg-transparent shadow-none active:border-none focus:border-none focus-visible:border-none">
            <SelectValue placeholder="En" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Language</SelectLabel>
              <SelectItem value="en">En</SelectItem>
              <SelectItem value="tr">Tr</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </header>
  );
}
