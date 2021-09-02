import React from "react";

const Card = (props) => {

    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">{(/people/g).test(props.data.url) === true ? <span>Gender: {props.data.gender}</span> : ((/planets/g).test(props.data.url) === true ? <span>Population: {props.data.population}</span> : "")}</p>
                <p className="card-text">{(/people/g).test(props.data.url) === true ? <span>Hair-color: {props.data.hair_color}</span> : ((/planets/g).test(props.data.url) === true ? <span>Terrain: {props.data.terrain}</span> : <span>Model: {props.data.model}</span>)}</p>
                <p className="card-text">{(/people/g).test(props.data.url) === true ? <span>Eyes-color: {props.data.eye_color}</span> : ""}</p>
            </div>
            <div className="card-footer text-center row">
                <div class="col-md-8">
                    <button className="btn btn-primary"> Find Out More!</button>
                </div>
                <div class="col-md-4">
                    <button className="btn btn-outline-warning"><i class="bi bi-heart"></i></button>
                </div>
            </div>
        </div>
    );
}

export default Card;