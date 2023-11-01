"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { Product } from "@/types";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface FilterProps {
  data: Product[];
  name: string;
}
const Filter: React.FC<FilterProps> = ({ data, name }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    try {
      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  }, [data]);

  const selectedValue = searchParams.get(name);
  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [name]: id,
    };

    if (current[name] === id) {
      query[name] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );
    router.push(url);
  };

  let filteredProducts = products.filter((p) => p.name.toLowerCase());
  console.log(data);
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.brand} className="flex items-center">
            <Button
              className={cn(`rounded-md text-sm 
            text-grey-800 p-2
             bg-white 
             border
             hover:bg-gray-300
             border-gray-300 
             w-auto`)}
              onClick={() => onClick(filter.brand!)}
            >
              {filter.brand}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Filter;
