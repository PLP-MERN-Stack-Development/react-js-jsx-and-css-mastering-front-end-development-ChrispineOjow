import axios from 'axios';

const API = import.meta.env.VITE_API_URI 

const client = axios.create({
    baseURL:API,
    headers:{
        "Content-Type":"application/json"

    }
})

// Tasks Endpoints
export const tasksAPI = {
    list : async (id) => {
        const res = await client.get(`/api/task` , {params : id ? {id} : {} });
        return res.data;
    },

    create : async (payLoad) => {
        const res = await client.post('/api/task', payLoad);
        return res.data;
    },

    update: async (_id, payLoad) => {
        const res = await client.put(`/api/task/${_id}`, payLoad);
        return res.data;
    },

    delete: async (_id) => {
        const res = await client.delete(`/api/task/${_id}`);
        return res.data;
    }
}