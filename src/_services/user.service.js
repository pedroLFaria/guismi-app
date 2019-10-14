import MyHeaders from "./MyHeaders";

export const userService = {
    login,
    logout
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password}),
        credentials: 'include'
    };
    return fetch(`/api/auth/callback`, requestOptions)
        .then(response=>{
            return response
        })
        .then(handleResponse)
        .then(user => {
            if (user) {
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        });
}

function findFichaById(id) {

}

function findFichasByJogador(id) {

}

function updateFicha(ficha) {

}

function insertFicha(ficha) {

}

function findSistema() {

}

function logout() {
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.then(response => {
        MyHeaders.getMyHeaders();
    
        return response
    }).text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
