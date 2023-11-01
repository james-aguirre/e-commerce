import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import getFeatured from "@/actions/getFeatured";
import FeaturedList from "@/components/ui/FeaturedList";
import getNew from "@/actions/getNew";

export const revalidate = 0;

const HomePage = async () => {
  const featured = await getFeatured();
  const newItems = await getNew();

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:pg-8">
          <FeaturedList title="Checkout Our New Fall Releases" items={newItems} />
          <FeaturedList title="Featured Products" items={featured} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
