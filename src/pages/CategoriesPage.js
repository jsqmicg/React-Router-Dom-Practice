import React from "react";
import { useLocation, useHistory } from "react-router-dom";

//http://localhost:3000/categories/?skip=0&limit=10
function CategoriesPage() {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search);
  //URLSearchParams brings and object with the information of the query passed on location.search. This object could be iterated by a for Each and has a lot of methods, but we'll center our atenttion on get method.
  console.log(query);
  const skip = query.get("skip") || 0; //default values if query is void.
  const limit = query.get("limit") || 15;
  //With get method, is possible to get values from the query, and we can render them now.
  const handleNext = () => {
    query.set("skip", parseInt(skip) + parseInt(limit)); // to make pagination, is not necessary to work with the limit, so  only is better, suum the value of limit to skip.
    //query.set("limit", 50);
    history.push({ search: query.toString() }); //History is not only used for send the users to other pages, here we can see that history is used to update the search property of the location object, with the new setted query or add a new query string to the url, if there are a query string before.
  };
  return (
    <div>
      <h1>Categories Page</h1>
      <h2>Skip: {skip} </h2>
      <h2>Limit: {limit} </h2>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default CategoriesPage;
