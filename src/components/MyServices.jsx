import { myServicesData } from "../data";

const MyServices = () => {
  const {
    webDesign,
    branding,
    analytics,
    webDev,
    WebMarketing,
    support,
    Analytics,
    Brush,
    Chat,
    HandBag,
    Monitor,
    Megaphone} = myServicesData;
  return (
    <div className="2xl:h-[110vh] xl:h-[130vh] bg-gradient-to-tr from-[#010010] to-[#010185] text-white 2xl:pt-24 xl:pt-20" data-aos="fade-up" data-aos-delay="300">
      <div className="pb-16">
        <h1 className="text-center mb-28 text-5xl mx-auto" data-aos="fade" data-aos-delay="300">My Services</h1>
      </div>
      <div className=" w-[100%]">
        <div className="flex flex-row justify-center mb-32 mx-10 text-center">
          <div className="w-[25%] mr-5" data-aos="fade-right" data-aos-delay="300">
            <div className="flex justify-center h-24 items-center rounded-full ">
              <Brush/>
            </div>
            <h3 className="font-bold">Web Design</h3>
            <p className=" mx-4">
              {webDesign}
            </p>
          </div>
          <div className="w-[25%] mr-5"data-aos="fade" data-aos-delay="300">
            <div className="flex justify-center h-24 items-center rounded-full " >
              <HandBag/>
            </div>
            <h3 className="font-bold">Branding</h3>
            <p className=" mx-4">
              {branding}
            </p>
          </div>
          <div className="w-[25%]" data-aos="fade-left" data-aos-delay="300">
            <div className="flex justify-center h-24 items-center rounded-full " >
              <Analytics/>
            </div>
            <h3 className="font-bold">Analytics</h3>
            <p className=" mx-4">
              {analytics}
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-center mb-20 mx-10 text-center">
          <div className=" w-[25%] mr-5" data-aos="fade-right" data-aos-delay="300">
            <div className="flex justify-center h-24 items-center rounded-full ">
              <Monitor/>
            </div>
            <div className="">
              <h3 className="font-bold">Web Developent</h3>
              <p className=" mx-4">
                {webDev}
              </p>
            </div>
          </div>

          <div className=" w-[25%] mr-5" data-aos="fade" data-aos-delay="300">
            <div className="flex justify-center h-24 items-center rounded-full ">
              <Megaphone/>
            </div>
            <div className="">
              <h3 className="font-bold">Web Marketing</h3>
              <p className=" mx-4">
                {WebMarketing}
              </p>
            </div>
          </div>
          <div className=" w-[25%]" data-aos="fade-left" data-aos-delay="300">
            <div className="flex justify-center h-24 items-center rounded-full ">
              <Chat/>
            </div>
            <div className="">
              <h3 className="font-bold">Support</h3>
              <p className=" mx-4">
                {support}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
