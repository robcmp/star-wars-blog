export const getState = ({ setStore, getStore, getActions }) => {

    return {
        store: {
            favoriteList: [],
            details: {}
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
                const actions = getActions();
                let url = 'https://swapi.dev/api/people/' + a;
                console.log(a);
                // console.log('hola back' + a + '');
                fetch(url)
                    .then(response => response.json())
                    .then(data =>
                        actions.getData(data)
                    )
            },
            getDetailPlanet: (a) => {
                const store = getStore();
                const actions = getActions();
                let url = 'https://swapi.dev/api/planets/' + a;
                console.log(url);
                // console.log('hola back' + a + '');
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        actions.getData(data);
                    })
            },
            getDetailVehic: (a) => {
                const store = getStore();
                const actions = getActions();
                let url = 'https://swapi.dev/api/vehicles/' + a;
                console.log(url);
                // console.log('hola back' + a + '');
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        actions.getData(data);
                    })
            },
            getData: (data) => {
                const store = getStore();
                setStore({ details: data })
            }
        }
    };

}