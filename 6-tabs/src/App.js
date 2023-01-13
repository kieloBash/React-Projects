import "./App.css";
import React, { useState, useEffect } from "react";
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
  </section>
  );
}

export default App;
