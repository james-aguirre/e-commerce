import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import getProducts from "@/api/getProducts";
import getFeatured from "@/api/getFeatured";
import FeaturedList from "@/components/ui/FeaturedList";

export const revalidate = 0;

const HomePage = async () => {
  const featured = await getFeatured();
  console.log(featured.length);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:pg-8">
        <FeaturedList title="Featured Products" items={featured} />
      </div>
    </Container>
  );
};

export default HomePage;
