import { Product } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getProductById = async (productId: string): Promise<Product[]> => {
  const supabase = createServerComponentClient({ cookies: cookies });
  const { data, error } = await supabase.from("products").select("*").eq("id", productId);
  if (error) throw new Error(error.message);
  return (data as any) || [];
};

export default getProductById;
