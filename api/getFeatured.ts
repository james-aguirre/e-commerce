import { Product } from "@/public/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getFeatured = async (): Promise<Product[]> => {
  const supabase = createServerComponentClient({ cookies: cookies });

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_featured", true);
  if (error) throw new Error(error.message);
  return (data as any) || [];
};

export default getFeatured;
