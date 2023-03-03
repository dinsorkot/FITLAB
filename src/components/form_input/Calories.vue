<script setup>
import { ref } from "vue";
import { db } from "/src/firebase.js";
import { collection, addDoc } from "firebase/firestore";

var selectedNumber = ref(0);

const caloriedata = ref({ foodname: "", numcalorie: 0 });
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
    <div class="mb-3 d-flex align-items-center">
      <div class="sln">จำนวนอาหารที่ทานไป</div>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="selectedNumber"
      >
        <option v-for="n in 10" :value="n">{{ n }}</option>
      </select>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-4 mt-3" v-for="n in selectedNumber">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">อาหาร</h5>
            <div>
              <div class="mb-3 in-form">
                <label for="exampleFormControlInput1" class="form-label">ชื่ออาหาร</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="ชื่ออาหาร"
                  v-model="caloriedata.foodname"
                />
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
