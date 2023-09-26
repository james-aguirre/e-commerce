import getItemsByCategory from "@/api/getItemsByCategory";
import Container from "@/components/ui/Container";
import Filter from "./components/filter";
import ProductCard from "@/components/ui/ProductCard";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export const revalidate = 0;

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const products = await getItemsByCategory(params.category);

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 pb-24 pt-10">
          <h1 className="font-semibold text-lg pb-4">
            View our top quality selection of {params.category}
          </h1>
          <div className="lg:grid lg:grid-flow-row lg:gap-x-8">
            {/* Add mobile filters */}
            <div className="hidden lg:block">
              {/* <Filter valueKey="sizeId" name="sizes" data={size} /> */}
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
