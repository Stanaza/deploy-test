import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "61d090f5-a9ca-44c5-971a-fef06f8e76d2"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1 , pageSize = 2) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    getUserId(userId) {
        return instance.get(`profile/${userId}`);
    },
    follow(userId) {
      return   instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
       return  instance.delete(`follow/${userId}`)
    }
}

export const profileAPI = {
    getUserId(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return  instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout(){
        return instance.delete(`auth/login`);
    }
}


