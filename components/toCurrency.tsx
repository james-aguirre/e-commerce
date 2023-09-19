"use client";

import { toUSD } from "@/lib/utils";
import { useEffect, useState } from "react";

interface ToCurrencyProps {
  value?: string | number;
}
const ToCurrency: React.FC<ToCurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return <div className="font-semibold">{toUSD.format(Number(value))}</div>;
};

export default ToCurrency;
