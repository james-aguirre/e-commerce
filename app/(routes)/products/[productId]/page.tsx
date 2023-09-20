import getCategoryById from "@/api/getCategoryById";
import getProductById from "@/api/getProductById";
import Gallery from "@/components/gallery";
import Container from "@/components/ui/Container";
import FeaturedList from "@/components/ui/FeaturedList";

interface ProductDetailsProps {
  params: {
    productId: string;
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = async ({ params }) => {
  const product = await getProductById(params.productId);
  // TODO change hardcoded values to be dynamic
  const images = [
    {
      id: "1",
      src: product[0].image1,
    },
    {
      id: "2",
      src: product[0].image2,
    },
  ];
  const suggestedProducts = await getCategoryById(params.productId);
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">info</div>
          </div>
          <hr className="my-10 " />
          <FeaturedList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
