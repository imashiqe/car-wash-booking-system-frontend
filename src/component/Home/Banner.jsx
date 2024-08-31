const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Book Your Car Wash Time</h1>
            <div className="flex">
              <div>
                <input
                  type="text"
                  placeholder="Type here Service Name"
                  className="input  rounded-none  text-black  w-full max-w-xs"
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Type here"
                  className="input  rounded-none w-full max-w-xs text-black"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input  rounded-none  text-black w-full max-w-xs"
                />
              </div>
              <div>
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
