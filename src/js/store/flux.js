export const getState = ({ setStore, getStore, getActions }) => {

    return {
        store: {
            favoriteList: [],
            details: null
        },
        actions: {
            addFavorite: (ev) => {
                const store = getStore();
                setStore([...store.favoriteList, store]);
                console.log(ev.target);
                store.map((li, key) => <li className="dropdown-item" key={key} >{li}<span className="ps-5"><button onClick={() => {
                    // deleteTask(key);
                }}><i class="bi bi-x"></i></button></span></li>)
            },
            getDetailChar: (a) => {
                const store = getStore();
                let url = 'https://swapi.dev/api/people/' + a;
                console.log(url);
                // console.log('hola back' + a + '');
                fetch(url, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => {

                        setStore({ details: JSON.stringify(data.results) });
                        console.log(store.details);

                    })
            },
            getDetailPlanet: (a) => {
                const store = getStore();
                let url = 'https://swapi.dev/api/planets/' + a;
                console.log(url);
                // console.log('hola back' + a + '');
                fetch(url, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => {

                        setStore({ details: JSON.stringify(data.results) });
                        console.log(store.details);

                    })
            },
            getDetailVehic: (a) => {
                const store = getStore();
                let url = 'https://swapi.dev/api/vehicles/' + a;
                console.log(url);
                // console.log('hola back' + a + '');
                fetch(url, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => {

                        setStore({ details: JSON.stringify(data.results) });
                        console.log(store.details);

                    })
            }
        }
    };

}