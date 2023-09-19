"use client";

import { Product } from "@/public/types";
import Image from "next/image";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import ToCurrency from "../toCurrency";

interface ProductCard {
  data: Product;
}
const ProductCard: React.FC<ProductCard> = ({ data }) => {
  return (
    <div className="group cursor-pointer rounded-xl border p-3 space-y-4 hover:scale-110">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          fill
          src={data?.image!}
          alt={"image"}
          className="aspect-square object-cover rounded-md"
        />

        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
          {/* <div className="font-bold text-xl">{data?.name}</div>
        <div className="text-gray-500">{data?.description}</div>
        <div className="text-gray-500">{data?.price}</div> */}
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.description}</p>
      </div>
      <div className="flex justify-between">
        <ToCurrency value={data.price} />
      </div>
    </div>
  );
};

export default ProductCard;
