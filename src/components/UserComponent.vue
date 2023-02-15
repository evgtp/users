<template>
  <div class="userInfo" v-if="user">
    <div class="userInfo__header">
    <h2 class="userInfo__header-name">{{ user.name }}</h2>
    <span class="userInfo__header-username">@{{ user.username }}</span>
    </div>
    <div class="userInfo__conteiner">
      <div class="userInfo__container-email">
        <p>Email</p>
        <span>{{ user.email }}</span>
      </div>
      <div class="userInfo__container-phone">
        <p>Phone</p>
        <span>{{ user.phone }}</span>
      </div>
      <div class="userInfo__container-website">
        <p>Website</p>
        <span>{{ user.website }}</span>
      </div>
      <div class="userInfo__container-company">
        <p>Company</p>
        <span>{{user.company.name}}</span>
      </div>
      <div class="userInfo__container-address">
        <p>Address</p>
        <span>{{ user.address.suite }}</span>
        <span>{{ user.address.street }}, </span>
        <span>{{ user.address.city }}, </span>
        <span>{{ user.address.zipcode }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";
import {IUser} from "@/interfaces/IUser";
import ApiService from "@/service/ApiService";

@Options({
  props: {
    user: Object,
  }
})
export default class UserComponent extends Vue {
  user!: IUser | undefined

  mounted() {
    console.log('asd')
  }

}
</script>

<style scoped>
.userInfo__header {
  display: flex;
  margin-top: 56px;
  margin-bottom: 48px;
}
.userInfo__header-name {
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  font-family: 'Inter', sans-serif;
  color: #000;
  text-align: start;
  margin-left: 50px;
}

.userInfo__header-username {
  margin-left: 16px;
}

.userInfo__conteiner {
  display: flex;
  flex-wrap: wrap;
}

.userInfo__conteiner p {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
}

.userInfo__conteiner span {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000;
}

.userInfo__container-email {
  width: 115px;
  height: 56px;
  margin-left: 50px;
  margin-right: 185px;
}

.userInfo__container-phone {
  width: 166px;
  height: 56px;
  margin-right: 134px;
}

.userInfo__container-website {
  width: 88px;
  height: 56px;
  margin-right: 212px;
}

.userInfo__container-company {
  width: 200px;
  height: 56px;
}

.userInfo__container-address {
  width: 400px;
  height: 56px;
  margin-left: 50px;
  margin-top: 32px;
}

@media screen and (max-width: 391px) {
  .userInfo__header {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
    margin-top: 32px;
  }
  .userInfo__header-name {
    margin-left: 20px;
    margin-bottom: 8px;
  }

  .userInfo__header-username {
    margin-left: 20px;
  }

  .userInfo__conteiner {
    display: flex;
    flex-direction: column;
  }

  .userInfo__container-email {
    margin-left: 20px;
    margin-right: 0;
    margin-bottom: 32px;
  }

  .userInfo__container-phone {
    margin-left: 20px;
    margin-right: 0;
    margin-bottom: 32px;
  }

  .userInfo__container-website {
    margin-left: 20px;
    margin-right: 0;
    margin-bottom: 32px;
  }

  .userInfo__container-company {
    margin-left: 20px;
    margin-right: 0;
    margin-bottom: 32px;
  }

  .userInfo__container-address {
    margin-left: 20px;
    margin-right: 0;
    margin-top: 0;
  }
}

</style>
