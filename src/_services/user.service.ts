import MyHeaders from "./MyHeaders";

export const userService = {
    login,
    logout
};

function login(username: String, password: String) {
    MyHeaders.add("Authorization", "Basic " + btoa(username + ":" + password));
    return fetch(`/api/auth/callback`, {
        method: 'POST',
        headers: MyHeaders.getMyHeaders(),
        credentials: 'include'
    })
    .then(response => {
            if(response.status === 200){
                localStorage.setItem("user", btoa(username + ":" + password))
                return true
            }else{
                logout()
                return false
            }
        });
}

function logout() {
    MyHeaders.delete("Authorization");
    localStorage.removeItem('user');
}
