import { useLoaderData, useParams } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveAppliedJobs } from '../../utilities/localStorage';


const JobDetails = () => {
  const jobs = useLoaderData()
  const {id} = useParams()
  const idInt = parseInt(id)
  const job = jobs.find(job => idInt === job.id)

  const handleApplyJob = () => {
    saveAppliedJobs(idInt)
    toast("You have applied successfully");
  }
  
  return (
    <div className="grid grid-cols-4 gap-10">
      <div className='col-span-3 border'>
        <h2>Details fo title: {job.title} </h2>
        <p>Job type: {job.job_type} </p>
      </div>
      <div className='col-span-1'>
        <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default JobDetails;