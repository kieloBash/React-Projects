import "./App.css";
import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    const res = await fetch(url);
    const newData = await res.json();
    setJobs(newData);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <section className="loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="main">
      <div className="title">
        <h1>Experience</h1>
        <div className="underline"></div>
      </div>
      <div className="job-container">
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                key={job.id}
                onClick={() => {
                  setValue(index);
                }}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <div className="main-jobs">
          <header>
            <h1 className="title-text">{title}</h1>
            <h3 className="company">{company}</h3>
            <h3 className="dates">{dates}</h3>
          </header>
          <div className="duties-container">
            {duties.map((duty, index) => {
              return (
                <div className="duty" key={index}>
                  <span className="bullet">
                    <FaAngleDoubleRight />
                  </span>
                  {duty}
                </div>
              );
            })}
          </div>
          <div className="info-container">
            <button className="btn-info">More Info</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
