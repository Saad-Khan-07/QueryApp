import React from "react";

export default function QueryCards() {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/queries");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data); // Print the data to the console
        setQueries(data); // Optionally set the data to state
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="cardlayout">
    <h2>TOP QUERIES</h2>
        <div className="container mt-4">
            <div className="row">
                {Array.from({ length: 12 }).map((_, index) => (
                <div className="col-lg-3 mb-4" key={index}>
                    <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Card title {index + 1}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                        <p className="card-text">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
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
