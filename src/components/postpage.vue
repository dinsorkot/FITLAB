<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useInfoStore } from '../stores/infoUser';

const now = new Date();
const time = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Bangkok', hour12: true })
const timeComponents = time.split(':');
const hour = parseInt(timeComponents[0]);
const minute = parseInt(timeComponents[1]);
const second = parseInt(timeComponents[2].substr(0, 2)); // extract only the digits of the second component
const timeInNumber = hour * 10000 + minute * 100 + second;

const router = useRouter();

const store = useInfoStore();
const { getUserE, getUserG, createPost, getPosted, deletePost, userData, posteds } = store;

const post = ref('');

var id_user = ref(null)

getUserG();
getUserE();
setTimeout(function () {
    getPosted();
    id_user.value = userData();
}, 1000);

const handleCreatePost = () => {
    createPost(post.value, time, timeInNumber)
    post.value = ''
}

const edit = (uid) => {
    alertify.confirm("Are you want to delete post?",
        function () {
            deletePost(uid)
            alertify.success('YES');
        },
        function () {
            alertify.error('NO');
        });
}

</script>
<template>
    <div class="post d-flex align-items-center justify-content-center">
        <div class="card box-post  d-flex justify-content-center align-items-center">
            <svg viewBox="-0.5 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                fill="white" width="32">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <title>Person</title>
                    <desc>Created with Sketch.</desc>
                    <defs> </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                        <path
                            d="M41.6,44.3 C39,43 35.6,40.6 35.6,38.5 C35.6,37.4 36,36.7 36.4,36.5 C41.4,33.7 43.1,24.5 43.4,24.5 C45.1,24.5 46.3,20.2 46.3,17.4 C46.3,15.1 45.6,15.2 44.4,14.5 L44.4,14.2 C44.4,6.7 38.5,1 31.1,1 C23.8,1 17.5,7 17.5,14.4 L17.5,14.7 C16.3,15.4 15.8,15.8 15.8,18 C15.8,20.9 16.8,24.9 18.5,24.9 C18.8,24.9 21,33.7 25.8,36.7 C26.1,36.9 26.6,37.4 26.6,38.4 C26.6,40.8 23.4,42.9 20.7,44.3 C17.4,46 1,47.4 1,63 L61,63 C61,47.4 45.7,46.4 41.6,44.3 L41.6,44.3 Z"
                            id="Person" stroke="#6B6C6E" stroke-width="2" sketch:type="MSShapeGroup"> </path>
                    </g>
                </g>
            </svg>
        </div>
        <div class="form-floating w-75 in-post">
            <input type="text" class="form-control w-100 " id="floatingInput" placeholder="what happend today ?"
                v-model="post">
            <label for="floatingInput">what happend today ?</label>
        </div>
        <div class="ps-4">
            <button class="btn btn-dark" @click="handleCreatePost">post</button>
        </div>
    </div>
    <div class="posted post-user mt-3 position-relative" v-for="post in posteds" :key="post.uid">
        <div class="d-flex">
            <div class="card box box-user d-flex justify-content-center align-items-center">
                <svg viewBox="-0.5 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                    fill="white" width="32">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <title>Person</title>
                        <desc>Created with Sketch.</desc>
                        <defs> </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                            <path
                                d="M41.6,44.3 C39,43 35.6,40.6 35.6,38.5 C35.6,37.4 36,36.7 36.4,36.5 C41.4,33.7 43.1,24.5 43.4,24.5 C45.1,24.5 46.3,20.2 46.3,17.4 C46.3,15.1 45.6,15.2 44.4,14.5 L44.4,14.2 C44.4,6.7 38.5,1 31.1,1 C23.8,1 17.5,7 17.5,14.4 L17.5,14.7 C16.3,15.4 15.8,15.8 15.8,18 C15.8,20.9 16.8,24.9 18.5,24.9 C18.8,24.9 21,33.7 25.8,36.7 C26.1,36.9 26.6,37.4 26.6,38.4 C26.6,40.8 23.4,42.9 20.7,44.3 C17.4,46 1,47.4 1,63 L61,63 C61,47.4 45.7,46.4 41.6,44.3 L41.6,44.3 Z"
                                id="Person" stroke="#6B6C6E" stroke-width="2" sketch:type="MSShapeGroup"> </path>
                        </g>
                    </g>
                </svg>
            </div>
            <div class="usm">
                <div class="text-light">
                    <h3> {{ post.username }} </h3>
                </div>
                <div class="text-light">
                    <h6 style="font-size: 15px;">{{ post.time }}</h6>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center align-items-center text-light">
            <div class=" card w-75" style="background-color: transparent; border:none;margin-top:10px;">
                {{ post.post }}
            </div>
        </div>
        <div class="position-absolute" style="right:10px; top:10px;">
            <button class="" style="border: transparent; background-color:transparent;" @click="edit(post.uid)"
                v-if="post.id == id_user">
                <svg fill="#898989" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Glyph" version="1.1"
                    xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    stroke="#898989" width="32">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M16,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S17.654,13,16,13z" id="XMLID_287_">
                        </path>
                        <path d="M6,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S7.654,13,6,13z" id="XMLID_289_"></path>
                        <path d="M26,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S27.654,13,26,13z" id="XMLID_291_">
                        </path>
                    </g>
                </svg>
            </button>
        </div>
    </div>
</template>
<style scoped>
.post {
    background-color: #1E1E1E;
    height: 100px;
    border-radius: 10px;
}


.posted {
    background-color: #1E1E1E;
    padding-bottom: 40px;
    border-radius: 10px;
}

.post-user {
    padding-left: 40px;
    padding-top: 15px;
}

.box {
    background-color: #121212;
    width: 50px;
    height: 50px;
    margin-right: 20px;
}

.box-post {
    background-color: #121212;
    width: 50px;
    height: 50px;
    margin-right: 20px;
}

.box-user {
    margin-top: 9px;
}

.in-post input {
    background-color: #222222;
    border-color: #252525;
    border-radius: 20px;
    color: white;
}

.in-post label {
    color: white;
}



@media screen and (max-width: 800px) {

    .post {
        background-color: #1E1E1E;
        height: 100px;
        margin-left: 0;
        border-radius: 10px;
    }

    .post-user {
        padding-left: 6px;
        padding-top: 0px;
    }

    .usm {
        margin-top: 9px;
    }

    .usm h3 {
        font-size: 16px;
    }

}

@media screen and (max-width: 500px) {

    .box-post {
        display: none;
        visibility: hidden;
        margin: 0;
        width: 0;
    }
}
</style>