<template>

  <div class="bottom-menu">

    <a href="" class="for-popup-service"><i class="fas fa-puzzle-piece"></i>добавить</a>
    <a href="" class="delete-service"><i class="fas fa-trash-alt"></i>удалить</a>
  </div>




 

  <div class="left left-li scroll">
    <table class="service-list">
      <tr  @click="setCurrentService(service)" v-for="(service, index) in services"
              :key="index"><td><i class="far fa-bookmark"></i> {{service.name}}</td> <td>{{service.during}}</td> <td>{{service.cost}}</td> <td><i class="fas fa-pencil-alt"></i></td></tr>

    </table>

  </div>
  <div class="right service-right">
    <h3>Редактирование услуги <span>{{this.currentService.name}}</span></h3>
    <div class="form-red service-form">
      <form id="service-form">
        <div class="mb-3">
          <label for="l1" class="form-label">название услуги</label>
          <input type="text" class="form-control name-service" id="l1" aria-describedby="emailHelp" placeholder="название услуги" :value="currentService.name">
        </div>
        <div class="mb-3">
          <label for="l2" class="form-label">Длительность услуги</label>
          <input type="number" class="form-control time-service" id="l2" placeholder="Длительность услуги" :value="currentService.during">
        </div>
        <div class="mb-3">
          <label for="l3" class="form-label">Стоимость услуги</label>
          <input type="text" class="form-control price-service" id="l3" placeholder="Стоимость услуги" :value="currentService.cost">
        </div>
        <div class="mb-3">
          <label for="exampleColorInput" class="form-label">Выберите цвет услуги</label>
          <input type="color" class="form-control form-control-color color-edit" id="exampleColorInput" :value="currentService.color" title="Выберите цвет услуги">
        </div>
        <input type="hidden" class="id-service" value="">
        <button type="submit" class="btn btn-primary  ">Редактировать</button>

      </form>

    </div>

  </div>

</template>

<script>
import Service from "../../models/service";
// import User from "@/models/user";
// import service from "../../models/service";
let servicesData = [
  {id:1,name:'service 1',color:'#cccccc',during:60,cost:100, created_at:'', updated_at:''},
  {id:2,name:'service 2',color:'#cccccc',during:60,cost:200, created_at:'', updated_at:''},
  {id:3,name:'service 3',color:'#cccccc',during:60,cost:300, created_at:'', updated_at:''},
]
export default {
    data () {
        return {
          services:servicesData.map(service => new Service(service)),
          currentService:servicesData[0]
        }
    },
    computed: {
      
    },
    created () {
    },
    methods: {
      setCurrentService(service){
        console.log(service)
        this.currentService.init(service);
        console.log(this.currentService)
      }
    }
};
</script>