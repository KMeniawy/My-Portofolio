import { aboutData } from "../data";

const About = () => {
  const {
    name,
    phoneNum,
    email,
    address,
    header,
    firstParagraph,
    secondParagraph,
    Facebook,
    Twitter,
    Github,
    Linkedin,
  } = aboutData;
  return (
    <div className=" h-[60vh]" data-aos="fade-up" data-aos-delay="300">
      <h1 className="text-center my-28 text-5xl mx-auto">About Me</h1>
      <div className="grid grid-flow-row-dense grid-cols-6 mx-48">
        <div className="col-span-2">
          <ul className="text-lg" data-aos="fade-right" data-aos-delay="600">
            <li>
              <span className="font-bold mr-2">Full Name: </span>
              <span className="second-block">{name}</span>
            </li>
            <li>
              <span className="font-bold mr-2">Phone: </span>
              <span className="second-block">{phoneNum}</span>
            </li>
            <li>
              <span className="font-bold mr-2">Email: </span>
              <span className="second-block">{email}</span>
            </li>
            <li>
              <span className="font-bold mr-2">Address: </span>
              <span className="second-block">{address}</span>
            </li>
          </ul>
        </div>
        <div className="col-span-4" data-aos="fade-left" data-aos-delay="600">
          {/* Right-side */}
          <h2 className="text-4xl mb-3">{header}</h2>
          <p className="mb-10">{firstParagraph}</p>
          <p>{secondParagraph}</p>
          <ul className="flex mt-10 gap-3 justify-center">
            {/* TODO */}
            <li>
              <a href="https://www.facebook.com/Kimoooo3">
                <Facebook/>
              </a>
            </li>
            <li>
              <a href="https://github.com/KMeniawy">
                <Github/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/karim-el-meniawy-a3036a1ba/">
                <Linkedin/>
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/Kimzo99">
                <Twitter/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
