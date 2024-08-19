import React from "react";

let queries = [
  {
    Title: "Pothole on road",
    Description: "PotHole on road leading to lane closure since 5 days",
    Location: "Church road",
    Posted_by: 3,
  },
  {
    Title: "Pothole on road",
    Description: "PotHole on road leading to lane closure since 5 days",
    Location: "Church road",
    Posted_by: 3,
  },
];

export default function PastQueries() {
    return (
        <div className="PastQueriesContainer">
          <div className="accordion" id="accordionExample">
            {queries.map((element, index) => {
              const itemId = `collapse${index}`;
              const buttonId = `heading${index}`;
    
              return (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={buttonId}>
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${itemId}`}
                      aria-expanded="true"
                      aria-controls={itemId}
                    >
                      {element.Title}
                    </button>
                  </h2>
                  <div
                    id={itemId}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>Query ID:</strong> {element.Posted_by} <br />
                      <strong>Location:</strong> {element.Location} <br />
                      <strong>Description:</strong> {element.Description} <br />
                      {/* Other details can be added here */}
                    </div>
                    <div className="buttons">
                      <button type="button" className="btn btn-primary">
                        Update
                      </button>
                      <button type="button" className="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
}
