<template>
  <div>
   
    <div class="container form">
      <label for="uname"><b>email</b></label>
      <input
        v-model="user.email"
        type="email"
        class="input"
        placeholder="Enter email"
        name="uname"
        required
      />

      <label for="psw"><b>Password</b></label>
      <input
        v-model="user.password"
        type="password"
        class="input"
        placeholder="Enter Password"
        name="psw"
        required
      />

      <button @click.prevent="login"  class="button">Login</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '../store/auth';
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const { authenticateUser } = useAuthStore(); // use auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive

const user = ref({
  email: '',
  password: '',
});

const login = async () => {
  try{
    await authenticateUser(user.value);
    // redirect to homepage if user is authenticated
    if (authenticated) {
      router.push('/');
  }
  } catch(error){
        console.log(error)
      };
};
</script>

