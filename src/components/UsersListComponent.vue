<template>
  <div class="users">
    <div class="users__item" v-for="user in users" @click="() => this.onClick(user.id)">
      <span class="users__item-name">{{ user.name }}</span>
      <span class="users__item-username">@{{ user.username }}</span>
      <span class="users__item-email">{{ user.email }}</span>
      <span class="users__item-phone">{{ user.phone }}</span>
    </div>
  </div>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";
import {IUser} from "@/interfaces/IUser";

@Options({
  props: {
    users: Object,
  }
})
export default class UsersListComponent extends Vue {
  onClick(id: number) {
    this.$router.push({name: 'userinfo', params: {id: id}})
  }
}
</script>

<style>
.users {
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  margin-left: 50px;
}

.users__item {
  width: 380px;
  height: 160px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-right: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  text-align: start;
  cursor: pointer;
}

.users__item-name {
  margin-top: 24px;
  margin-left: 24px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}

.users__item-username {
  margin-left: 24px;
  margin-top: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #444;
  font-family: 'Inter', sans-serif;
}

.users__item-email {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #444;
  font-family: 'Inter', sans-serif;
  margin-left: 24px;
  margin-top: 16px;
}

.users__item-phone {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #444;
  margin-left: 24px;
  margin-top: 4px;
}

@media screen and (max-width: 391px) {
  .users {
    width: 350px;
    margin: auto;
  }
  .users__item {
  width: 350px;
  margin-right: 0;
  }
}
</style>
