import { Header } from '../../.nuxt/components';
<template>
  <h1 class="text-black">   dashboard index</h1>
  <li v-if="!authenticated" class="loginBtn text-black" style="float: left">
          <NuxtLink to="/login">Login</NuxtLink>
        </li>
        <li v-if="authenticated" class="loginBtn text-black" style="float: right">
          <NuxtLink @click="logout">Logout</NuxtLink>
        </li>
</template>
<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created
definePageMeta({
  layout:"userpanel",
})
const router = useRouter();
const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
const logout = () => {
  logUserOut();
  router.push('/login');
};
</script>

<style scoped>
.dashboard {
  display: flex;
}

.navbar {
  border-right: 1px solid #e2e8f0;
  width: 240px;
}

.nav-link {
  text-decoration: none;
  padding: 1rem;
  transition: background-color 0.2s ease-in-out;
}
::-webkit-scrollbar {
  width: 10px;
  cursor: pointer !important;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #2b0366;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #20004f;
}

.dashboard-panel {
  border: 1px solid #ffffff;
  flex-grow: 1;
}

.header {
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}
</style>

function definePageMeta(arg0: { layout: string; middleware: string; }) {
  throw new Error("Function not implemented.");
}
