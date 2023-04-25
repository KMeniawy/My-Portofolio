const About = () => {
  return (
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
              <span className="second-block">karim.elmeniawy.99@gmail.com</span>
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
            repellat velit eaque aspernatur expedita. Possimus itaque adipisci.
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
  );
};

export default About;
