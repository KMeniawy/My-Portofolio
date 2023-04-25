const Header = () => {
  return (
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
  );
};
export default Header;
