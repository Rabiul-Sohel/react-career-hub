

const Category = ({ category }) => {
  const { image, title, jobs } = category;
  return (
    <div className="bg-gray-gradient p-12 rounded-lg w-96 text-left">
      <img className="bg-picBg p-4 rounded-lg" src={image} alt="" />
      <h3 className="text-bk font-extrabold py-1 "> {title} </h3>
      <p> {jobs} </p>
    </div>
  );
};

export default Category;