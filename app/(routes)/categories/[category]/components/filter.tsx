"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";

interface FilterProps {
  data: string[];
  name: string;
  value: string;
}
const Filter: React.FC<FilterProps> = ({ data, name, value }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(value);
  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());
  };
  return <div>Filter component</div>;
};

export default Filter;
