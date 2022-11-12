import instance from './instance'

class Api {
    async users() {
        try {
            const res = await instance.get('/admin/user-management');
            return res.data ? res.data : []

        } catch (error) {
            return []
        }
    }
    async delete() {
        try {
            const res = await instance.delete('/admin/user-management');
            return res.data

        } catch (error) {
            return []
        }
    }
    async login() {
        try {
            const res = await instance.post('/login');
            return res.data

        } catch (error) {
            
        }
    }
    async add() {
        try {
            const res = await instance.post('/admin/user-management');
            return res.data

        } catch (error) {
            return []
        }
    }
}

export default new Api();