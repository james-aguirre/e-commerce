import { Product } from "@/types";
import ToCurrency from "../toCurrency";
import Button from "./Button";

interface InfoProps {
  data: Product;
}

// TODO: add a quantity button for add to cart

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <ToCurrency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold text-black">{data.description}</h3>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="bg-black w-fit text-sm p-2 px-3">Add to cart</Button>
      </div>
    </div>
  );
};

export default Info;
