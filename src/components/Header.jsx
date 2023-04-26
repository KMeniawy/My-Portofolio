import React from "react";

import { heroData } from "../data";

const Header = () => {
  const { name, title, hero, avatar, FacebookDark, TwitterDark, GithubDark, LinkedinDark } =
    heroData;
  return (
    <div
      className="bg-cover h-[100vh] flex justify-center items-center flex-col "
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <img
        src={avatar}
        className="rounded-full bg-center w-52 "
        data-aos="fade-in"
        data-aos-delay="400"
      />
      <h1 className="text-5xl text-white -skew-y-[4deg] mt-10 mx-auto">
        - {name} -
      </h1>
      <p
        className="mt-10 text-lg text-gray-400"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        {title}
      </p>
      <ul className="flex mt-10 gap-3 justify-center"  data-aos="fade-up" data-aos-delay="100">
        <li>
          <a href="https://www.facebook.com/Kimoooo3" className="active:border-none">
            <FacebookDark/>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Karim_Elmeniawy">
            <TwitterDark/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/karim-el-meniawy-a3036a1ba/">
            <LinkedinDark/>
          </a>
        </li>
        <li>
          <a href="https://github.com/KMeniawy">
            <GithubDark/>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Header;
