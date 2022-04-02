<template>

  <div class="bottom-menu">

    <div @click="add" class="for-popup-service"><i class="fas fa-puzzle-piece"></i>добавить</div>
    <div @click="edit" class="for-popup-service" :class="{ disabled: !isEdit }"><i class="fas fa-puzzle-piece"></i>редактировать</div>
    <div class="delete-service"><i class="fas fa-trash-alt"></i>удалить</div>
  </div>




 

  <div class="left left-li scroll">
    <table class="service-list">
      <tr  @click="setCurrentService(service)" v-for="(service, index) in services"
              :key="index"><td><i class="far fa-bookmark"></i> {{service.name}}</td> <td>{{service.during}}</td> <td>{{service.cost}}</td> <td><i class="fas fa-pencil-alt"></i></td></tr>

    </table>

  </div>
  {{currentService.show}}
  <div class="right service-right" v-show="currentService.show">
    <h3>{{ h3 }} {{mode}}</h3>
    <div class="form-red service-form">
      <form id="service-form">
        <div class="mb-3">
          <label for="l1" class="form-label">название услуги</label>
          <input :disabled="mode == 'see'" type="text" class="form-control name-service" id="l1" aria-describedby="emailHelp" placeholder="название услуги" v-model="currentService.name">
        </div>
        <div class="mb-3">
          <label for="l2" class="form-label">Длительность услуги</label>
          <input :disabled="mode == 'see'" type="number" class="form-control time-service" id="l2" placeholder="Длительность услуги" v-model="currentService.during">
        </div>
        <div class="mb-3">
          <label for="l3" class="form-label">Стоимость услуги</label>
          <input :disabled="mode == 'see'" type="text" class="form-control price-service" id="l3" placeholder="Стоимость услуги" v-model="currentService.cost">
        </div>
        <div class="mb-3">
          <label for="exampleColorInput" class="form-label">Выберите цвет услуги</label>
          <input :disabled="mode == 'see'" type="color" class="form-control form-control-color color-edit" id="exampleColorInput" v-model="currentService.color" title="Выберите цвет услуги">
        </div>
         <button @click="saveOrEditService" v-show="mode == 'edit' || mode == 'add'">
          {{ mode == "edit" ? "Сохранить" : "Добавить" }}
        </button>

      </form>

    </div>

  </div>

</template>

<script>
import Service from "../../models/service";
// import User from "@/models/user";
// import service from "../../models/service";
var services = [
  {id:1,name:'service 1',color:'#cccccc',during:60,cost:100, created_at:'', updated_at:''},
  {id:2,name:'service 2',color:'#cccccc',during:60,cost:200, created_at:'', updated_at:''},
  {id:3,name:'service 3',color:'#cccccc',during:60,cost:300, created_at:'', updated_at:''},
]

services = services.map(service => new Service(service))
export default {
    data () {
        return {
          services,
          currentService:new Service({}),
          mode: "see",
          isEdit:false,
        }
    },
    computed:{
      h3() {
        let h3 = "";
        if (this.mode == "see") h3 = "Просмотр";
        if (this.mode == "add") h3 = "Добавление";
        if (this.mode == "edit") h3 = "Редактирование";
        return h3;
      }
    },
    created () {
      this.currentService.init(services[0])
    },
    methods: {
      setCurrentService(service){
        this.currentService.init(service);
        this.mode = "see";
        this.isEdit = true
        this.currentService.setShow(true);
      },
      edit() {
        this.mode = "edit";
        this.currentService.setShow(true);
      },
      add() {
        this.mode = "add";
        this.currentService.clear();
        this.currentService.setShow(true);
        this.isEdit = false
      },
      saveOrEditService(){

      }
    }
};
</script>

<style>
  .disabled {
    opacity: 0.5;
    pointer-events: none;
  }
</style>