<script setup>
import { RouterLink } from 'vue-router'
import { ref }from 'vue'

import { useLoginEmail } from '../stores/loginEmail';
import { useLoginGoogle } from '../stores/loginGoogle'

const storeE = useLoginEmail();
const storeG = useLoginGoogle();

const { signinEmail } = storeE;
const { signinGoogle } = storeG;

const Email = ref();
const Password =ref();
</script>
<template>
  <div class="" style="height: 100vh;">
    <div class="row w-100 h-100 text-light m-0">
      <div class="col-sm-6 " style="background-color: #272727"><div class="logo h-100" ><img src="../assets/Logo.png" style="width: 350px;height:350px;"></div></div>
      <div class="col-sm-6 ">
        <div class="row h-100">
          <div class="col"></div>
          <div class="col-sm-6 col-xxl-4 d-flex justify-content-center align-items-center">
            <div class="text-center ">
              <div class="mb-5">
                <h1>login</h1>
              </div>
              <div>
                <div class="d-flex justify-content-center mb-5">
                  <form class="form-floating">
                    <input type="email" class="form-control rounded-pill border-0 input_EPU" id="email"
                      placeholder="email" v-model="Email">
                    <label class="ps-4" for="email">Email</label>
                  </form>
                </div>
                <div class="d-flex justify-content-center mb-5">
                  <form class="form-floating">
                    <input type="password" class="form-control rounded-pill border-0 input_EPU" id="password"
                      placeholder="password" v-model="Password">
                    <label class="ps-4" for="password">Password</label>
                  </form>
                </div>
              </div>
              <div class="mb-5 ">
                <a  class="btn btn-light rounded-pill position-relative"
                  style="height: 50px; width: 150px;" @click="signinEmail(Email,Password)">
                  <div class="position-absolute top-50 start-50 translate-middle">login</div>
              </a>
              </div>
              <div class="mb-3">
                <a class="btn btn-light rounded-pill loginMore" @click="signinGoogle()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                    class="bi bi-google me-2" viewBox="0 0 16 16">
                    <path
                      d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                  sign in with google</a>
              </div>
            </div>
          </div>
          <div class="col d-flex justify-content-center align-items-end">
            <div class="mb-3">
              <RouterLink to="signin" class="text-decoration-none text-light">don't have accout?</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input_EPU {
  height: 50px;
}

input {
  background-color: #272727;
  color: white;
  height: 50px;
  width: 250px;
  text-align: center;
}

input:focus {
  background-color: #272727;
  color: white;
  text-align: center;
}

input::placeholder {
  color: white;
  text-align: center;
}

.loginMore {
  height: 40px;
  width: 240px;
  text-align: start;
  padding-left: 20px;

}
.logo{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
