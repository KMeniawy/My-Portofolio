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
    <div className=" 2xl:h-[60vh] lg:h-[75vh]" data-aos="fade-up" data-aos-delay="300">
      <h1 className="text-center xl:my-28 lg:my-20 text-5xl mx-auto">About Me</h1>
      <div className="xl:grid xl:grid-flow-row-dense xl:grid-cols-6 mx-48 lg:flex lg:flex-col lg:gap-5">
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
          <h2 className="text-4xl mb-3 xl:text-left lg:text-center lg:my-5">{header}</h2>
          <p className="xl:mb-10 lg:mb-5">{firstParagraph}</p>
          <p>{secondParagraph}</p>
          <ul className="flex mt-10 gap-3 justify-center">
            <li>
              <a target="_blank" href="https://www.facebook.com/Kimoooo3">
                <Facebook/>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/Karim_Elmeniawy">
                <Twitter/>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/karim-el-meniawy-a3036a1ba/">
                <Linkedin/>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/KMeniawy">
                <Github/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
