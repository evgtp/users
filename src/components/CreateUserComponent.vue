<template>
  <div class="createUser__form">
    <form class="form" @submit.prevent="onSubmit">
      <div class="form__block-name">
        <p>Name</p>
        <div :class="{ valid: !v$.name.$error && v$.name.$dirty, error: v$.name.$error }">
        <input class="form__input form__input-width390" type="text" v-model="form.name">
        </div>
        <div v-for="(error, index) in v$.name.$errors" :key="index">
          {{ error.$message }}
        </div>
      </div>
      <div class="form__block-username">
        <p>UserName</p>
        <div :class="{ valid: !v$.username.$error && v$.$dirty, error: v$.username.$error }">
        <input class="form__input form__input-width390" type="text" v-model="form.username">
        </div>
        <div v-for="(error, index) in v$.username.$errors" :key="index">
          {{ error.$message }}
        </div>
      </div>
      <div class="form__block-email">
        <p>Email</p>
        <div :class="{ valid: !v$.email.$error && v$.email.$dirty, error: v$.email.$error }">
        <input class="form__input form__input-width390" type="email" v-model="form.email">
        </div>
        <div v-for="(error, index) in v$.email.$errors" :key="index">
          {{ error.$message }}
        </div>
      </div>
      <div class="form__block-phone">
      <p>Phone</p>
        <div :class="{ valid: !v$.phone.$error && v$.phone.$dirty, error: v$.phone.$error }">
        <input class="form__input form__input-width390" type="text" v-model="form.phone">
        </div>
        <div v-for="(error, index) in v$.phone.$errors" :key="index">
          {{ error.$message }}
        </div>
      </div>
      <div class="form__block-website">
        <p>Website</p>
        <div :class="{ valid: !v$.website.$error && v$.website.$dirty, error: v$.website.$error }">
        <input class="form__input form__input-width390" type="text" v-model="form.website">
        </div>
        <div v-for="(error, index) in v$.website.$errors" :key="index">
          {{ error.$message }}
        </div>
      </div>
      <div class="form__block-company">
        <p>Company</p>
        <div :class="{ valid: !v$.companyName.$error && v$.companyName.$dirty, error: v$.companyName.$error }">
        <input class="form__input form__input-width390" type="text" v-model="form.companyName">
        </div>
        <div v-for="(error, index) in v$.companyName.$errors" :key="index">
          {{ error.$message }}
        </div>
      </div>
      <div class="form__block-city">
        <p>City</p>
        <div :class="{ valid: !v$.addressCity.$error && v$.addressCity.$dirty, error: v$.addressCity.$error }">
        <input class="form__input form__input-width390" type="text" v-model="form.addressCity">
        </div>
        <div v-for="(error, index) in v$.addressCity.$errors" :key="index">
          {{ error.$message }}
        </div>
      </div>
      <div class="form__block-street">
      <p>Street</p>
        <div :class="{ valid: !v$.addressStreet.$error && v$.addressStreet.$dirty, error: v$.addressStreet.$error }">
        <input class="form__input form__input-width390" type="text" v-model="form.addressStreet">
        </div>
        <div v-for="(error, index) in v$.addressStreet.$errors" :key="index">
          {{ error.$message }}
        </div>
      </div>
      <div class="form__block-suite">
        <p>Suite</p>
        <div :class="{ valid: !v$.addressSuite.$error && v$.addressSuite.$dirty, error: v$.addressSuite.$error }">
        <input class="form__input-suite form__input-width390" type="text" v-model="form.addressSuite">
        </div>
        <div v-for="(error, index) in v$.addressSuite.$errors" :key="index">
          {{ error.$message }}
        </div>
      </div>
      <div class="form__block-zipcode">
        <p>Zipcode</p>
        <div :class="{ valid: !v$.addressZipcode.$error && v$.addressZipcode.$dirty, error: v$.addressZipcode.$error }">
        <input class="form__input-zipcode form__input-width390" type="text" v-model="form.addressZipcode">
        </div>
        <div v-for="(error, index) in v$.addressZipcode.$errors" :key="index">
          {{ error.$message }}
        </div>
      </div>
      <button class="form__button" type="submit">Create user</button>
    </form>
  </div>
</template>

<script lang="ts">


import {Options, Vue} from "vue-class-component";
import useVuelidate from '@vuelidate/core'
import {email, required} from "@vuelidate/validators";
import {reactive} from "vue";
import {IUser} from "@/interfaces/IUser";

@Options({
  props: {}
})
export default class CreateUserComponent extends Vue {

  validations = {
    email: {required, email},
    username: {required},
    name: {required},
    phone: {required},
    website: {required},
    companyName: {required},
    addressCity: {required},
    addressStreet: {required},
    addressSuite: {required},
    addressZipcode: {required}
  }

  form = reactive({
    email: '',
    username: '',
    name: '',
    phone: '',
    website: '',
    companyName:'',
    addressCity: '',
    addressStreet: '',
    addressSuite: '',
    addressZipcode: ''
  })

  v$: any = useVuelidate(this.validations, this.form)


  onSubmit() {
    this.v$.$touch()

    if (this.v$.$invalid) {
      this.v$.$errors.forEach((error: any) => console.log(error.$message))
      return
    }

    const user: IUser = {
      username: this.v$.username.$model,
      email: this.v$.email.$model,
      name: this.v$.name.$model,
      phone: this.v$.phone.$model,
      website: this.v$.website.$modal,
      company: {
        name: this.v$.companyName.$modal
      },
      address: {
        city: this.v$.addressCity.$maodal,
        street: this.v$.addressStreet.$modal,
        suite: this.v$.addressSuite.$modal,
        zipcode: this.v$.addressZipcode.$modal
      }
    }

    this.$emit('submitted', user)
  }
}
</script>


<style scoped>
.valid input {
  border: 1px solid green;
}

.error input {
  border: 1px solid red;
}

.createUser__form {
  width: 1180px;
  margin-top: 80px;
  margin-left: 50px;
}

.form {
  display: flex;
  flex-wrap: wrap;
}

.form p {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 8px;
  color: #000;
}

.form__input {
  background: #FFFFFF;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  width: 380px;
  height: 40px;
  border: none;
  padding-left: 20px;
}

.form__input-suite {
  background: #FFFFFF;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  width: 180px;
  height: 40px;
  border: none;
}

.form__input-zipcode {
  background: #FFFFFF;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  width: 180px;
  height: 40px;
  border: none;
}

.form__block-name {
  margin-right: 20px;
}

.form__block-username {
  margin-right: 20px;
}

.form__block-phone {
  margin-right: 20px;
  margin-top: 32px;
  margin-bottom: 32px;
}

.form__block-website {
  margin-right: 20px;
  margin-top: 32px;
  margin-bottom: 32px;
}

.form__block-company {
  margin-top: 32px;
  margin-bottom: 32px;
}

.form__block-city {
  margin-right: 20px;
}

.form__block-street {
  margin-right: 20px;
}

.form__block-suite {
  margin-right: 20px;
}

.form__button {
  border: 1px solid #000000;
  width: 110px;
  height: 40px;
  margin-top: 40px;
  cursor: pointer;
}

@media screen and (max-width: 391px) {
  .createUser__form {
    width: 350px;
    margin-left: 20px;
  }
  .form__input-width390 {
    width: 350px;
    margin-bottom: 32px;
  }

  .form__block-phone {
    margin-top: 0px;
    margin-bottom: 0;
  }

  .form__block-website {
    margin-top: 0;
    margin-bottom: 0;
  }

  .form__block-company {
  margin-top: 0px;
  margin-bottom: 0px;
}
}
</style>
