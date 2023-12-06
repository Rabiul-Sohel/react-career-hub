import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJob = () => {
  const [jobs, setJobs] = useState([])
  const [dataLength, setDataLength] = useState(4)

  useEffect(() => {
    fetch("featuredJobs.json")
      .then(res => res.json())
      .then(data=>setJobs(data))
  },[])
  return (
    <div className="pt-10 text-center max-w-7xl mx-auto">
      <div className="py-3">
        <h3 className="text-3xl font-bold  py-2 text-bk">Featured Jobs</h3>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {
          jobs.slice(0, dataLength).map((job, idx)=><Job key={idx} job={job}></Job>)
        }
      </div>
      <div className={dataLength ===jobs.length && 'hidden'}>
        <button
          onClick={()=>setDataLength(jobs.length)}
          className="btn btn-primary">Show All</button>
      </div>
    </div>
  );
};

export default FeaturedJob;