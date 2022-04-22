<template>

  <div class="bottom-menu">

    <a href="" class="for-popup"  id="addemployer2"><i class="fas fa-user-plus"></i>добавить сотрудника</a>
    <a href="" class="delete-emp"><i class="fas fa-trash-alt"></i>удалить сотрудника</a>
<!--    <a href="/settings/schedule"><i class="fas fa-clipboard-list"></i>график работы</a>-->
    <a href=""><i class="fas fa-money-bill"></i>оплата за услугу</a>
  </div>
  <div class="left left-employers scroll">
<!-- <-------------------------------------------------------------------------->
               <ul>
                   <li><a href=""><i class="fas fa-user"></i>фамилия имя отчество</a></li>
                   <li><a href=""><i class="fas fa-user"></i>фамилия имя отчество</a></li>
                   <li><a href=""><i class="fas fa-user"></i>фамилия имя отчество</a></li>
                   <li><a href=""><i class="fas fa-user"></i>фамилия имя отчество</a></li>
               </ul>

    <!-- <-------------------------------------------------------------------------->

    <ul id="employers-list">

    </ul>

  </div>
  <div class="right service-right">
    <h3>Редактирование сотрудников</h3>
    <div class="form-red">
      <form class="edit-emp-form">
        <div class="mb-3">
          <label for="fio2" class="form-label">ФИО</label>
          <input type="text" class="form-control" id="fio2" aria-describedby="emailHelp" placeholder="ФИО">
        </div>

        <div class="mb-3">
          <label for="birthday" class="form-label">Дата рождения</label>
          <input type="text"  class="form-control" id="birthday" placeholder="дата рождения" autocomplete="off">
        </div>



        <div class="mb-3">
          <label for="commit" class="form-label">Биография</label>
          <textarea class="form-control" id="commit" rows="3"></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Редактировать</button>

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