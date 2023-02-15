<template>
  <UserComponent v-if="this.user" :user="this.user"/>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import UserComponent from '@/components/UserComponent.vue'
import {IUser} from "@/interfaces/IUser";
import ApiService from "@/service/ApiService";

@Options({
  components: {UserComponent},
  props: {
    id: {type: String, required: true}
  }
})
export default class UserView extends Vue {
  user: IUser | null = null
  id!: string

  mounted() {
    ApiService.getUser(+this.id)
        .then(user => this.user = user).catch(err => alert(err))
  }
}
</script>

<style>


</style>
