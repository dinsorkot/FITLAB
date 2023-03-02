<template>
    <div class="container">
        <div class="container mb-3 setting setting-user d-flex align-items-center position-relative">
            <div class="card box box-user d-flex justify-content-center align-items-center">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#898989" width="64">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g id="style=linear">
                            <g id="email">
                                <path id="vector"
                                    d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                                    stroke="#898989" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path id="vector_2"
                                    d="M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688"
                                    stroke="#898989" stroke-width="1.5" stroke-linecap="round"></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div class="ps-3 text-light">
                <h1>Change Email</h1>
                <h6>before email</h6>
            </div>
        </div>
        <div class="container mb-3 setting setting-user d-flex align-items-center position-relative">
            <div class="card box box-user d-flex justify-content-center align-items-center">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="64">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V14Z"
                            fill="#898989"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7 8.12037C5.3161 8.53217 4 9.95979 4 11.7692V17.3077C4 19.973 6.31545 22 9 22H15C17.6846 22 20 19.973 20 17.3077V11.7692C20 9.95979 18.6839 8.53217 17 8.12037V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7V8.12037ZM15 7V8H9V7C9 6.64936 9.06015 6.31278 9.17071 6C9.58254 4.83481 10.6938 4 12 4C13.3062 4 14.4175 4.83481 14.8293 6C14.9398 6.31278 15 6.64936 15 7ZM6 11.7692C6 10.866 6.81856 10 8 10H16C17.1814 10 18 10.866 18 11.7692V17.3077C18 18.7208 16.7337 20 15 20H9C7.26627 20 6 18.7208 6 17.3077V11.7692Z"
                            fill="#898989"></path>
                    </g>
                </svg>
            </div>
            <div class="ps-3 text-light">
                <h1>Change password</h1>
                <h6>before length password</h6>
            </div>
        </div>
        <div class="container exit d-flex justify-content-center align-items-center ">
            <div class="exit-full d-flex justify-content-center align-items-center">
                <svg fill="#898989" viewBox="0 0 16 16" id="home-16px" xmlns="http://www.w3.org/2000/svg" width="30">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path id="Path_77" data-name="Path 77"
                            d="M-13,11.5v2A2.5,2.5,0,0,1-15.5,16h-4A2.5,2.5,0,0,1-22,13.5V2.5A2.5,2.5,0,0,1-19.5,0h4A2.5,2.5,0,0,1-13,2.5v2a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5v-2A1.5,1.5,0,0,0-15.5,1h-4A1.5,1.5,0,0,0-21,2.5v11A1.5,1.5,0,0,0-19.5,15h4A1.5,1.5,0,0,0-14,13.5v-2a.5.5,0,0,1,.5-.5A.5.5,0,0,1-13,11.5Zm6.962-3.809a.505.505,0,0,0,0-.382.518.518,0,0,0-.109-.163l-4-4a.5.5,0,0,0-.708,0,.5.5,0,0,0,0,.708L-7.707,7H-17.5a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h9.793l-3.147,3.146a.5.5,0,0,0,0,.708A.5.5,0,0,0-10.5,12a.5.5,0,0,0,.354-.146l4-4A.518.518,0,0,0-6.038,7.691Z"
                            transform="translate(22)"></path>
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>
<style scoped>
.exit {
    position: relative;
    height: 200px;
    border-radius: 10px;
}

.exit-full {
    position: absolute;
    border-radius: 10px;
    background-color: #272727;
    height: 60px;
    width: 100px;
    bottom: 0;
    right: 0;
    margin-right: 50px;
    margin-bottom: 50px;
}

.setting {
    background-color: #1E1E1E;
    height: 200px;
    border-radius: 10px;
}

.setting-user {
    padding-left: 50px;
}

.box {
    background-color: #121212;
    width: 120px;
    height: 120px;
}

h6 {
    color: #898989;
}

@media screen and (max-width: 800px) {

    .exit {
        background-color: #272727;
        height: 100px;
        border-radius: 10px;
    }

    .exit-full {
        margin: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .exit-full svg {
        width: 50px;
    }

    .setting {
        background-color: #1E1E1E;
        height: 100px;
        margin-left: 0;
        border-radius: 10px;
    }

    .setting-user {
        padding-left: 6px;
        padding-top: 0px;
    }

    .box {
        background-color: #121212;
        width: 60px;
        height: 60px;
        margin-left: 10px;
    }

    .box svg {
        width: 30px;
        height: 30px;
    }

    h1 {
        font-size: 16px;
    }

    h4 {
        font-size: 13px;
    }

    h6 {
        color: #898989;
        font-size: 10px;
    }
}</style>