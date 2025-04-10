"use client";
import Dropdown from "./Dropdown";
import productData from "./Data/Products.json";
import solutionsData from "./Data/Solutions.json";
import resourcesData from "./Data/Resources.json";
import blogData from "./Data/Blog.json";
import ClientNav from "./ClientNav";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type DropdownItem = {
  id: string;
  name: string;
  description: string;
  icon: string;
  link: string;
};

export default function CommonNavbar() {

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const noLayoutPaths = ["/auth/sign-in","/meetings", "/auth/sign-up", "/next/contacts", "/next/messenger","/drive/home"];
  
   const pathName = usePathname();
    if (noLayoutPaths.includes(pathName)) {
      return null;
    }
  

  const dropdownItems = [
    { label: "Product", items: productData },
    { label: "Solutions", items: solutionsData },
    { label: "Resources", items: resourcesData },
    { label: "Blog", items: blogData },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b">
      {/* Logo */}
      <div
        onClick={() => router.push("/")}
        className="flex items-center space-x-2 cursor-pointer"
      >
        <img
          src="https://i.ibb.co.com/CzYmGpN/lark-logo.png"
          alt="Lark Logo"
          className="w-6 h-6"
        />
        <span className="text-lg font-semibold text-gray-900">Lark</span>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div
        className={`md:flex md:items-center md:space-x-6 ${
          isOpen
            ? "fixed inset-0 bg-white shadow-lg p-6 flex flex-col items-center space-y-4 z-50"
            : "hidden md:flex"
        }`}
      >
        {dropdownItems.map(({ label, items }) => (
          <Dropdown key={label} label={label} items={items as DropdownItem[]} />
        ))}
        <button className="text-defaultText font-medium hover:text-orange-500">
          Trust
        </button>
        <button className="text-defaultText font-medium hover:text-orange-500">
          Pricing
        </button>

        <div className="md:hidden w-full flex flex-col items-center space-y-4">
          <ClientNav />
        </div>
      </div>

      <div className="hidden md:block">
        <ClientNav />
      </div>
    </nav>
  );
}
