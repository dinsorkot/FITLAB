<script setup>
import postpage from '../components/postpage.vue';
import dashboardpage from '../components/dashboardpage.vue';
import formpage from '../components/formpage.vue';
import profilepage from '../components/profilepage.vue';
import setting from '../components/settingpage.vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = useRouter();

const postView = ref(true);
const dashboardView = ref(false);
const formView = ref(false);
const profileView = ref(false);
const settingView = ref(false);

const showPost = () => {
  postView.value = true;
  dashboardView.value = false;
  formView.value = false;
  profileView.value = false;
  settingView.value = false;
  console.log('showPost');
  router.go(0);
}
const showDashBoard = () => {
  postView.value = false;
  dashboardView.value = true;
  formView.value = false;
  profileView.value = false;
  settingView.value = false;
  console.log('showDashBoard');

}
const showForm = () => {
  postView.value = false;
  dashboardView.value = false;
  formView.value = true;
  profileView.value = false;
  settingView.value = false;
  console.log('showForm');

}
const showProfile = () => {
  postView.value = false;
  dashboardView.value = false;
  formView.value = false;
  profileView.value = true;
  settingView.value = false;
  console.log('showProfile');

}
const showSetting = () => {
  postView.value = false;
  dashboardView.value = false;
  formView.value = false;
  profileView.value = false;
  settingView.value = true;
  console.log('showSetting');

}

const username = ref('');

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {

    const uid = user.uid;
    username.value = user.displayName;

  } else {
    // User is signed out
    // ...
  }
});

</script>
<template>
  <div>
    <div>
      <nav class="navbar navtop">
        <div class="container-fluid">
          <a class="navbar-brand text-light" href="#">FITLAB</a>
        </div>
      </nav>
    </div>
  </div>
  <div>
    <div class="container-fluid navbt h-100">
      <div class="row p-2 h-100 cl-btw">
        <div class="col icon-col d-flex justify-content-center " >
          <input type="radio" class="btn-check" name="options" id="post" autocomplete="off" @click="showPost()" checked>
          <label class="d-flex justify-content-center align-items-center icon-menu btn btn-dark" for="post">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="25">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M19 9L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21L14 21L10 21L9 21C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 9"
                  stroke="white" stroke-width="2" stroke-linejoin="round"></path>
                <path d="M3 11L7.5 7L10.6713 4.18109C11.429 3.50752 12.571 3.50752 13.3287 4.18109L16.5 7L21 11"
                  stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M10 21V17C10 15.8954 10.8954 15 12 15V15C13.1046 15 14 15.8954 14 17V21" stroke="white"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </g>
            </svg>
          </label>
        </div>
        <div class="col icon-col d-flex justify-content-center" v-if="username == ''">
          <input type="radio" class="btn-check" name="options" id="dashboard" autocomplete="off" @click="showDashBoard()">
          <label class="icon-menu btn btn-dark d-flex justify-content-center align-items-center" for="dashboard">
            <svg height="25" width="25" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="white">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path class="st0"
                    d="M494.734,51.383c-10.625-10.644-25.444-17.275-41.681-17.266h-26.936h-13.663H99.546H85.892H58.948 c-16.229-0.009-31.056,6.622-41.681,17.266C6.623,62.008-0.008,76.836,0,93.064v30.874c0,37.997,23.133,72.164,58.411,86.274 l0.527,0.208l61.258,18.767c3.047,3.948,6.258,7.813,9.842,11.507c22.751,23.396,44.865,39.107,60.102,51.86 c7.622,6.349,13.427,11.944,16.828,16.702c1.72,2.374,2.856,4.494,3.575,6.45c0.71,1.965,1.046,3.765,1.046,5.867 c0,29.655,0,12.518,0,42.173c0,6.131-0.865,11.398-2.302,15.746c-2.192,6.541-5.522,10.97-9.615,13.991 c-4.13,2.984-9.278,4.766-16.156,4.794c-24.524,0-24.761,0-24.779,0h-13.663v79.605h221.85v-79.605h-13.663c0,0-0.246,0-24.77,0 c-4.585,0-8.414-0.828-11.662-2.228c-4.849-2.138-8.605-5.486-11.562-10.689c-2.911-5.194-4.858-12.399-4.858-21.614 c0-29.655,0-12.518,0-42.173c0.009-2.102,0.346-3.902,1.047-5.867c1.228-3.393,3.875-7.432,8.386-12.153 c6.705-7.096,17.293-15.337,29.92-25.389c12.626-10.088,27.262-22.105,42.199-37.47c3.584-3.694,6.805-7.559,9.843-11.507 l61.266-18.767l0.519-0.208c35.286-14.11,58.41-48.277,58.41-86.274V93.064C512.009,76.836,505.386,62.008,494.734,51.383z M68.198,184.695c-24.706-10.052-40.88-34.058-40.88-60.757V93.064c0.008-8.769,3.52-16.601,9.26-22.36 c5.776-5.749,13.59-9.26,22.369-9.27h26.899c-0.028,6.359-0.065,12.726-0.065,19.058c0.019,29.291,0.683,58.183,6.45,85.51 c2.074,9.787,4.848,19.367,8.487,28.654L68.198,184.695z M393.052,160.343c-2.529,11.936-6.086,23.024-11.053,33.221 c-4.967,10.208-11.316,19.54-19.621,28.091c-20.859,21.477-41.454,36.132-58.028,49.941c-8.278,6.941-15.646,13.682-21.45,21.65 c-2.884,3.985-5.35,8.315-7.096,13.081c-1.746,4.749-2.719,9.934-2.711,15.246c0,29.655,0,12.518,0,42.173 c0,8.696,1.22,16.865,3.694,24.334c3.684,11.189,10.334,20.831,19.44,27.463c9.078,6.659,20.368,10.088,32.266,10.052 c4.466,0,8.114,0,11.116,0v24.971H172.392v-24.971c3.002,0,6.65,0,11.125,0c7.942,0.009,15.583-1.483,22.505-4.475 c10.407-4.476,18.985-12.417,24.543-22.424c5.595-10.006,8.342-21.923,8.342-34.949c0-29.655,0-12.518,0-42.173 c0.01-5.312-0.964-10.497-2.71-15.246c-3.075-8.369-8.25-15.292-14.246-21.604c-9.061-9.47-20.268-17.975-32.666-27.9 c-12.39-9.897-25.98-21.086-39.662-35.168c-8.305-8.551-14.654-17.884-19.621-28.091c-7.441-15.282-11.735-32.63-14.1-51.705 c-2.374-19.049-2.801-39.744-2.801-61.367c0-6.277,0.027-12.644,0.063-19.058h285.682c0.018,6.414,0.055,12.78,0.055,19.058 C398.918,109.329,398.109,136.501,393.052,160.343z M484.692,123.938c0,26.699-16.184,50.705-40.89,60.757l-32.539,9.96 c6.186-15.755,9.825-32.375,11.945-49.422c2.61-21.032,3.001-42.773,3.011-64.742c0-6.331-0.036-12.699-0.064-19.058h26.899 c8.778,0.01,16.601,3.52,22.368,9.27c5.74,5.758,9.261,13.581,9.27,22.36V123.938z">
                  </path>
                </g>
              </g>
            </svg>
          </label>
        </div>
        <div class="col icon-col d-flex justify-content-center" v-if="username == ''">
          <input type="radio" class="btn-check" name="options" id="form" autocomplete="off" @click="showForm()">
          <label class="icon-menu btn btn-dark d-flex justify-content-center align-items-center" for="form">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="25">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M12 3.99997H6C4.89543 3.99997 4 4.8954 4 5.99997V18C4 19.1045 4.89543 20 6 20H18C19.1046 20 20 19.1045 20 18V12M18.4142 8.41417L19.5 7.32842C20.281 6.54737 20.281 5.28104 19.5 4.5C18.7189 3.71895 17.4526 3.71895 16.6715 4.50001L15.5858 5.58575M18.4142 8.41417L12.3779 14.4505C12.0987 14.7297 11.7431 14.9201 11.356 14.9975L8.41422 15.5858L9.00257 12.6441C9.08001 12.2569 9.27032 11.9013 9.54951 11.6221L15.5858 5.58575M18.4142 8.41417L15.5858 5.58575"
                  stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </g>
            </svg>
          </label>
        </div>
        <div class="col icon-col d-flex justify-content-center" v-if="username == ''">
          <input type="radio" class="btn-check" name="options" id="profile" autocomplete="off" @click="showProfile()">
          <label class="icon-menu btn btn-dark d-flex justify-content-center align-items-center" for="profile">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="white" fill="none"
              width="25">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <circle cx="32" cy="18.14" r="11.14"></circle>
                <path d="M54.55,56.85A22.55,22.55,0,0,0,32,34.3h0A22.55,22.55,0,0,0,9.45,56.85Z"></path>
              </g>
            </svg>
          </label>
        </div>
        <div class="col icon-col d-flex justify-content-center" >
          <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" @click="showSetting()">
          <label class="icon-menu btn btn-dark d-flex justify-content-center align-items-center" for="option2">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="25">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                </path>
                <path
                  d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
                  stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                </path>
              </g>
            </svg>
          </label>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="container view">
      <div v-if="postView">
        <postpage />
      </div>
      <div v-if="dashboardView">
        <dashboardpage />
      </div>
      <div v-if="formView">
        <formpage />
      </div>
      <div v-if="profileView">
        <profilepage />
      </div>
      <div v-if="settingView">
        <setting />
      </div>
    </div>
  </div>
</template>
  
<style scoped>

.settingG {
  margin-top: 100px;
}
.icon-menu {
  height: 50px;
}

.navtop {
  background-color: #272727;
  width: 100%;
  position: fixed;
  z-index: 1;
}

.navbt {
  background-color: #272727;
  width: 100px;
  position: fixed;
  top: 55px;
  left: 0;
  z-index: 1;
}

.cl-btw {
  margin-top: 30px;
  gap: 0px;
}

.view {
  padding-top: 80px;
  padding-left: 120px;
  padding-bottom: 100px;
}

.icon-col {
  height: 80px;
  padding: 0px;
}

@media screen and (max-width: 800px) {
  .cl-btw {
    margin-top: 0px;
    gap: 0px;
    justify-content: center;
  }

  .view {
    padding-top: 80px;
    padding-left: 10px;
  }

  .navtop {
    width: 100%;
    position: fixed;
    top: 0;
  }

  .navbt {
    width: 100%;
    position: fixed;
    top: 90%;
    bottom: 0;
  }

  .icon-col {
    padding: 0;
  }

  .cl-btw {
    gap: 0px;
  }

  .icon-menu {
    height: 40px;
    width: 40px;
    padding: 0;
  }
}
</style>