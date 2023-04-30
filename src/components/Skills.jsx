const Skills = () => {
  return (
    <div className="3xl:h-[105vh] 3xl:mb-0 2xl:h-[125vh] xl:h-[100vh] lg:h-[105vh] 2xl:mb-10 xl:mb-20 md:h-[100vh]" data-aos="fade-up" data-aos-delay="300">
      <div className="pt-5 pb-2">
        <h1 className="text-center my-20 text-5xl mx-auto">Skills</h1>
      </div>
      <div className="flex lg:flex-row justify-center mb-20 lg:mx-10 text-center md:justify-evenly">
        <div className="lg:w-[20%]">
          <div
            className="radial-progress text-[#439934] "
            style={{
              "--value": 60,
              "--size": "10rem",
              "--thickness": "0.5rem",
            }}
            data-aos="fade" data-aos-delay="300"
          >
            <h3 className="font-bold text-black">MongoDB</h3>
          </div>
        </div>
        <div className="lg:w-[20%]">
          <div
            className="radial-progress text-[#1e2126]"
            style={{
              "--value": 70,
              "--size": "10rem",
              "--thickness": "0.5rem",
            }}
            data-aos="fade" data-aos-delay="300"
          >
            <h3 className="font-bold text-black">Express</h3>
          </div>
        </div>
        <div className="lg:w-[20%]">
          <div
            className="radial-progress text-[#81c0d1]"
            style={{
              "--value": 75,
              "--size": "10rem",
              "--thickness": "0.5rem",
            }}
            data-aos="fade" data-aos-delay="300"
          >
            <h3 className="font-bold text-black">React</h3>
          </div>
        </div>
        <div className="lg:w-[20%]">
          <div
            className="radial-progress text-[#75B527]"
            style={{
              "--value": 65,
              "--size": "10rem",
              "--thickness": "0.5rem",
            }}
            data-aos="fade" data-aos-delay="300"
          >
            <h3 className="font-bold text-black">NodeJS</h3>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row justify-center mb-20 lg:mx-10 text-center md:justify-evenly">
        <div className="lg:w-[20%]">
          <div
            className="radial-progress text-[#80B5E2]"
            style={{
              "--value": 75,
              "--size": "10rem",
              "--thickness": "0.5rem",
            }}
            data-aos="fade" data-aos-delay="300"
          >
            <h3 className="font-bold text-black">Adobe Photoshop</h3>
          </div>
        </div>
        <div className="lg:w-[20%]">
          <div
            className="radial-progress text-[#fa8e2a]"
            style={{
              "--value": 90,
              "--size": "10rem",
              "--thickness": "0.5rem",
            }}
            data-aos="fade" data-aos-delay="300"
          >
            <h3 className="font-bold text-black">Adobe Illustrator</h3>
          </div>
        </div>
        <div className="lg:w-[20%]">
          <div
            className="radial-progress text-[#bb4b9b]"
            style={{
              "--value": 70,
              "--size": "10rem",
              "--thickness": "0.5rem",
            }}
            data-aos="fade" data-aos-delay="300"
          >
            <h3 className="font-bold text-black">Adobe XD</h3>
          </div>
        </div>
        <div className="lg:w-[20%]">
          <div
            className="radial-progress text-[#0ACF83]"
            style={{
              "--value": 65,
              "--size": "10rem",
              "--thickness": "0.5rem",
            }}
            data-aos="fade" data-aos-delay="300"
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
            data-aos="zoom-in-right" data-aos-delay="300"
          ></progress>
        </div>
        <div className="ml-24">
          <div className=" text-base font-medium text-left">CSS3</div>
          <progress
            data-theme="mytheme"
            className="progress progress-accent w-[30vw]"
            value="70"
            max="100"
            data-aos="zoom-in-right" data-aos-delay="300"
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
            data-aos="zoom-in-right" data-aos-delay="300"
          ></progress>
        </div>
        <div className="ml-24">
          <div className=" text-base font-medium text-left">Angular</div>
          <progress
            className="progress progress-error w-[30vw]"
            value="65"
            max="100"
            data-aos="zoom-in-right" data-aos-delay="300"
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
            data-aos="zoom-in-right" data-aos-delay="300"
          ></progress>
        </div>
        <div className="ml-24">
          <div className=" text-base font-medium text-left">Bootstrap</div>
          <progress
            className="progress progress-primary w-[30vw]"
            value="80"
            max="100"
            data-aos="zoom-in-right" data-aos-delay="300"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default Skills;
