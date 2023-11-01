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
            backgroundImage: `url(https://realmoney.thestreet.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTk1NzgyNDM4NTY2NzAxMDUw/the-stock-behind-vans-and-the-north-face-looks-ill-fitting.png)`,
          }}
        >
          <div
            className="h-full w-full flex flex-col justify-center items-center
        text-center gap-y-8
        "
          >
            {/* <div className="font-bold text-3xl sm:text-4xl lg:text-5xl sm:max-w-xl max-w-xs text-white">
            Mega Sale!
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
