

const AppliedJob = ({ job }) => {
  const {title, company, image, job_place} = job
  return (
    <div className="border mt-5">
      <img className="mx-auto" src={image} alt="" />
      <h2> {title} </h2>
      <p> {company} </p>
      <p> {job_place} </p>
      
    </div>
  );
};

export default AppliedJob;