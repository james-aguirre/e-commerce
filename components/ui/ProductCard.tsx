"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import ToCurrency from "../toCurrency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/UsePreviewModal";
import useCart from "@/hooks/useCart";

interface ProductCard {
  data: Product;
}
const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();
  const handleClick = () => {
    router.push(`/products/${data.id}`);
  };

  // Decided to not use the modal, in favor of a new page,
  // leaving the code here for future reference in other projects
  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    previewModal.onOpen(data);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div className="group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          fill
          src={data?.image1!}
          alt={`A picture of ${data?.name}`}
          onClick={handleClick}
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={handleClick}
              icon={<Expand size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.description}</p>
      </div>
      <div className="flex justify-between">
        <ToCurrency value={data.price} />
      </div>
      <button
        onClick={onAddToCart}
        className="bg-[#1B1F20] text-white text-center w-11/12 display-flex justify-between font-semibold py-2 px-4 border border-white rounded shadow"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
