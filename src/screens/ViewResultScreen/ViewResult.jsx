import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewResult = () => {
  const { selectedYear, userId, selectedTerm } = useParams();
  const [viewResult, setViewResult] = useState({});
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/nursery1result/results/${userId}/${selectedYear}/${selectedTerm}`
      );
      console.log(data);
      // const foundData = data.find((item) => item.artist === artist);
      setViewResult(data);
    };

    fetchPosts();
  }, []);
  return (
    <div>
      <div>
        <div>{viewResult?.year} </div>
        <div>
          {viewResult?.English?.map((item) => {
            <> {item}</>;
          })}
        </div>
        <div>{viewResult.term} </div>
      </div>
    </div>
  );
};

export default ViewResult;
