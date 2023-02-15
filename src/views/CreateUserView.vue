<template>
  <div class="header">
    <h2 class="header__title">Create user</h2>
  </div>
    <CreateUserComponent @submitted="createUser"/>
</template>

<script lang="ts">

import { Options, Vue} from "vue-class-component";
import CreateUserComponent from '@/components/CreateUserComponent.vue'
import {IUser} from "@/interfaces/IUser";
import ApiService from "@/service/ApiService";

@Options({
  components: {CreateUserComponent}
})
export default class CreateUserView extends Vue {

  createUser(user: IUser) {
    console.log(user)
    ApiService.createUser(user)
        .then(() => this.$router.push('/'))
        .catch(err => alert(err))
  }
}

</script>

<style scoped>
.header__title {
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  color: #000;
  font-family: 'Inter', sans-serif;
  margin-left: 50px;
}

@media screen and (max-width: 391px) {
  .header__title {
    margin: 32px 0 32px 20px;
  }
}
</style>
