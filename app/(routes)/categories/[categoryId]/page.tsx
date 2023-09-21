import Container from "@/components/ui/Container";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    brandId: string;
    sizeId: string;
  };
}

export const revalidate = 0;

const CategoryPage: React.FC<CategoryPageProps> = async ({ params, searchParams }) => {
  return (
    <div className="bg-[#080A0B]">
      <Container>
        <div>category search!</div>
      </Container>
    </div>
  );
};

export default CategoryPage;
