import React from "react";
let user = JSON.parse(localStorage.getItem('user'));

export const UserService = {


    LogedIn: false,

    get isAuthenticated() {
        var localUser = JSON.parse(localStorage.getItem('user'));
        return localUser == null || localUser.isAuthenticated == undefined ? false : localUser.isAuthenticated;
    },
    get surname() { return user.lastName },
    get username() { return user.Name },
    get token() { return user.token },
    id() {
        return user.Id
    },

    Logout: () => {
        localStorage.removeItem('user')
    },
    get role() {
        return user.role;
    }
    ,
    
    singin: function (user) {
        user.isAuthenticated = true;

        this.LogedIn = true;
        localStorage.setItem('user', JSON.stringify(user))
        setTimeout(function () { console.log("in time out") }, 1000);

        return true;
    }
};


export const authentication = () => {
    if (UserService.isAuthenticated) {
        return {
            'Authorization': 'bearer ' + UserService.token
        }

    }
    return {};

}
