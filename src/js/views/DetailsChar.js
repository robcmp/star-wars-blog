import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const DetailsChars = (props) => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getDetailChar(params.id);
    }, [])

    return (
        <div className="p-5 mb-4 bg-light rounded-3 bg-dark mt-5">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold text-light">{store.details.name}</h1>
                <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                
            </div>
        </div>
       
    )
}
export default DetailsChars;