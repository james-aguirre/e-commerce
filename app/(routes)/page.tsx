import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";

export const revalidate = 0;

const HomePage = () => {
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:pg-8">
        {/* <ProductList title='Featured Products' items={products} */}
      </div>
    </Container>
  );
};

export default HomePage;
