import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white text-gray-800">
      {/* header */}
      <div className="bg-header bg-cover h-[100vh] flex justify-center items-center flex-col">
        <img
          src="./src/assets/avatar.jpeg"
          className="rounded-full bg-center w-52 "
        />
        <h1 className="text-5xl text-white -skew-y-[4deg] mt-10 mx-auto">
          - Karim ElMeniawy -
        </h1>
        <p className="mt-10 text-lg text-gray-400">
          UI/UX Designer & Frontend Developer
        </p>
        <ul className="">
          {/* TODO */}
          <li>
            <a href="#">
              <i className=""></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className=""></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className=""></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className=""></i>
            </a>
          </li>
        </ul>
      </div>
      {/* about */}
      <div className=" h-[70vh]">
        {/* TODO Animation */}
        <h1 className="text-center my-28 text-5xl mx-auto">About Me</h1>
        <div className="grid grid-flow-row-dense grid-cols-6 mx-48">
          <div className="col-span-2">
            {/* left-side */}
            <ul className="text-lg">
              <li>
                <span className="font-bold mr-2">Full Name: </span>
                <span className="second-block">Karim ElMeniawy</span>
              </li>
              <li>
                <span className="font-bold mr-2">Phone: </span>
                <span className="second-block">+20 127 312 1469</span>
              </li>
              <li>
                <span className="font-bold mr-2">Email: </span>
                <span className="second-block">
                  karim.elmeniawy.99@gmail.com
                </span>
              </li>
              <li>
                <span className="font-bold mr-2">Address: </span>
                <span className="second-block">Port Said, Egypt</span>
              </li>
            </ul>
          </div>
          <div className="col-span-4">
            {/* Right-side */}
            <h2 className="text-4xl mb-3">Hello There!</h2>
            <p className="mb-10">
              There live the blind texts far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in
              bookmarksgrove there live the blind texts far from the countries.
            </p>
            <p>
              Far far away, behind the word mountains, Quos quia provident
              consequuntur culpa facere ratione maxime commodi voluptates id
              repellat velit eaque aspernatur expedita. Possimus itaque adipisci
              there live the blind texts from the countries Vokalia and
              Consonantia, there live the blind texts. Quos quia provident
              consequuntur culpa facere ratione maxime commodi voluptates id
              repellat velit eaque aspernatur expedita. Possimus itaque
              adipisci.
            </p>
            <ul className="fh5co-social-icons">
              {/* TODO */}
              <li>
                <a href="#">
                  <i className="icon-twitter2"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-facebook3"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin2"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-dribbble2"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* resume */}
      <div className="h-[100vh]">
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
                Mathematics Department, Computer Science & Information
                Technology track.
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
                Web application that was focused on helping clients to
                understand lab tests more and recording for them these test to
                have a medical history, and some common Q&A.
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
                Web & User Development.
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
      {/* my services */}
      <div className="h-[90vh]">
        <div className="pt-3">
          <h1 className="text-center my-28 text-5xl mx-auto">My Services</h1>
        </div>
        <div className=" w-[100%]">
            <div className="flex flex-row justify-center mb-20 mx-10 text-center">
              <div className="w-[25%] mr-5">
                  <span className="icon">
                    <i className="icon-paintbrush"></i>
                  </span>
                    <h3 className="font-bold">Web Design</h3>
                    <p>
                    Facilis ipsum reprehenderit nemo molestias. Aut cum
                      mollitia reprehenderit.
                    </p>
              </div>
              <div className="w-[25%] mr-5">
                  <span className="icon">
                    <i className="icon-briefcase"></i>
                  </span>
                    <h3 className="font-bold">Branding</h3>
                    <p>
                    Facilis ipsum reprehenderit nemo molestias. Aut cum
                      mollitia reprehenderit.
                    </p>
              </div>
              <div className="w-[25%]">
                  <span className="icon">
                    <i className="icon-search"></i>
                  </span>
                    <h3 className="font-bold">Analytics ya 3m</h3>
                    <p>
                      Facilis ipsum reprehenderit nemo molestias. Aut cum
                      mollitia reprehenderit.
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
                      Facilis ipsum reprehenderit nemo molestias. Aut cum
                      mollitia reprehenderit.
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
                      Facilis ipsum reprehenderit nemo molestias. Aut cum
                      mollitia reprehenderit.
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
                      Facilis ipsum reprehenderit nemo molestias. Aut cum
                      mollitia reprehenderit.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
