import { contactData } from "../data";
const Contact = () => {
  const {sideImg,paragraph} = contactData;
  return (
    <>
      <div className="py-10 bg-gradient-to-b from-[#010010] to-[#010185] flex flex-col justify-center items-center gap-10 ">
        <h3 className="text-5xl text-white" data-aos="fade-up" data-aos-delay="300">Hire me</h3>
        <p className="text-white text-lg  md:text-center md:mx-10" data-aos="fade-up" data-aos-delay="300">
          {paragraph}
        </p>
        <button className="btn bg-white text-[#0000A6] hover:text-white mb-20 border-none" data-aos="fade" data-aos-delay="800">
          Contact Us
        </button>
      </div>
      <div className=" grid grid-cols-2">
        <div className="col-span-1  h-[100%] bg-cover bg-no-repeat" style={{backgroundImage:`url(${sideImg})`}} data-aos="fade" data-aos-delay="800"></div>
        <div data-aos="fade-right" data-aos-delay="300" className="py-10">
          <h2 className="pt-10 text-3xl pl-10 mb-10 ">Contact</h2>
          <form action="#" className="pl-16 flex flex-col gap-8 col-span-2">
            <div className="row form-group">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-lg input-primary xl:w-full lg:w-[90%] max-w-lg"
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-lg input-primary xl:w-full lg:w-[90%] max-w-lg"
                />
              </div>
            </div>

            <div className="row form-group">
              <div className="col-md-12">
                <input
                  type="email"
                  placeholder="E-Mail"
                  className="input input-lg input-primary xl:w-full lg:w-[90%] max-w-lg"
                />
              </div>
            </div>

            <div className="row form-group">
              <div className="col-md-12">
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-lg input-primary xl:w-full lg:w-[90%] max-w-lg"
                />
              </div>
            </div>

            <div className="row form-group">
              <div className="col-md-12">
                <textarea
                  className="textarea textarea-primary textarea-bordered textarea-lg xl:w-full lg:w-[90%] md:w-[80%] max-w-lg"
                  placeholder="Subject Message"
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
    </>
  );
};

export default Contact;
