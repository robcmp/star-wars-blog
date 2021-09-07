import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Navbar = (props) => {
    const { store, actions } = useContext(Context);
    const deleteTask = (key) => {
        let listUpdated = store.favoriteList.filter((item, index) => {
            if (index !== key) {
                return item;
            }
        })
        actions.addFavorite(listUpdated);
    }

    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                </ul>
                <div className="d-flex me-5">
                    <div className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Favorites {store.favoriteList.length}
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li className="dropdown-item">Hola</li>
                            {store.favoriteList.map((item, index) => <li className="dropdown-item" key={index}>{item}<span className="ps-5"><button onClick={() => {
                                deleteTask(index);
                            }}><i className="bi bi-x"></i></button></span></li>)
                            }


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
};

export default Navbar;