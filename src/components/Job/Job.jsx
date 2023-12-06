import { CiLocationOn } from "react-icons/ci";
import {Link} from "react-router-dom"

const Job = ({ job }) => {
  const { id, image, title, job_type, job_place, location, salary, company } = job;
  
  
  return (
    <div>
      <div className=" text-left bg-base-100 border-2 border-gray p-10 rounded-lg">
        <figure>
          <img className="" src={image} alt="" />
        </figure>
        <div className="">
          <h2 className="card-title text-bk mt-2"> {title} </h2>
          <h4 className="text-xl font-bold"> {company} </h4>
          <h2 className="flex gap-2">
            <CiLocationOn className="text-2xl" />
            {location}
          </h2>
          <p> {job_place} </p>
          <Link to={`/job/${id}`} >
            <button className="btn btn-primary">Show Details</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Job;
