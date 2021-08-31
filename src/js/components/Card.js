import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.imagen} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-footer text-center">
                <button className="btn btn-primary"> Find Out More!</button>
            </div>
        </div>
    );
}

export default Card;