import Service from './service.js';

export default {
    async login(user) {
        const response = await Service.post('/login', {
            username: user.username,
            password: user.password
        });
        
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    },

    logout() {
        localStorage.removeItem('user');
    },

    async register(user) {
        const response = await Service.post( '/signup', {
            username: user.username,
            password: user.password
        });
        return response.data;
    },
}