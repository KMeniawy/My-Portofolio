import { resumeData } from "../data";

const Resume = () => {
  const { point1, point2, point3, point4, point5, point6 } = resumeData;
  return (
    <div className="3xl:h-[130vh] 2xl:h-[140vh] md:h-[110] 3xl:mb-0 md:mb-32" data-aos="fade-up" data-aos-delay="300">

      <h1 className="text-center my-28 text-5xl mx-auto">My Resume</h1>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
        integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
      />
      <div className="min-h-screen bg-white">
        <div className="min-h-screen flex justify-center">
          <div className="w-2/3 mx-auto">
            <div className="flex flex-row w-full" >
              <div className="w-2/5 px-2 py-5">
                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5" data-aos="fade-right" data-aos-delay="300">
                  <div className="text-gray-600 mb-2 flex justify-between">
                    <div className="font-bold">{point1[0]}</div>
                    <div className="flex flex-row">

                    </div>
                  </div>
                  <div className="text-gray-600">
                    {point1[2]}
                  </div>
                </div>
              </div>
              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-[#0000a6c5] items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-[#0000a6c5] leading-none text-center z-10 bg-white font-thin ">
                    <div data-aos="fade" data-aos-delay="300" className="font-bold">{point1[1]}</div>
                  </div>
                </div>
              </div>
              <div className="w-2/5 px-2 py-5 "></div>
            </div>
            <div className="flex flex-row w-full">
              <div className="w-2/5 px-2 py-5"></div>
              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-[#0000a6c5] items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-[#0000a6c5] leading-none text-center z-10 bg-white font-thin">
                    <div data-aos="fade" data-aos-delay="300" className="font-bold">{point2[1]}</div>
                  </div>
                </div>
              </div>
              <div className="w-2/5 px-2 py-10 ">
                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5" data-aos="fade-left" data-aos-delay="300">
                  <div className="text-gray-600 mb-2 flex justify-between">
                    <div className="font-bold">{point2[0]}</div>
                  </div>
                  <div className="text-gray-600">
                    {point2[2]}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div className="w-2/5 px-2 py-10">
                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5" data-aos="fade-right" data-aos-delay="300">
                  <div className="text-gray-600 mb-2 flex justify-between">
                    <div className="font-bold">{point3[0]}</div>
                    <div className="flex flex-row">
                    </div>
                  </div>
                  <div className="text-gray-600">
                    {point3[2]}
                  </div>
                </div>
              </div>
              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-[#0000a6c5] items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-[#0000a6c5] leading-none text-center z-10 bg-white font-thin">
                    <div data-aos="fade" data-aos-delay="300" className="font-bold">{point3[1]}</div>
                  </div>
                </div>
              </div>
              <div className="w-2/5 px-2 py-10 "></div>
            </div>
            <div className="flex flex-row w-full">
              <div className="w-2/5 px-2 py-5"></div>
              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-[#0000a6c5] items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-[#0000a6c5] leading-none text-center z-10 bg-white font-thin">
                    <div data-aos="fade" data-aos-delay="300" className="font-bold">{point4[1]}</div>
                  </div>
                </div>
              </div>
              <div className="w-2/5 px-2 py-10 ">
                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5" data-aos="fade-left" data-aos-delay="300">
                  <div className="text-gray-600 mb-2 flex justify-between">
                    <div className="font-bold">{point4[0]}</div>
                  </div>
                  <div className="text-gray-600">
                    {point4[2]}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div className="w-2/5 px-2 py-20">
                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5" data-aos="fade-right" data-aos-delay="300">
                  <div className="text-gray-600 mb-2 flex justify-between">
                    <div className="font-bold">{point5[0]}</div>
                    <div className="flex flex-row">
                    </div>
                  </div>
                  <div className="text-gray-600">
                    {point5[2]}
                  </div>
                </div>
              </div>
              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-[#0000a6c5] items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-[#0000a6c5] leading-none text-center z-10 bg-white font-thin">
                    <div data-aos="fade" data-aos-delay="300" className="font-bold">{point5[1]}</div>
                  </div>
                </div>
              </div>
              <div className="w-2/5 px-2 py-10 "></div>
            </div>
            <div className="flex flex-row w-full">
              <div className="w-2/5 px-2 py-10">
                <div className="flex flex-col w-full px-4 py-5">
                  <div className="text-gray-600 mb-2 flex justify-between">
                    <div className="flex flex-row">
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1  justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-[#0000a6c5] leading-none text-center z-10 bg-white font-thin" >
                    <div data-aos="fade" data-aos-delay="300" className="font-bold">{point6[0]}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
