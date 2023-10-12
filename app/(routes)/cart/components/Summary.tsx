"use client";

import Button from "@/components/ui/Button";
import ToCurrency from "@/components/toCurrency";
import useCart from "@/hooks/useCart";
import toast from "react-hot-toast";

const Summary = () => {
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const total = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    removeAll();
    return toast.success("Order placed.");
  };

  return (
    <div
      className="
            mt-16
            rounded-lg
            bg-gray-100
            px-4
            py-6
            sm:p-6
            lg:col-span-5
            lg:mt-0
            lg:p-8
            "
    >
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <ToCurrency value={total} />
        </div>
      </div>
      <form action="/">
        <section>
          <Button onClick={onCheckout} className="w-full mt-6 bg-black text-white">
            Checkout
          </Button>
        </section>
      </form>
    </div>
  );
};

export default Summary;
