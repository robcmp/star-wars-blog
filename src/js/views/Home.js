import React from "react";
import '../css/Home.css';
import { useState, useEffect } from "react";
import Card from "../components/Card";

const Home = () => {
    const [planetas, setPlanetas] = useState([]);

    useEffect(() => {
        fetch("https://swapi.dev/api/planets/", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json())
            .then(data => setPlanetas(data.results))
    }, [])
    return (
        <>
            <h1>Planets</h1>
            <div className="scrolling-wrapper">
                {planetas.map((planeta, i) => <Card data={planeta} />)}
            </div>
        </>
    );
}
export default Home;