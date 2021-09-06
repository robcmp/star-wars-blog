import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const DetailsChars = (props) => {
    let { store, actions } = useContext(Context);
    const params = useParams();
    // let urlVal = "";
    // urlVal = "people/" + params.id;
    useEffect(() => {
        actions.getDetailChar(params.id);
    }, [])

    return (
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <div className="col-md-6 px-0">
                <h1 className="fst-italic">Hi </h1>
                <p className="lead my-3">Likn this post’s contents.</p>
                <p className="lead mb-0"><a href="#" className="text-white fw-bold">Continue reading.</a></p>
            </div>
        </div>
    )
}
export default DetailsChars;