import React, { useState, useEffect } from "react";
import "./App.css";
import Loading from "./components/Loading";
import Tour from "./components/Tour";
import Tours from "./components/Tours";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours />
    </main>
  );
}

export default App;
