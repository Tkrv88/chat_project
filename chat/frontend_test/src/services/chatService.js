import axios from 'axios';

class ChatService {
    //API
    //Chats
    api_v1_chats_list(token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.get('http://localhost:8000/api/v1/chats/',
        );
    }

    api_v1_chats_create(data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.post('http://localhost:8000/api/v1/chats/', data);
    }

    api_v1_chats_read(id, data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.get(`http://localhost:8000/api/v1/chats/${id}/`, data);
    }

    api_v1_chats_update(id, data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.put(`http://localhost:8000/api/v1/chats/${id}/`, data);
    }

    api_v1_chats_partial_update(id, data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.patch(`http://localhost:8000/api/v1/chats/${id}/`, data);
    }

    api_v1_chats_delete(id, data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.delete(`http://localhost:8000/api/v1/chats/${id}/`, data);
    }

    //Messages

    api_v1_messages_list(token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.get("http://localhost:8000/api/v1/messages/");
    }

    api_v1_messages_create(data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.post("http://localhost:8000/api/v1/messages/", data);
    }

    api_v1_messages_read(id, data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.get(`http://localhost:8000/api/v1/messages/${id}/`, data);
    }

    api_v1_messages_update(id, data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.put(`http://localhost:8000/api/v1/messages/${id}/`, data);
    }

    api_v1_messages_partial_update(id, data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.patch(`http://localhost:8000/api/v1/messages/${id}/`, data);
    }

    api_v1_messages_delete(id, data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.delete(`http://localhost:8000/api/v1/messages/${id}/`, data);
    }

    //Subscribe

    api_v1_subscribe_list(data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.get("http://localhost:8000/api/v1/subscribe/", data);
    }

    api_v1_subscribe_create(data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.post("http://localhost:8000/api/v1/subscribe/", data);
    }

    api_v1_subscribe_read(id, data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.get(`http://localhost:8000/api/v1/subscribe/${id}/`, data);
    }

    api_v1_subscribe_update(id, data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.put(`http://localhost:8000/api/v1/subscribe/${id}/`, data);
    }

    api_v1_subscribe_partial_update(id, data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.patch(`http://localhost:8000/api/v1/subscribe/${id}/`, data);
    }

    api_v1_subscribe_delete(id, data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.delete(`http://localhost:8000/api/v1/subscribe/${id}/`, data);
    }
    
    //API-Auth

    auth_users_list(data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.get('http://localhost:8000/api-auth/users/', data);
    }

    auth_users_create(data) {
        return axios.post('http://localhost:8000/api-auth/users/', data);
    }

    auth_users_activation(data) {
        return axios.post('http://localhost:8000/api-auth/users/activation/', data);
    }

    auth_users_me_read(data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.get('http://localhost:8000/api-auth/users/me/', data);
    }

    auth_users_me_update(data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.put('http://localhost:8000/api-auth/users/me/', data);
    }

    auth_users_me_partial_update(data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.patch('http://localhost:8000/api-auth/users/me/', data);
    }

    auth_users_me_delete(data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.delete('http://localhost:8000/api-auth/users/me/', data);
    }

    auth_users_resend_activation(data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.post('http://localhost:8000/api-auth/users/resend_activation/', data);
    }

    auth_users_reset_password(data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.post('http://localhost:8000/api-auth/users/reset_password/', data);
    }

    auth_users_reset_password_confirm(data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.post('http://localhost:8000/api-auth/users/reset_password_confirm/', data);
    }

    auth_users_reset_username(data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.post('http://localhost:8000/api-auth/users/reset_username/', data);
    }

    auth_users_reset_username_confirm(data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.post('http://localhost:8000/api-auth/users/reset_username_confirm/', data);
    }

    auth_users_set_password(data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.post('http://localhost:8000/api-auth/users/set_password/', data);
    }

    auth_users_set_username(data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.post('http://localhost:8000/api-auth/users/set_username/', data);
    }
    
    // users/{id}

    auth_users_read(id, data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.get(`http://localhost:8000/api-auth/users/${id}/`, data);
    }

    auth_users_update(id, data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.put(`http://localhost:8000/api-auth/users/${id}/`, data);
    }

    auth_users_partial_update(id, data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.patch(`http://localhost:8000/api-auth/users/${id}/`, data);
    }

    auth_users_delete(id, data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.delete(`http://localhost:8000/api-auth/users/${id}/`, data);
    }

    //API

    auth_token_login_create(data){
        return axios.post(`http://localhost:8000/auth/token/login/`, data);
    }
    
    auth_token_logout_create(data){
        return axios.post(`http://localhost:8000/auth/token/logout/`, data);
    }
}
export default new ChatService();