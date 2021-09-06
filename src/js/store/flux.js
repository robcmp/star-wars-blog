export const getState = ({ setStore, getStore, getActions }) => {

    return {
        store: {
            favoriteList: [],
            details: []
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
            getDetail: (ev) => {
                const store = getStore();
                fetch(store, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ details: data.results }))

            }
        }
    };

}