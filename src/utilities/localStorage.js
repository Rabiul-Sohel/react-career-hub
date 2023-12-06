const getStoredAppliedJobs = () => {
  const storedAppliedJobs = localStorage.getItem('job-applications')
  if (storedAppliedJobs) {
    return JSON.parse(storedAppliedJobs)
  }
  return [];
}
const saveAppliedJobs = id => {
  const storedApplication = getStoredAppliedJobs()
  const exist = storedApplication.find((jobId)=>jobId ===id)
  if (!exist) {
    storedApplication.push(id);
     localStorage.setItem(
       "job-applications",
       JSON.stringify(storedApplication)
     );
  }
 
}
export {getStoredAppliedJobs, saveAppliedJobs}