import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Details = (props) => {
    let { store, actions } = useContext(Context);
    const params = useParams();
    let urlFinal = "";
    urlFinal = params.url;
    urlFinal = urlFinal.replace(/\_/g, "/");
    store = urlFinal;

    useEffect(() => {
        actions.getDetail(urlFinal);
    }, [])

    return (
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <div className="col-md-6 px-0">
                <h1 className="fst-italic">Hi </h1>
                <p className="lead my-3">Likn this post’s contents.{console.log(store.details)}</p>
                <p className="lead mb-0"><a href="#" className="text-white fw-bold">Continue reading.</a></p>
            </div>
        </div>
    )
}
export default Details;