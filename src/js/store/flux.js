export const getState = ({ setStore, getStore, getActions }) => {

    return {
        store: {
            favoriteList: [],
            details: {}
        },
        actions: {
            addFavorite: (item) => {
                const store = getStore();
                const actions = getActions();
                if (!store.favoriteList.includes(item)) {
					setStore({ favoriteList: [...store.favoriteList, item] });
				} else {
					const array = store.favoriteList;
					const condition = currentFavorite => currentFavorite === item;
					let index = array.findIndex(condition);
					if (index > -1) actions.removeFavorite(index);
				}
            },
            removeFavorite: favoriteIndex => {
                const store = getStore();
				store.favoriteList.splice(favoriteIndex, 1);
                setStore({ favoriteList: store.favoriteList });
			},
            getDetailChar: (a) => {
                const store = getStore();
                const actions = getActions();
                let url = 'https://swapi.dev/api/people/' + a;

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