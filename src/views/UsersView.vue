<template>
  <div class="header">
  <div class="header__title">
  <h2>Users</h2>
  </div>
  <button class="header__button" @click="this.createUser">Create user</button>
  </div>
  <UsersListComponent :users="users"/>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";
import UsersListComponent from "@/components/UsersListComponent.vue";
import {IUser} from "@/interfaces/IUser";
import ApiService from "@/service/ApiService";

@Options({
  components: {UsersListComponent}
})
export default class UsersView extends Vue {
  users: IUser[] = []

  mounted() {
    ApiService.getUsers()
        .then(users => this.users = users)
        .catch(err => alert(err))
  }

  createUser() {
    this.$router.push('create')
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  width: 1180px;
  margin: auto;
}
.header__title {
  margin-bottom: 48px;
  margin-top: 56px;
}

.header__title h2 {
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  font-family: 'Inter', sans-serif;
  color: #000;
}

.header__button {
  border: 1px solid #000000;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  width: 110px;
  height: 40px;
  cursor: pointer;
  margin-bottom: 48px;
  margin-top: 56px;
}

@media screen and (max-width: 391px) {
  .header {
    display: flex;
    justify-content: space-between;
    width: 350px;
    margin: auto;
  }
  .header__title {
    margin-bottom: 32px;
    margin-top: 32px;
  }

  .header__button {
    margin-top: 36px;
  }

}
</style>
