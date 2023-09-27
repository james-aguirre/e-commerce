"use client";

import Container from "@/components/ui/Container";
import useCart from "@/hooks/useCart";
import { useEffect, useState } from "react";

const CartPage = () => {
  const cart = useCart();

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="">Shopping Cart</h1>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
