<script setup>
import { ref } from 'vue';
var selectedNumber = ref(0);
</script>
<template>
    <div class="container">
        <div class="mb-3 d-flex align-items-center ">
            <div class="sln">
                จำนวนอาหารที่ทานไป
            </div>
            <select class="form-select" aria-label="Default select example" v-model="selectedNumber">
                <option v-for="n in 10" :value="n">{{ n }}</option>
            </select>
        </div>

        <div class="row justify-content-center">
            <div class=" col-md-4  mt-3" v-for="n in selectedNumber">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">อาหาร</h5>
                        <div>
                            <div class="mb-3 in-form">
                                <label for="exampleFormControlInput1" class="form-label">ชื่ออาหาร</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                    placeholder="ชื่ออาหาร">
                            </div>
                            <div class="mb-3 in-form">
                                <label for="calorry" class="form-label">จำนวนแคลลอรี่</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username"
                                        aria-label="Recipient's username" aria-describedby="basic-addon2" spellcheck="false"
                                        data-ms-editor="true">
                                    <span class="input-group-text" id="basic-addon2">kcal</span>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <a class="btn btn-primary">ยืนยัน</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<style scoped>
.card {
    background-color: #1E1E1E;
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