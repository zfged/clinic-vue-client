<template>
  <div class="menu">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10 top-menu">
          <select
            id="top-centers-list"
            class="form-select"
            aria-label="Default select example"
          >
            <option  v-for="(centers, index) in $store.state.centers.centers"
                    :key="index" v-bind:value="index">{{centers.name}}</option>

          </select>
          <router-link to="/clients">Клиенты</router-link>
          <router-link to="/descriptions">Описание</router-link>
          <router-link to="/services">Услуги</router-link>
          <router-link to="/employers">Сотрудники</router-link>
          <router-link to="/salary">Зарплаты</router-link>
          <router-link to="/cashbox">Касса</router-link>
          <router-link to="/settings">Настройки</router-link>
          <router-link to="/login">ВЫХОД</router-link>
        </div>
      </div>
    </div>
</template>

<script>
import Center from "../models/center";

export default {
  data() {
    return {
      center:new Center()
    };
  },
  computed: {},
  created() {

     this.$store.dispatch("users/initCenters")

  },
  methods: {},
};
</script>

<style scoped>
  .router-link-active {
    background-color: gray !important;
  }
</style>