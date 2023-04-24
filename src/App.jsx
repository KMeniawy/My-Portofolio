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
      <div className=" h-[60vh]">
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
                understand lab tests more and to save it for them in their
                medical record, and some common Q&A.
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
      {/* my services */}
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
      {/* skills */}
      <div className="h-[100vh] mb-10">
        <div className="pt-5 pb-2">
          <h1 className="text-center my-20 text-5xl mx-auto">Skills</h1>
        </div>
        <div className="flex flex-row justify-center mb-20 mx-10 text-center">
          <div className="w-[20%]">
            <div
              className="radial-progress text-[#439934]"
              style={{
                "--value": 60,
                "--size": "10rem",
                "--thickness": "0.5rem",
              }}
            >
              <h3 className="font-bold text-black">MongoDB</h3>
            </div>
          </div>
          <div className="w-[20%]">
            <div
              className="radial-progress text-[#1e2126]"
              style={{
                "--value": 70,
                "--size": "10rem",
                "--thickness": "0.5rem",
              }}
            >
              <h3 className="font-bold text-black">Express</h3>
            </div>
          </div>
          <div className="w-[20%]">
            <div
              className="radial-progress text-[#81c0d1]"
              style={{
                "--value": 75,
                "--size": "10rem",
                "--thickness": "0.5rem",
              }}
            >
              <h3 className="font-bold text-black">React</h3>
            </div>
          </div>
          <div className="w-[20%]">
            <div
              className="radial-progress text-[#75B527]"
              style={{
                "--value": 65,
                "--size": "10rem",
                "--thickness": "0.5rem",
              }}
            >
              <h3 className="font-bold text-black">NodeJS</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center mb-20 mx-10 text-center">
          <div className="w-[20%]">
            <div
              className="radial-progress text-[#80B5E2]"
              style={{
                "--value": 75,
                "--size": "10rem",
                "--thickness": "0.5rem",
              }}
            >
              <h3 className="font-bold text-black">Adobe Photoshop</h3>
            </div>
          </div>
          <div className="w-[20%]">
            <div
              className="radial-progress text-[#fa8e2a]"
              style={{
                "--value": 90,
                "--size": "10rem",
                "--thickness": "0.5rem",
              }}
            >
              <h3 className="font-bold text-black">Adobe Illustrator</h3>
            </div>
          </div>
          <div className="w-[20%]">
            <div
              className="radial-progress text-[#bb4b9b]"
              style={{
                "--value": 70,
                "--size": "10rem",
                "--thickness": "0.5rem",
              }}
            >
              <h3 className="font-bold text-black">Adobe XD</h3>
            </div>
          </div>
          <div className="w-[20%]">
            <div
              className="radial-progress text-[#0ACF83]"
              style={{
                "--value": 65,
                "--size": "10rem",
                "--thickness": "0.5rem",
              }}
            >
              <h3 className="font-bold text-black">Figma</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center mb-10 mx-10 text-center">
          <div>
            <div className=" text- font-medium text-left">HTML5</div>
            <progress
              data-theme="mytheme"
              className="progress progress-success w-[30vw]"
              value="90"
              max="100"
            ></progress>
          </div>
          <div className="ml-24">
            <div className=" text-base font-medium text-left">CSS3</div>
            <progress
              data-theme="mytheme"
              className="progress progress-accent w-[30vw]"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="flex flex-row justify-center mb-10 mx-10 text-center">
          <div>
            <div className=" text-base font-medium text-left">JavaScript</div>
            <progress
              className="progress progress-warning w-[30vw]"
              value="80"
              max="100"
            ></progress>
          </div>
          <div className="ml-24">
            <div className=" text-base font-medium text-left">Angular</div>
            <progress
              className="progress progress-error w-[30vw]"
              value="65"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="flex flex-row justify-center mb-10 mx-10 text-center">
          <div>
            <div className=" text-base font-medium text-left">TailwindCSS</div>
            <progress
              className="progress progress-info w-[30vw]"
              value="75"
              max="100"
            ></progress>
          </div>
          <div className="ml-24">
            <div className=" text-base font-medium text-left">Bootstrap</div>
            <progress
              className="progress progress-primary w-[30vw]"
              value="80"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
      {/* contact me */}
      <div className="h-[50vh] bg-[#0000A6] flex flex-col justify-center items-center gap-10 ">
        <h3 className="text-5xl text-white">Hire me</h3>
        <p className="text-white text-lg ">
          Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.
           Eos cumque dicta adipisci architecto culpa amet.
        </p>
        <button className="btn bg-white text-[#0000A6] hover:text-white mb-20">Contact Us</button>
      </div>
      <div className=" grid grid-cols-2 h-[85vh]">
        <div className="col-span-1  h-[100%] bg-contact bg-cover bg-no-repeat">
        </div>
        <div className="">
          <h2 className="pt-10 text-3xl pl-10 mb-10 ">Contact</h2>
          <form action="#" className="pl-16 flex flex-col gap-8 col-span-2">
            <div className="row form-group">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-lg input-primary w-full max-w-lg"
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-lg input-primary w-full max-w-lg"
                />
              </div>
            </div>

            <div className="row form-group">
              <div className="col-md-12">
                <input
                  type="email"
                  placeholder="E-Mail"
                  className="input input-lg input-primary w-full max-w-lg"
                />
              </div>
            </div>

            <div className="row form-group">
              <div className="col-md-12">
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-lg input-primary w-full max-w-lg"
                />
              </div>
            </div>

            <div className="row form-group">
              <div className="col-md-12">
                <textarea
                  className="textarea textarea-primary textarea-bordered"
                  placeholder="Subject Message"
                  rows={5} cols={71}
                ></textarea>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="h-[28vh] bg-[#0000A6] text-white mt-0 flex justify-center items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>&copy; 2017 Free HTML5 Template. All Rights Reserved. <br/>Designed by <a href="http://freehtml5.co" target="_blank">FreeHTML5.co</a> Demo Images: <a href="http://unsplash.com" target="_blank">Unsplash</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
