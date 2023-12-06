import { useLoaderData } from "react-router-dom";
import { getStoredAppliedJobs } from "../../utilities/localStorage";
import { useEffect, useState } from "react";
import AppliedJob from "../AppliedJob/AppliedJob";


const AppliedJobs = () => {
  const appliedJob = useLoaderData()
  const [appJobs, setAppJobs] = useState([])
  const [displayJobs, setDisplayJobs] = useState([])
  
  
 
  const handleFilterJobs = filter => {
    if (filter === 'all') {
      setDisplayJobs(appJobs)
    }
    else if (filter === 'remote') {
      const remoteJobs = appJobs.filter(job => job.job_place === 'Remote')
      setDisplayJobs(remoteJobs)
    }
    else if (filter === 'onsite') {
      const onsiteJobs = appJobs.filter(job => job.job_place === 'Onsite')
      setDisplayJobs(onsiteJobs)
    }
  };
  useEffect(() => {
    const storedAppliedIds = getStoredAppliedJobs();
    
    if (appliedJob.length > 0) {
      // const jobsApplied = appliedJob.filter((job) =>
      //   storedAppliedIds.includes(job.id)
      
      // );
      // setAppJobs(jobsApplied)
       const jobsApplied = [];
      for (const id of storedAppliedIds) {
        const job = appliedJob.find(job => job.id === id)
        if (job) {
          jobsApplied.push(job)
        }
      }
      setAppJobs(jobsApplied);
      setDisplayJobs(jobsApplied)
    }
  }, [])
  
  
 
  
  return (
    <div className="text-center">
      <h2>This is Applied Jobs Page</h2>
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a onClick={()=> handleFilterJobs('all')}>All</a>
          </li>
          <li>
            <a onClick={()=>handleFilterJobs('remote')}>Remote</a>
          </li>
          <li>
            <a onClick={()=>handleFilterJobs('onsite')}>Onsite</a>
          </li>
        </ul>
      </details>
      {displayJobs.map((job) => (
        <AppliedJob key={job.id} job={job}></AppliedJob>
      ))}
    </div>
  );
};

export default AppliedJobs;