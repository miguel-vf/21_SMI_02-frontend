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

    register(user) {
        return Service.post( '/signup', user);
    },
}