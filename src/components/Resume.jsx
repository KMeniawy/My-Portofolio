import { resumeData } from "../data";

const Resume = () => {
  const { point1, point2, point3, point4, point5, point6 } = resumeData;
  return (
    <div className="h-[120vh] mb-36">

      <h1 className="text-center my-28 text-5xl mx-auto">My Resume</h1>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
        integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
        crossorigin="anonymous"
      />
      <div class="min-h-screen bg-gray-100">
        <div class="min-h-screen flex justify-center">
          <div class="w-2/3 mx-auto">
            <div class="flex flex-row w-full">
              <div class="w-2/5 px-2 py-5">
                <div class="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                  <div class="text-gray-600 mb-2 flex justify-between">
                    <div class="font-bold">{point1[0]}</div>
                    <div class="flex flex-row">

                    </div>
                  </div>
                  <div class="text-gray-600">
                    {point1[2]}
                  </div>
                </div>
              </div>
              <div class="w-1/5  flex justify-center">
                <div class="relative flex h-full w-1 bg-[#0000a6c5] items-center justify-center">
                  <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-[#0000a6c5] leading-none text-center z-10 bg-white font-thin">
                    <div>{point1[1]}</div>
                  </div>
                </div>
              </div>
              <div class="w-2/5 px-2 py-5 "></div>
            </div>
            <div class="flex flex-row w-full">
              <div class="w-2/5 px-2 py-5"></div>
              <div class="w-1/5  flex justify-center">
                <div class="relative flex h-full w-1 bg-[#0000a6c5] items-center justify-center">
                  <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-[#0000a6c5] leading-none text-center z-10 bg-white font-thin">
                    {point2[1]}
                  </div>
                </div>
              </div>
              <div class="w-2/5 px-2 py-10 ">
                <div class="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                  <div class="text-gray-600 mb-2 flex justify-between">
                    <div class="font-bold">{point2[0]}</div>
                  </div>
                  <div class="text-gray-600">
                    {point2[2]}
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-row w-full">
              <div class="w-2/5 px-2 py-10">
                <div class="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                  <div class="text-gray-600 mb-2 flex justify-between">
                    <div class="font-bold">{point3[0]}</div>
                    <div class="flex flex-row">
                    </div>
                  </div>
                  <div class="text-gray-600">
                    {point3[2]}
                  </div>
                </div>
              </div>
              <div class="w-1/5  flex justify-center">
                <div class="relative flex h-full w-1 bg-[#0000a6c5] items-center justify-center">
                  <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-[#0000a6c5] leading-none text-center z-10 bg-white font-thin">
                    {point3[1]}
                  </div>
                </div>
              </div>
              <div class="w-2/5 px-2 py-10 "></div>
            </div>
            <div class="flex flex-row w-full">
              <div class="w-2/5 px-2 py-5"></div>
              <div class="w-1/5  flex justify-center">
                <div class="relative flex h-full w-1 bg-[#0000a6c5] items-center justify-center">
                  <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-[#0000a6c5] leading-none text-center z-10 bg-white font-thin">
                    {point4[1]}
                  </div>
                </div>
              </div>
              <div class="w-2/5 px-2 py-10 ">
                <div class="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                  <div class="text-gray-600 mb-2 flex justify-between">
                    <div class="font-bold">{point4[0]}</div>
                  </div>
                  <div class="text-gray-600">
                    {point4[2]}
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-row w-full">
              <div class="w-2/5 px-2 py-20">
                <div class="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                  <div class="text-gray-600 mb-2 flex justify-between">
                    <div class="font-bold">{point5[0]}</div>
                    <div class="flex flex-row">
                    </div>
                  </div>
                  <div class="text-gray-600">
                    {point5[2]}
                  </div>
                </div>
              </div>
              <div class="w-1/5  flex justify-center">
                <div class="relative flex h-full w-1 bg-[#0000a6c5] items-center justify-center">
                  <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-[#0000a6c5] leading-none text-center z-10 bg-white font-thin">
                    {point5[1]}
                  </div>
                </div>
              </div>
              <div class="w-2/5 px-2 py-10 "></div>
            </div>
            <div class="flex flex-row w-full">
              <div class="w-2/5 px-2 py-10">
                <div class="flex flex-col w-full px-4 py-5">
                  <div class="text-gray-600 mb-2 flex justify-between">
                    <div class="flex flex-row">
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-1/5  flex justify-center">
                <div class="relative flex h-full w-1  justify-center">
                  <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-[#0000a6c5] leading-none text-center z-10 bg-white font-thin">
                    {point6[0]}
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
