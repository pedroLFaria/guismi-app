import MyHeaders from "./MyHeaders";

export const userService = {
    login,
    logout
};

function login(username, password) {
    MyHeaders.add("Authorization", "Basic " + btoa(username + ":" + password));
    const requestOptions = {
        method: 'POST',
        headers: MyHeaders.getMyHeaders(),
        credentials: 'include'
    };
    return fetch(`/api/auth/callback`, requestOptions)
        .then(response => {
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

function logout() {
    MyHeaders.delete("Authorization");
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.then(response => {
        return response
    })
        .text()
        .then(text => {
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
