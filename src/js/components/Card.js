import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// ${(/people/g).test(props.data.url) === true ? props.data.url : ((/planets/g).test(props.data.url) === true ? props.data.url : props.data.url)}
const Card = (props) => {
    let urlVal = "";
    const { store, actions } = useContext(Context);
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text mb-1">{(/people/g).test(props.data.url) === true ? <span>Gender: {props.data.gender}</span> : ((/planets/g).test(props.data.url) === true ? <span>Population: {props.data.population}</span> : "")}</p>
                <p className="card-text mb-1">{(/people/g).test(props.data.url) === true ? <span>Hair-color: {props.data.hair_color}</span> : ((/planets/g).test(props.data.url) === true ? <span>Terrain: {props.data.terrain}</span> : <span>Model: {props.data.model}</span>)}</p>
                <p className="card-text mb-1">{(/people/g).test(props.data.url) === true ? <span>Eyes-color: {props.data.eye_color}</span> : ""}</p>
            </div>
            <div className="card-footer text-center row">
                <div className="col-md-8">
                    <Link className="btn btn-primary" to={`/detail/${(/people/g).test(props.data.url) === true ? `${props.data.url.replace(/\//g, "_")}` : ((/planets/g).test(props.data.url) === true ? String(props.data.url.replace(/\//g, "_")) : props.data.url.replace(/\//g, "_"))}`}>Learn more!</Link>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-outline-warning" onClick={actions.addFavorite}><i className="bi bi-heart"></i></button>
                </div>
            </div>
        </div>
    );
}

export default Card;