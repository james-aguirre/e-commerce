import { Product } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const param: string = "brand" || "size";

const getItemsByCategory = async (
  category: string,
  param?: string
): Promise<Product[]> => {
  const supabase = createServerComponentClient({ cookies: cookies });
  // TODO: add another case to filter by size
  if (param) {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("category", category)
      .eq("size", param);

    if (error) throw new Error(error.message);
    return (data as any) || [];
  } else {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("category", category);

    if (error) throw new Error(error.message);
    return (data as any) || [];
  }
};

export default getItemsByCategory;
