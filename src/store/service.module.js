import {serviceService, userService} from "../services";
import {notify} from "@kyvg/vue3-notification";
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
        },

        async add({commit},service) {
            try{
                const serviceData = await userService.add(service)
                commit('add',serviceData)
                notify({
                    title: "Service",
                    text: "service добавлен",
                    type: "success",
                });
            }catch{
                notify({
                    title: "service",
                    text: 'Ошибка добавления',
                    type: "error",
                });
            }
        },

        async edit({commit},service) {
            try{
                const serviceData = await userService.edit(service)
                commit('edit',serviceData)
                notify({
                    title: "услуга",
                    text: "услуга отредактирована",
                    type: "success",
                });
            }catch{
                notify({
                    title: "Service",
                    text: 'Ошибка редактирования',
                    type: "error",
                });
            }
        },

    },
    mutations: {
        setServices(state,services){
            state.services= services
        },
        add(state,service){
            state.users.push(service)
        },
        edit(state,service){
            state.services[state.services.findIndex(item => item.id == service.id)] = service
        },
    }
}
