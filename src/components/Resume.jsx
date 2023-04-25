const Resume = () => {
  return (
    <div className="h-[100vh] mb-36">
      {/* TODO  animation */}
      <h1 className="text-center my-28 text-5xl mx-auto">My Resume</h1>
      <div className="grid grid-flow-row-dense grid-cols-3 ml-40">
        <ol className="relative border-l border-gray-200 dark:border-gray-700 flex flex-col justify-center w-[150%] mx-auto">
          <li className="mb-16 ml-8 ">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-[#fff] hover:bg-[#0000A6] transition-colors"></span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
              Faculty of Science
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2018
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Mathematics Department, Computer Science & Information Technology
              track.
            </p>
          </li>
          <li className="mb-16 ml-8">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-[#fff] hover:bg-[#0000A6] transition-colors"></span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
              Major Science Team
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2019
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Design Committee Member at MST.
            </p>
          </li>
          <li className="mb-16 ml-8">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-[#fff] hover:bg-[#0000A6] transition-colors"></span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
              Google Developer Student Club PSU
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2020
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Design Committee Member at GDSC.
            </p>
          </li>
          <li className="mb-16 ml-8">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-[#fff] hover:bg-[#0000A6] transition-colors"></span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
              Graduation Project
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2021
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Web application that was focused on helping clients to understand
              lab tests more and to save it for them in their medical record,
              and some common Q&A.
            </p>
          </li>
          <li className="ml-8 mb-5">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-[#fff] hover:bg-[#0000A6] transition-colors"></span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
              Information Technology Institute
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2022
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Web & User Interface Development.
            </p>
          </li>
          <li className="ml-8 mt-20">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 -bottom-5 ring-8 ring-white dark:ring-gray-900 dark:bg-[#fff] hover:bg-[#0000A6] transition-colors"></span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 absolute -bottom-8">
              Present
            </h3>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Resume;
