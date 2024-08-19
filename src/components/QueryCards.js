import React, { useEffect, useState } from "react";

export default function QueryCards() {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve the access token from local storage
        const accessToken = localStorage.getItem('accessToken');
        console.log("Access Token:", accessToken);

        const response = await fetch("http://127.0.0.1:8000/queryapiview", {
          method: "GET",
          headers: {
            'Authorization': `Bearer 28ac8620a904aab63945a552a5a5cfe5ad688c54`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setQueries(data); // Set the data in state
        console.log("Data fetched from API:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cardlayout">
      <h2>TOP QUERIES</h2>
      <div className="container mt-4">
        <div className="row">
          {queries.map((element, index) => (
            <div className="col-lg-3 mb-4" key={index}>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{element.Title}</h5>
                  <p className="card-text">
                    <strong>Query ID:</strong> {element.Posted_by}{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>User ID:</strong> {element.Posted_by} <br />
                    <strong>Location:</strong> {element.Location} <br />
                    <strong>Description:</strong> {element.Description} <br />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}