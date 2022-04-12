import {serviceService} from "../services";
// import {notify} from "@kyvg/vue3-notification";

export const services = {
    namespaced: true,
    state: () => ({
        services:[]
    }),
    actions: {
        async initServices({ commit }) {
            const services = await serviceService.getAll()
            commit('setServices',services)
        }
    },
    mutations: {
        setServices(state,services){
            state.services= services
        }
    }
}
