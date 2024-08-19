import React from "react";


let queryid=0
export default function Complain() {
  return (
    <div className="Complain">
      <div className="contain">
        <h2>COMPLAINT</h2>
        <div className="formessentials">
          <div className="form-instructions">
            <h3>How to Fill Out the Complaint Form</h3>
            <ul>
              <li>
                <strong>Title:</strong> Enter a brief, descriptive title for
                your complaint. This should summarize the main issue.
              </li>
              <li>
                <strong>Description:</strong> Provide a detailed description of
                the problem you experienced. Include any relevant information
                that will help us understand the issue better.
              </li>
              <li>
                <strong>Location:</strong> Specify where the incident occurred.
                This helps in identifying the exact location and addressing the
                problem more effectively.
              </li>
              <li>
                <strong>Placed By:</strong> Enter your full name so we can
                contact you if necessary.
              </li>
              <li>
                <strong>ID:</strong> Provide your user ID or any other relevant
                identification number. This helps in verifying your complaint.
              </li>
              <li>
                <strong>Date:</strong> Select the date when the incident
                occurred. This helps in tracking the timeline of the issue.
              </li>
              <li>
                <strong>Status:</strong> The default status will be "Not
                Solved." We will update this as we process your complaint.
              </li>
            </ul>
          </div>
          <div className="border"></div>
          <div className="forminfo">
          <h3>{`Q${queryid}`}</h3>
            <form className="complain-form">
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <textarea
                  id="title"
                  name="title"
                  rows="2"
                  cols="50"
                  placeholder="Title of the Query"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="desc">Description:</label>
                <textarea
                  id="desc"
                  name="desc"
                  rows="2"
                  cols="50"
                  placeholder="Enter the details about the problem"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input
                  list="options"
                  id="location"
                  name="location"
                  placeholder="Where did it happen?"
                />
                <datalist id="options">
                  <option value="None"></option>
                </datalist>
              </div>
              <div className="form-group">
                <label htmlFor="placedBy">Placed By:</label>
                <input
                  type="text"
                  id="placedBy"
                  name="placedBy"
                  placeholder="Your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="userId">ID:</label>
                <input
                  type="text"
                  id="userId"
                  name="userId"
                  placeholder="Your user ID"
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="date of occurrence"
                />
              </div>
              <div className="form-group">
                <label htmlFor="status">Status:</label>
                <input
                  type="text"
                  id="status"
                  name="status"
                  value="Not Solved"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
