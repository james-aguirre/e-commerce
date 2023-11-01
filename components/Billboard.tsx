"use client";

import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

const Billboard = () => {
  const router = useRouter();
  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    router.push("/products/13");
  };

  return (
    <div className="max">
      <h1 className="text-2xl sm:text-3xl md:text-4xl mt-6 font-bold ml-5">
        Now Featuring Uniqlo!
      </h1>
      <div className="p-4 sm:p-6 lg:p-6 rounded-xl overflow-hidden">
        <div
          onClick={handleClick}
          className="
      cursor-pointer
      rounded-xl 
      relative 
      aspect-square 
      md:aspect-[2.4/1] 
      overflow-hidden 
      bg-cover
      h-full
      w-full"
          style={{
            backgroundImage: `url(https://www.shopriteholdings.co.za/newsroom/2023/uniq-store-launch/_jcr_content/root/container/container_623787083/container_146590027/image_copy_455952545_1299909073.coreimg.90.1900.jpeg/1684325312785/uniq-launch-b.jpeg)`,
          }}
        >
          <div
            className="h-full w-full flex flex-col justify-end pb-8 items-center
        text-center gap-y-8
        "
          >
            {/* <button className="font-bold text-4xl sm:text-3xl lg:text-4xl sm:max-w-xl max-w-xs text-white bg-red-600 px-3 rounded py-2">
              Shop now!
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
