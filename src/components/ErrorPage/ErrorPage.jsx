import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className="flex min-h-screen items-center flex-col justify-center">
      <h4>The page not found</h4>
      <br />
      <Link className="btn" to="/">Go Back to Home</Link>
    </div>
  );
};

export default ErrorPage;