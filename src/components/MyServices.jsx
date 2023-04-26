import { myServicesData } from "../data";

const MyServices = () => {
  const {  Analytics,
    Brush,
    Chat,
    HandBag,
    Monitor,
    Megaphone} = myServicesData;
  return (
    <div className="h-[100vh] bg-[#0000A6] text-white pt-24" data-aos="fade-up" data-aos-delay="300">
      <div className="pb-16">
        <h1 className="text-center mb-28 text-5xl mx-auto" data-aos="fade" data-aos-delay="300">My Services</h1>
      </div>
      <div className=" w-[100%]">
        <div className="flex flex-row justify-center mb-32 mx-10 text-center">
          <div className="w-[25%] mr-5" data-aos="fade-right" data-aos-delay="300">
            <div className="bg-white flex justify-center h-24 items-center rounded-full mx-44">
              <Brush/>
            </div>
            <h3 className="font-bold">Web Design</h3>
            <p>
              Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
              reprehenderit.
            </p>
          </div>
          <div className="w-[25%] mr-5"data-aos="fade" data-aos-delay="300">
            <div className="bg-white flex justify-center h-24 items-center rounded-full mx-44" >
              <HandBag/>
            </div>
            <h3 className="font-bold">Branding</h3>
            <p>
              Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
              reprehenderit.
            </p>
          </div>
          <div className="w-[25%]" data-aos="fade-left" data-aos-delay="300">
            <div className="bg-white flex justify-center h-24 items-center rounded-full mx-44" >
              <Analytics/>
            </div>
            <h3 className="font-bold">Analytics</h3>
            <p>
              Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
              reprehenderit.
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-center mb-20 mx-10 text-center">
          <div className=" w-[25%] mr-5" data-aos="fade-right" data-aos-delay="300">
            <div className="bg-white flex justify-center h-24 items-center rounded-full mx-44">
              <Monitor/>
            </div>
            <div className="">
              <h3 className="font-bold">Web Developent</h3>
              <p>
                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                reprehenderit.
              </p>
            </div>
          </div>

          <div className=" w-[25%] mr-5" data-aos="fade" data-aos-delay="300">
            <div className="bg-white flex justify-center h-24 items-center rounded-full mx-44">
              <Megaphone/>
            </div>
            <div className="">
              <h3 className="font-bold">Web Marketing</h3>
              <p>
                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                reprehenderit.
              </p>
            </div>
          </div>
          <div className=" w-[25%]" data-aos="fade-left" data-aos-delay="300">
            <div className="bg-white flex justify-center h-24 items-center rounded-full mx-44">
              <Chat/>
            </div>
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
