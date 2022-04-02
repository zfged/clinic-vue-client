import axios from "axios";
import Service from "../models/service"
export const serviceService = {
    getAll,
};

async function getAll() {
    const res = await axios.get(`http://127.0.0.1:8000/api/service`)
    const services = res.data.data.map(services => new Service(services))
    return services;
}
