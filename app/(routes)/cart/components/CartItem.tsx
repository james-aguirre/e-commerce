"use client";

import Image from "next/image";
import { toast } from "react-hot-toast";
import { Currency, X } from "lucide-react";
import useCart from "@/hooks/useCart";
import IconButton from "@/components/ui/IconButton";
import ToCurrency from "@/components/toCurrency";
import { Product } from "@/types";

interface CartItemProps {
  data: Product;
}

const CartItem = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.image1}
          alt={`A picture of ${data.name}`}
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm text-black">
            <p>{data.brand}</p>
            <p className="ml-4 border-1 border-gray-200 pl-4">{data.size}</p>
          </div>
          <ToCurrency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
