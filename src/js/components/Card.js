import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">{(/people/g).test(props.data.url) === true ? props.data.gender : props.data.population}</p>
            </div>
            <div className="card-footer text-center">
                <button className="btn btn-primary"> Find Out More!</button>
            </div>
        </div>
    );
}

export default Card;