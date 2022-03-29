<template>

  <div class="bottom-menu">

    <a href="" class="for-popup-service"><i class="fas fa-puzzle-piece"></i>добавить</a>
    <a href="" class="delete-service"><i class="fas fa-trash-alt"></i>удалить</a>
  </div>




 

  <div class="left left-li scroll">
    <table class="service-list">
      <tr><td><i class="far fa-bookmark"></i> лфк</td> <td>60 мин</td> <td>300грн</td> <td><i class="fas fa-pencil-alt" ></i></td></tr>
      <tr><td><i class="far fa-bookmark"></i> лфк</td> <td>60 мин</td> <td>300грн</td> <td><i class="fas fa-pencil-alt"></i></td></tr>
      <tr><td><i class="far fa-bookmark"></i> лфк</td> <td>60 мин</td> <td>300грн</td> <td><i class="fas fa-pencil-alt"></i></td></tr>
    </table>

  </div>
  <div class="right service-right">
    <h3>Редактирование услуги <span>Сюда название услуги</span></h3>
    <div class="form-red service-form">
      <form id="service-form">
        <div class="mb-3">
          <label for="l1" class="form-label">название услуги</label>
          <input type="text" class="form-control name-service" id="l1" aria-describedby="emailHelp" placeholder="название услуги">
        </div>
        <div class="mb-3">
          <label for="l2" class="form-label">Длительность услуги</label>
          <input type="number" class="form-control time-service" id="l2" placeholder="Длительность услуги">
        </div>
        <div class="mb-3">
          <label for="l3" class="form-label">Стоимость услуги</label>
          <input type="text" class="form-control price-service" id="l3" placeholder="Стоимость услуги">
        </div>
        <div class="mb-3">
          <label for="exampleColorInput" class="form-label">Выберите цвет услуги</label>
          <input type="color" class="form-control form-control-color color-edit" id="exampleColorInput" value="#563d7c" title="Выберите цвет услуги">
        </div>
        <input type="hidden" class="id-service" value="">
        <button type="submit" class="btn btn-primary  ">Редактировать</button>

      </form>

    </div>

  </div>

</template>

<script>
export default {
    data () {
        return {
         
        }
    },
    computed: {
      
    },
    created () {
     
    },
    methods: {
      
    }
};
</script>