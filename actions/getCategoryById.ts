import { Product } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import getProductById from "./getProductById";

const getCategoryById = async (productId: string): Promise<Product[]> => {
  const supabase = createServerComponentClient({ cookies: cookies });
  const product = await getProductById(productId);
  const category = product[0].category;
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category)
    .neq("id", productId)
    .order("id", { ascending: false });

  if (error) throw new Error(error.message);

  return (data as any) || [];
};

export default getCategoryById;
