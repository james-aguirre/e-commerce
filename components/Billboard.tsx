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
          backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/025/940/927/original/set-of-four-black-and-white-street-fashion-men-illustration-young-man-in-a-fashionable-clothes-military-style-90s-2000s-in-full-growth-posing-vector.jpg)`,
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
