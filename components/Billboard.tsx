const Billboard = () => {
  return (
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
          backgroundImage: `url(https://www.teamspiritstoreusa.com/cdn/shop/collections/men-fashion-banner-2.png?v=1647143798)`,
        }}
      >
        <div
          className="h-full w-full flex flex-col justify-center items-center
        text-center gap-y-8
        "
        >
          <div className="font-bold text-3xl sm:text-4xl lg:text-5xl sm:max-w-xl max-w-xs text-white">
            Mega Sale!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
