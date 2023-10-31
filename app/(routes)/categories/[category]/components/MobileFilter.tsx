"use client";

import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { Product } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import Filter from "./Filter";

interface MobileFilterProps {
  data: Product[];
  name: string;
}

const MobileFilter: React.FC<MobileFilterProps> = ({ data, name }) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={onOpen}
        className="flex 
      items-center 
      lg:hidden 
      min-w-fit 
      bg-black
      
      "
      >
        Filters
        <Plus size={20} className="ml-1" />
      </Button>
      <Dialog open={open} onClose={onClose} className="relative z-40 lg:hidden">
        <div className="fixed inset-0 bg-black bg-opacity-50" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel
            className="relative ml-auto flex h-full w-full 
            max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"
          >
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} onClick={onClose} />} />
            </div>
            <div className="p-4">
              <Filter name="Size" data={data} />
              <Filter name="Brand" data={data} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilter;
