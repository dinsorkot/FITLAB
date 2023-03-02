<template>
    <div class="container d-flex justify-content-center mt-5">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">การนอน</h5>
                <div>
                    <div class="mb-3 in-form">
                        <label for="calorry" class="form-label">กรอกเวลาที่นอน</label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Recipient's username"
                                aria-label="Recipient's username" aria-describedby="basic-addon2" spellcheck="false"
                                data-ms-editor="true">
                            <span class="input-group-text" id="basic-addon2">ชั่วโมง</span>
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Recipient's username"
                                aria-label="Recipient's username" aria-describedby="basic-addon2" spellcheck="false"
                                data-ms-editor="true">
                            <span class="input-group-text" id="basic-addon2">นาที</span>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <a class="btn btn-primary">ยืนยัน</a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card {
    width: 20rem;
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