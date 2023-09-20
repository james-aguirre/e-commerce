"use client";

import { useEffect, useState } from "react";
import Button from "./ui/Button";
import { ShoppingCart } from "lucide-react";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center">
        <ShoppingCart color="white" className="h-4 w-4" size={18} />
        <span
          className="text-sm text-white
        absolute right-5 -top-0 h-6 w-6 
        justify-center rounded-full p-2.5"
        >
          3
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
