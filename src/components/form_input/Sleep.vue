<script setup>
import { ref } from "vue";
import { db } from "/src/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();
const sleepdata = ref({ date: "", hour: 0, minute: 0 });
const uid = ref();

onAuthStateChanged(auth, (user) => {
  if (user) {
    uid.value = user.uid;
    console.log(uid);
    sleepdata.value.id = uid;
  } else {
    // User is signed out
  }
});

async function addsleepdata() {
  try {
    const docRef = await addDoc(collection(db, "Sleep"), sleepdata.value);
    console.log("Document written with ID: ", docRef.id);
    alertify.alert("FITLAB", "Success");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
</script>

<template>
  <div class="container d-flex justify-content-center mt-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">การนอน</h5>
        <div>
          <div class="mb-3 in-form">
            <label for="calorry" class="form-label">กรอกวันและเวลาที่นอน</label>
            <div class="input-group mb-3">
              <input
                type="date"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                spellcheck="false"
                data-ms-editor="true"
                v-model="sleepdata.date"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                spellcheck="false"
                data-ms-editor="true"
                v-model="sleepdata.hour"
                min="0"
                max="24"
              />
              <span class="input-group-text" id="basic-addon2">ชั่วโมง</span>
            </div>
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                spellcheck="false"
                data-ms-editor="true"
                v-model="sleepdata.minute"
                min="0"
                max="59"
              />
              <span class="input-group-text" id="basic-addon2">นาที</span>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <a class="btn btn-primary" @click="addsleepdata()">ยืนยัน</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 20rem;
  background-color: #1e1e1e;
}

.sln {
  width: 200px;
}

.in-form input {
  background-color: #222222;
  border-color: #252525;
  color: white;
  height: 30px;
}

.in-form span {
  background-color: #222222;
  border-color: #252525;
  color: white;
  height: 30px;
}

.in-form input::placeholder {
  color: transparent;
}

.in-form label {
  font-size: 15px;
}
</style>
