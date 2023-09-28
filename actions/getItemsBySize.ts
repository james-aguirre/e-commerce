import { Product } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getItemsBySize = async (productSize: string): Promise<Product[]> => {
  const supabase = createServerComponentClient({ cookies: cookies });

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("size", productSize);

  if (error) throw new Error(error.message);

  return (data as any) || [];
};

export default getItemsBySize;
