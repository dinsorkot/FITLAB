<script setup>
import { ref } from "vue";
import { db } from "/src/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

const caloriedata = ref({ id:"",date: "", time: "", foodname: "", numcalorie: 0 });
const uid = ref();

onAuthStateChanged(auth, (user) => {
  if (user) {
    uid.value = user.uid;
    console.log(uid.value);
    caloriedata.value.id = uid;
  } else {
    // User is signed out
  }
});

async function addcaloriedata() {
  try {
    const docRef = await addDoc(collection(db, "Calorie"), caloriedata.value);
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
      <div class="col-md-4 mt-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">อาหาร</h5>
            <div>
              <div class="mb-3 in-form">
                <label for="exampleFormControlInput1" class="form-label">วันที่</label>
                <input
                  type="date"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="ชื่ออาหาร"
                  v-model="caloriedata.date"
                />
              </div>
              <div class="mb-3 in-form">
                <label for="exampleFormControlInput1" class="form-label">เวลา</label>
                <input
                  type="time"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="ชื่ออาหาร"
                  v-model="caloriedata.time"
                />
              </div>
              <div class="mb-3 in-form">
                <label for="calorry" class="form-label">ชื่ออาหาร</label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    spellcheck="false"
                    data-ms-editor="true"
                    v-model="caloriedata.foodname"
                  />
                </div>
              </div>
              <div class="mb-3 in-form">
                <label for="calorry" class="form-label">จำนวนแคลลอรี่</label>
                <div class="input-group mb-3">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    spellcheck="false"
                    data-ms-editor="true"
                    v-model="caloriedata.numcalorie"
                    min="0"
                  />
                  <span class="input-group-text" id="basic-addon2">kcal</span>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <a class="btn btn-primary" @click="addcaloriedata()">ยืนยัน</a>
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
