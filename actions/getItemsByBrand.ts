import { Product } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getItemsByBrand = async (
  productBrand: string,
  category: string
): Promise<Product[]> => {
  const supabase = createServerComponentClient({ cookies: cookies });

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("brand", productBrand)
    .eq("category", category);
  if (error) throw new Error(error.message);
  return (data as any) || [];
};

export default getItemsByBrand;
