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
      <div className=" h-[90vh]">
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
            <p>
              <ul class="fh5co-social-icons">
                {/* TODO */}
                <li>
                  <a href="#">
                    <i class="icon-twitter2"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icon-facebook3"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icon-linkedin2"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icon-dribbble2"></i>
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      {/* resume */}
      <div className="h-[100vh]">
        {/* TODO  animation */}
        <h1 className="text-center my-28 text-5xl mx-auto">My Resume</h1>
        <div className="flex justify-center">
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  aria-hidden="true"
                  class="w-3 h-3 text-blue-800 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Application UI v2.0.0{" "}
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on January 13th, 2022
              </time>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
            <li class="mb-10 ml-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  aria-hidden="true"
                  class="w-3 h-3 text-blue-800 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Figma v1.3.0
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 7th, 2021
              </time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li class="ml-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  aria-hidden="true"
                  class="w-3 h-3 text-blue-800 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Library v1.2.2
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 2nd, 2021
              </time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
