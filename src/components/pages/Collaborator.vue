<template>

  <div class="bottom-menu">

    <a href="" class="for-popup"  id="addemployer2"><i class="fas fa-user-plus"></i>добавить сотрудника</a>
    <a href="" class="delete-emp"><i class="fas fa-trash-alt"></i>удалить сотрудника</a>
    <a href="" class="delete-emp"><i class="fas fa-trash-alt"></i>редактировать сотрудника </a>
<!--    <a href="/settings/schedule"><i class="fas fa-clipboard-list"></i>график работы</a>-->
  </div>
  <div class="left left-employers scroll">
<!-- <-------------------------------------------------------------------------->
               <ul>
                   <li><a href=""><i class="fas fa-user"></i>Ваня</a></li>
                   <li><a href=""><i class="fas fa-user"></i>Дима</a></li>
                   <li><a href=""><i class="fas fa-user"></i>Коля</a></li>
                   <li><a href=""><i class="fas fa-user"></i>Жека</a></li>
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
import Collaborator from "../../models/collaborator";



export default {
  data () {
    return {
      currentCollaborator:new Collaborator({}),
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
  async created () {
    await this.$store.dispatch("сollaborators/initCollaborators");
  },
  methods: {
    setCurrentCollaborator(collaborator){
      this.currentCollaborator.init(collaborator);
      this.mode = "see";
      this.currentCollaborator.setShow(true);
      this.isEdit = true
    },
    edit() {
      this.mode = "edit";
      this.currentCollaborator.setShow(true);
    },
    add() {
      this.mode = "add";
      this.currentCollaborator.clear();
      this.currentCollaborator.setShow(true);
      this.isEdit = false
    },
    remove() {
      this.mode = "remove";
      this.currentCollaborator.setShow(true);
      this.isEdit = false
    },
    async saveOrEditService(){
      if(this.mode == 'edit')
        await this.$store.dispatch("сollaborators/edit",this.currentCollaborator);

      if(this.mode == 'add')
        await this.$store.dispatch("collaborators/add",this.currentCollaborator);
      this.currentCollaborator.clear();
      this.currentCollaborator.setShow(false);
      this.isEdit = false
      this.mode = "see";

      if(this.mode == 'remove')
        await this.$store.dispatch("collaborator/remove",this.currentCollaborator);


    }

  }
};

</script>