import {
  InstagramIcon,
  PinterestIcon,
  RightIcon,
  TwitterIcon,
} from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-main-black space-y-6 text-white md:px-20 md:flex-row pt-4 pb-8  ">
      <div className="text-center md:flex-1 md:text-left md:mt-6 ">
        <h4>Tripper</h4>
        <div className="flex flex-col space-y-2">
          <p>117 Abbey Rd, London</p>
          <p>+44 000 000 000</p>
          <p>
            <a href="mailto:">info@tripper.com</a>
          </p>
        </div>
      </div>
      <div className="flex space-x-20 text-center justify-center md:flex-1 md:text-left md:mt-0">
        <div>
          <h4 className="text-2xl pb-4 font-semibold">Company</h4>
          <ul className="flex flex-col space-y-2 text-sm font-light ">
            <li>
              <a href="">Contacts</a>
            </li>
            <li>
              {" "}
              <a href="">Support</a>
            </li>
            <li>
              {" "}
              <a href="">Faq</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl pb-4 font-semibold">Quick Links</h4>
          <ul className="flex flex-col space-y-2 text-sm font-light ">
            <li>
              <a href="">Fligths</a>
            </li>{" "}
            <li>
              <a href="">Hotels</a>
            </li>{" "}
            <li>
              <a href="">Services</a>
            </li>{" "}
          </ul>
        </div>
      </div>
      <div className="text-center space-y-2 md:flex-1 md:mt-0">
        <h4 className="text-2xl md:text-left">News Letter</h4>
        <div className="flex w-full max-w-sm items-center space-x-2 relative">
          <Input
            className="px-2 placeholder:text-xs "
            placeholder="Email"
            type="email"
          />
          <Button
            className="absolute right-0 bg-transparent border-l border-l-secondary-white"
            type="submit"
          >
            <RightIcon />
          </Button>
        </div>
        <p className="text-xs text-main-yellow-color-dark pt-1 pb-2 border-b md:text-left  ">
          Subscribe to get news & letter
        </p>
        <div className="flex text-sm text-left items-center ">
          <div className="flex-1 text-lg">Find us on social media</div>
          <div className="flex space-x-4">
            <button className="w-6 h-6">
              <InstagramIcon />
            </button>
            <button className="w-6 h-6">
              <TwitterIcon />
            </button>
            <button className="w-6 h-6">
              <PinterestIcon />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
