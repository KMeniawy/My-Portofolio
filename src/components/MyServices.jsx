const MyServices = () => {
  return (
    <div className="h-[90vh] bg-[#0000A6] text-white pt-24">
      <div className="pb-16">
        <h1 className="text-center mb-28 text-5xl mx-auto">My Services</h1>
      </div>
      <div className=" w-[100%]">
        <div className="flex flex-row justify-center mb-32 mx-10 text-center">
          <div className="w-[25%] mr-5">
            <span className="icon">
              <i className="icon-paintbrush"></i>
            </span>
            <h3 className="font-bold">Web Design</h3>
            <p>
              Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
              reprehenderit.
            </p>
          </div>
          <div className="w-[25%] mr-5">
            <span className="icon">
              <i className="icon-briefcase"></i>
            </span>
            <h3 className="font-bold">Branding</h3>
            <p>
              Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
              reprehenderit.
            </p>
          </div>
          <div className="w-[25%]">
            <span className="icon">
              <i className="icon-search"></i>
            </span>
            <h3 className="font-bold">Analytics</h3>
            <p>
              Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
              reprehenderit.
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-center mb-20 mx-10 text-center">
          <div className=" w-[25%] mr-5">
            <span className="icon">
              <i className="icon-bargraph"></i>
            </span>
            <div className="">
              <h3 className="font-bold">Web Developent</h3>
              <p>
                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                reprehenderit.
              </p>
            </div>
          </div>

          <div className=" w-[25%] mr-5">
            <span className="icon">
              <i className="icon-genius"></i>
            </span>
            <div className="">
              <h3 className="font-bold">Web Marketing</h3>
              <p>
                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                reprehenderit.
              </p>
            </div>
          </div>
          <div className=" w-[25%]">
            <span className="icon">
              <i className="icon-chat"></i>
            </span>
            <div className="">
              <h3 className="font-bold">Support</h3>
              <p>
                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
