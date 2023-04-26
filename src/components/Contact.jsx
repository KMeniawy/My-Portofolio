import { contactData } from "../data";
const Contact = () => {
  const {sideImg,paragraph} = contactData;
  return (
    <>
      <div className="h-[50vh] bg-[#0000A6] flex flex-col justify-center items-center gap-10 ">
        <h3 className="text-5xl text-white">Hire me</h3>
        <p className="text-white text-lg ">
          {paragraph}
        </p>
        <button className="btn bg-white text-[#0000A6] hover:text-white mb-20">
          Contact Us
        </button>
      </div>
      <div className=" grid grid-cols-2 h-[85vh]">
        <div className="col-span-1  h-[100%] bg-cover bg-no-repeat" style={{backgroundImage:`url(${sideImg})`}}></div>
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
                  rows={5}
                  cols={71}
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
