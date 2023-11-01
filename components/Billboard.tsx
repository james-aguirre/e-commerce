const Billboard = () => {
  return (
    <div className="max">
      <h1 className="text-2xl sm:text-3xl md:text-4xl mt-6 font-bold ml-5">
        Checkout our new fall releases!
      </h1>
      <div className="p-4 sm:p-6 lg:p-6 rounded-xl overflow-hidden">
        <div
          className="
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
            className="h-full w-full flex flex-col justify-center items-center
        text-center gap-y-8
        "
          >
            {/* <div className="font-bold text-5xl sm:text-4xl lg:text-5xl sm:max-w-xl max-w-xs text-white">
              Mega Sale!
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
