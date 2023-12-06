import { useEffect, useState } from "react";
import Category from "../Category/Category";


const CategoryList = () => {
  const [categories, setCategories]=useState([])
  useEffect(() => {
    fetch("categoryList.json")
      .then(res => res.json())
    .then(data=>setCategories(data))
  }, [])
 
  return (
    <div className="pt-10 text-center max-w-7xl mx-auto">
      <div className="py-3">
        <h3 className="text-3xl font-bold  py-2 text-bk">Job Category List</h3>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex justify-between py-8 gap-8">
        {categories.map((category, idx) => (
          <Category category={category} key={idx}></Category>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;