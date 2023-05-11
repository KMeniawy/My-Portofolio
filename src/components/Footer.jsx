const Footer = () => {
  return (
    <div className="h-[30vh] bg-gradient-to-t from-[#010010] to-[#010185] text-white mt-0 flex justify-center items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="3xl:mx-10 2xl:mx-0  md:mx-10">
              &copy; 2023 ITI intake 43 Web & UI Development. All Rights
              Reserved. <br />
              Designed by Karim Elmeniawy <br /> Demo Images:{" "}
              <a href="http://unsplash.com" target="_blank">
                Unsplash
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
