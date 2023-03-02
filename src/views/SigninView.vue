<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';

const age = ref(20);
const weight = ref(50);
const height = ref(170);
</script>
<template>
  <div class="" style="height: 100vh">
    <div class="row w-100 h-100 text-light m-0">
      <div class="col-sm-6 " style="background-color: #272727">logo</div>
      <div class="col-sm-6 ">
        <div class="row h-100">
          <div class="col"></div>
          <div class="col-sm-6 col-xxl-6 d-flex justify-content-center align-items-center">
            <div class="text-center pt-5">
              <div class="mb-5">
                <h1>sign in</h1>
              </div>
              <div>
                <div class="mb-5">
                  <form class="form-floating">
                    <input type="text" class="form-control rounded-pill border-0 input_EPU" id="usename"
                      placeholder="username">
                    <label class="ps-4" for="usename">Username</label>
                  </form>
                </div>
              </div>
              <div>
                <div class="mb-5">
                  <form class="form-floating">
                    <input type="email" class="form-control rounded-pill border-0 input_EPU" id="email"
                      placeholder="email">
                    <label class="ps-4" for="email">Email</label>
                  </form>
                </div>
              </div>
              <div>
                <div class="mb-5">
                  <form class="form-floating">
                    <input type="password" class="form-control rounded-pill border-0 input_EPU" id="password"
                      placeholder="password">
                    <label class="ps-4" for="password">Password</label>
                  </form>
                </div>
              </div>
              <div class="row mb-5 btn-group" role="group" aria-label="Basic radio toggle button group">
                <div class="col">
                  <input type="radio" class="btn-check" name="options-outlined" id="male" autocomplete="off">
                  <div class="
                                d-flex 
                                align-items-center 
                                justify-content-center 
                                btn 
                                btn-outline-secondary 
                                rounded-pill 
                                sex">
                    <label for="male">male</label>
                  </div>
                </div>
                <div class="col">
                  <input type="radio" class="btn-check" name="options-outlined" id="female" autocomplete="off">
                  <div class="
                                d-flex 
                                align-items-center 
                                justify-content-center 
                                btn 
                                btn-outline-secondary 
                                rounded-pill 
                                sex">
                    <label for="female">female</label>
                  </div>
                </div>
              </div>
              <div class="mb-5">
                <input type="range" class="form-range" id="customRange1" style="background-color: transparent;" min="6" max="80" v-model="age">
                <form class="form-floating">
                  <input type="text" class="form-control rounded-pill border-0 input_EPU" id="age" style="font-size: 20px;"
                    placeholder="age" :value="age">
                  <label class="ps-4" for="weight">age</label>
                </form>
              </div>
              <div class="mb-5">
                <input type="range" class="form-range" id="customRange1" style="background-color: transparent;" min="1" max="300" v-model="weight">
                <form class="form-floating">
                  <input type="text" class="form-control rounded-pill border-0 input_EPU" id="weight" style="font-size: 20px;"
                    placeholder="weight" :value="weight">
                  <label class="ps-4" for="weight">Weight ( kg )</label>
                </form>
              </div>
              <div class="mb-5">
                <input type="range" class="form-range" id="customRange1" style="background-color: transparent;" min="100" max="200" v-model="height">
                <div class="input-group mb-3">
                <form class="form-floating">
                  <input type="text" class="form-control rounded-pill border-0 input_EPU" id="height" style="font-size: 20px;"
                    placeholder="height" :value="height">
                  <label class="ps-4" for="height">Height ( cm )</label>
                </form>
              </div>
              </div>
              <div class="mb-5">
                <button class="btn btn-light rounded-pill" style="height: 50px; width: 150px">
                  sign in
                </button>
              </div>
            </div>
          </div>
          <div class="col d-flex justify-content-center align-items-end">
            <div class="mb-3">
              <RouterLink to="/" class="text-decoration-none text-light">have accout?</RouterLink>
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

.sex {
  height: 50px;
  width: 110px;
  background-color: #272727;
  color: white;
  text-align: center;
  text-justify: center;
}
</style>
