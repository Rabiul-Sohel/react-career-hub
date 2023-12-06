

const Banner = () => {
  return (
    <div className="bg-gray-gradient">
      <div className=" max-w-7xl mx-auto">
        <div className="flex items-center lg:justify-between flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/fpmyPcm/user.png"
            className="max-w-3xl rounded-lg block"
          />
          <div className="max-w-lg p-4">
            <h1 className="text-5xl font-bold text-bk">
              One Step <br /> Closer To Your
              <br /><span className="bg-blue text-transparent bg-clip-text">Dream Job</span>
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn bg-blue text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;