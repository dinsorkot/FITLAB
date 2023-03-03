<script setup>
import { useProfileStore } from '../stores/profile'
const store = useProfileStore();
const { getuser , username } = store;
var usm = username;
getuser();
</script>
<template>
    <div class="container">
        <div class="container profile profile-user d-flex align-items-center position-relative">
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
            <div class="ps-3 text-light">
                <h1>{{ usm }} (age)</h1>
                <h4>sex</h4>
                <h6>weight (kg) , height (cm)</h6>
            </div>
            <div class="position-absolute top-0 end-0 me-3 mt-2 edit">
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
            </div>
        </div>
        <div class="container position-relative">
            <div class="profile profile-post mt-3 d-flex">
                <div class="card box-post box-user d-flex justify-content-center align-items-center">
                    <svg viewBox="-0.5 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                        fill="white" width="32">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <title>Person</title>
                            <desc>Created with Sketch.</desc>
                            <defs> </defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                                sketch:type="MSPage">
                                <path
                                    d="M41.6,44.3 C39,43 35.6,40.6 35.6,38.5 C35.6,37.4 36,36.7 36.4,36.5 C41.4,33.7 43.1,24.5 43.4,24.5 C45.1,24.5 46.3,20.2 46.3,17.4 C46.3,15.1 45.6,15.2 44.4,14.5 L44.4,14.2 C44.4,6.7 38.5,1 31.1,1 C23.8,1 17.5,7 17.5,14.4 L17.5,14.7 C16.3,15.4 15.8,15.8 15.8,18 C15.8,20.9 16.8,24.9 18.5,24.9 C18.8,24.9 21,33.7 25.8,36.7 C26.1,36.9 26.6,37.4 26.6,38.4 C26.6,40.8 23.4,42.9 20.7,44.3 C17.4,46 1,47.4 1,63 L61,63 C61,47.4 45.7,46.4 41.6,44.3 L41.6,44.3 Z"
                                    id="Person" stroke="#6B6C6E" stroke-width="2" sketch:type="MSShapeGroup"> </path>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="usm">
                    <div class="text-light">
                        <h3> username </h3>
                    </div>
                    <div>
                        <h6>time</h6>
                    </div>
                </div>
            </div>
            <div class="position-absolute top-0 end-0 me-4  edit-profile">
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
            </div>
        </div>
    </div>
</template>

<style scoped>
.box {
    background-color: #121212;
    width: 120px;
    height: 120px;
}


.profile {
    background-color: #1E1E1E;
    height: 200px;
    border-radius: 10px;
}

.profile-user {
    padding-left: 50px;
}

.profile-post {
    padding: 20px;
}

.box-post {
    background-color: #121212;
    width: 80px;
    height: 80px;
}

h6 {
    color: #898989;
}

.usm {
    padding-left: 10px;
}

@media screen and (max-width: 800px) {

    .profile {
        background-color: #1E1E1E;
        height: 100px;
        margin-left: 0;
        border-radius: 10px;
    }

    .profile-user {
        padding-left: 6px;
        padding-top: 0px;
    }

    .edit svg {
        width: 20px;
        height: 20px;
    }

    .edit-profile {
        margin: 0;
    }

    .edit-profile svg {
        width: 20px;
        height: 20px;
    }

    .box {
        background-color: #121212;
        width: 60px;
        height: 60px;
        margin-left: 10px;
    }

    .usm h3 {
        font-size: 13px;
    }

    .usm h6 {
        font-size: 10px;
    }

    h1 {
        font-size: 16px;
    }

    h4 {
        font-size: 13px;
    }

    h6 {
        font-size: 10px;
    }

    .box-post {
        background-color: #121212;
        width: 40px;
        height: 40px;
        margin-top: 3px;
    }

    .box-post svg {
        background-color: #121212;
        width: 20px;
        height: 20px;
    }

    .profile-post {
        padding: 10px;
    }
}
</style>