import getCategoryById from "@/api/getCategoryById";
import getProductById from "@/api/getProductById";
import Gallery from "@/components/gallery";
import Container from "@/components/ui/Container";
import FeaturedList from "@/components/ui/FeaturedList";
import Info from "@/components/ui/Info";

interface ProductDetailsProps {
  params: {
    productId: string;
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = async ({ params }) => {
  // TODO change hardcoded values to render dynamically
  const data = await getProductById(params.productId);
  const productInfo = data[0];
  const suggestedProducts = await getCategoryById(params.productId);
  const images = [
    {
      id: "1",
      src: productInfo.image1,
    },
    {
      id: "2",
      src: productInfo.image2,
    },
  ];
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={productInfo} />
            </div>
          </div>
          <hr className="my-10 " />
          <FeaturedList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
