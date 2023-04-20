import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* header */}
      <div className="bg-header bg-cover h-[100vh] flex justify-center items-center flex-col">
        <img
          src="./src/assets/avatar.jpeg"
          className="rounded-full bg-center w-52 "
        />
        <h1 className="text-5xl text-white -skew-y-[4deg] mt-10 mx-auto">
          - Karim ElMeniawy -
        </h1>
        <p className="mt-10 text-lg">UI/UX Designer & Frontend Developer</p>
        <ul className="">{/* TODO */}
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
      <div className=" h-[90vh]">{/* TODO Animation */}
        <h1 className="text-center my-28 text-5xl mx-auto">About Me</h1>
        <div className="grid grid-flow-row-dense grid-cols-6 mx-48">
          <div className="col-span-2">{/* left-side */}
            <ul className="text-lg">
              <li><span className="font-bold mr-2">Full Name: </span><span className="second-block">Karim ElMeniawy</span></li>
              <li><span className="font-bold mr-2">Phone: </span><span className="second-block">+20 127 312 1469</span></li>
              <li><span className="font-bold mr-2">Email: </span><span className="second-block">karim.elmeniawy.99@gmail.com</span></li>
              <li><span className="font-bold mr-2">Address: </span><span className="second-block">Port Said, Egypt</span></li>
            </ul>
          </div>
          <div className="col-span-4">{/* Right-side */}
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
              <ul class="fh5co-social-icons">{/* TODO */}
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
      <div>{/* TODO  animation */}
        <h1 className="text-center my-28 text-5xl mx-auto">My Resume</h1>

      </div>
    </>
  );
}

export default App;
