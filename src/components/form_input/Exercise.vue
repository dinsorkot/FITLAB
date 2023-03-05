<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useExerciseStore } from "../../stores/dataExercise";
import { db } from "/src/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const store = useExerciseStore();
const { data_hour } = storeToRefs(store);
const auth = getAuth();
const exercisedata = ref({ type: {}, date: "", time: "", hour: 0, minute: 0 });
const uid = ref();
onAuthStateChanged(auth, (user) => {
  if (user) {
    uid.value = user.uid;
    console.log(uid);
    exercisedata.value.id = uid;
  } else {
    // User is signed out
  }
});

async function addexercisedata() {
  try {
    const docRef = await addDoc(collection(db, "Exercise"), exercisedata.value);
    console.log("Document written with ID: ", docRef.id);
    alertify.alert("FITLAB", "Success");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
</script>
<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-4 mt-3" >
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">ออกกำลังกาย</h5>
            <div>
              <div class="mb-3 in-form">
                <label for="exampleFormControlInput1" class="form-label">ประเภท</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="exercisedata.type"
                >
                  <option v-for="(key, value, n) in data_hour" :key="n" :value="key">
                    {{ key.name }}
                  </option>
                </select>
              </div>
              <div class="mb-3 in-form">
                <label for="calorry" class="form-label">จำนวนแคลลอรี่</label>
                <div class="input-group mb-3">
                  <input
                    type="date"
                    class="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    spellcheck="false"
                    data-ms-editor="true"
                    v-model="exercisedata.date"
                    min="0"
                  />
                </div>
                <div class="input-group mb-3">
                  <input
                    type="time"
                    class="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    spellcheck="false"
                    data-ms-editor="true"
                    v-model="exercisedata.time"
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
                    v-model="exercisedata.hour"
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
                    v-model="exercisedata.minute"
                    min="0"
                    
                  />
                  <span class="input-group-text" id="basic-addon2">นาที</span>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <a class="btn btn-primary" @click="addexercisedata()">ยืนยัน</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
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
