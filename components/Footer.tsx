"use client";

import IconButton from "./ui/IconButton";
import { Github } from "lucide-react";
import Link from "next/link";

// TODO: Add link to github icon, finish styling

const Footer = () => {
  return (
    <footer className="bg-[#1B1F20] border-t">
      <div className="mx-auto py-10 flex gap-4 justify-center">
        <p className="text-center text-white text-sm mt-2">
          &copy; Created by James Aguirre
        </p>
        <Link href="https://github.com/james-aguirre">
          <IconButton
            onClick={() => {}}
            icon={<Github size={20} />}
            className="bg-transparent text-white border-none hover:bg-gray-700"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
