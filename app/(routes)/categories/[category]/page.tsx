import getItemsByCategory from "@/actions/getItemsByCategory";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import NoResults from "@/components/ui/NoResults";

interface CategoryPageProps {
  params: {
    category: string;
  };
  searchParams: {
    brand: string;
    size: string;
  };
}
export const revalidate = 0;

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const products = await getItemsByCategory(params.category);

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 pb-24 pt-10">
          <h1 className="font-semibold text-xl pb-8">
            View our top quality selection of {params.category}
          </h1>
          <div className="lg:grid lg:grid-flow-row lg:gap-x-8">
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
