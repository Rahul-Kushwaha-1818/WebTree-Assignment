import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FetchUsingFetchAPI = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        const data = await response.json();
        setUserData(data.results[0]); 
        console.log("Data fetched using Fetch API:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="mainBox w-8/12 h-[600px] bg-gray-200 rounded-md opacity-90 flex flex-col justify-center items-center pt-5">
        <h1 className="text-2xl font-semibold">
          Fetch Data by using Fetch API{" "}
        </h1>
        <div className="finalBox w-[95%] h-[90%] border-4 border-black flex justify-center items-center">
          {userData ? (
            <>
              <div className="imageDiv w-full h-full flex justify-center items-center">
                <img
                  src={userData.picture.large}
                  className="w-[75%] border-4 border-black"
                  alt={`${userData.name.first} ${userData.name.last}`}
                />
              </div>
              <div className="detailsDiv w-full h-full pt-28">
                <div className="w-full flex justify-start items-center">
                  <div className="FName text-2xl">
                    First Name: {userData.name.first}
                  </div>
                  <div className="LName text-2xl ml-20">
                    Last Name: {userData.name.last}
                  </div>
                </div>
                <div className="gender text-2xl mt-14">
                  Gender: {userData.gender}
                </div>
                <div className="Phone text-2xl mt-14">
                  Phone: {userData.phone}
                </div>
              </div>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className="flex gap-5 m-5">
          <Link to={"/"} className="h-8 bg-green-600 p-2">
            Fetch-Using-Promises
          </Link>
          <Link to={"/Fetch-Using-Axios"} className="h-8 bg-green-600 p-2">
            Fetch-Using-Axios
          </Link>
          <Link
            to={"/Fetch-Using-Async-Await"}
            className="h-8 bg-green-600 p-2"
          >
            Fetch-Using-Async-Await
          </Link>
          <Link to={"/Fetch-Using-FetchAPI"} className="h-8 bg-green-600 p-2">
            Fetch-Using-FetchAPI
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FetchUsingFetchAPI;
