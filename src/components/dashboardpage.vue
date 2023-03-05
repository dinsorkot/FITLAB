<script setup>
import { Data } from "../stores/showdata";
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

const data = Data();
const { showe, shows, showc, q, sumc, sumeh, sumem, sumsh, sumsm, numsh, numc, numeh, dataID } = storeToRefs(data)
const { User, getuser, Calorie, Exercise, Sleep, } = data;
getuser();
const userid = ref(null);



setTimeout(function () {
    Calorie();
    Exercise();
    Sleep();
    console.log("showc : " + showc.value)
    userid.value = User();
    console.log("userid : " + userid.value)
    console.log("q : " + q.value)
    console.log("sumc : " + sumc.value);
    console.log("Datachart ", shows.value)
}, 1000)


</script>
<template>
    <div class="container text-light">
        <div>
            <div style="font-size: 25px;">Overview</div>
            <div class="container ">
                <div class="row">
                    <div class="col">
                        <div class="container-fluid dsb d-flex align-items-center">
                            <div class="card box  d-flex justify-content-center align-items-center">
                                <svg fill="#898989" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="90">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M3,7C3,4.239,4.791,2,7,2s4,2.239,4,5a4.913,4.913,0,0,1-3,4.823V21a1,1,0,0,1-2,0V11.823A4.913,4.913,0,0,1,3,7ZM19,3V7H18V3a1,1,0,0,0-2,0V7H15V3a1,1,0,0,0-2,0V8a3,3,0,0,0,3,3V21a1,1,0,0,0,2,0V11a3,3,0,0,0,3-3V3a1,1,0,0,0-2,0Z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <h4>Calories</h4>
                                <h2 v-if="((sumc) / numc.length).toFixed(2) != 'NaN'">{{ ((sumc) / numc.length).toFixed(2)
                                }} kcal</h2>
                                <h2 v-else>0 hour</h2>
                                <h6>DAILY AVERAGE</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="container-fluid dsb d-flex align-items-center">
                            <div class="card box  d-flex justify-content-center align-items-center">
                                <svg fill="#898989" height="200px" width="200px" version="1.1" id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 512.001 512.001" xml:space="preserve">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g>
                                            <g>
                                                <path
                                                    d="M413.214,217.421c-6.231,0-12.327,0.586-18.241,1.695l-34.426-114.66c-1.358-4.526-5.512-7.446-10.007-7.443v-0.001 h-54.313c-5.77,0-10.449,4.678-10.449,10.449s4.679,10.449,10.449,10.449h46.541l13.933,46.405H177.519l-7.87-15.383h31.843 c5.77,0,10.449-4.678,10.449-10.449s-4.679-10.449-10.449-10.449h-80.623c-5.77,0-10.449,4.678-10.449,10.449 s4.679,10.449,10.449,10.449h25.319c0.028,0.061,0.051,0.122,0.082,0.183l13.127,25.657l-25.181,49.224 c-11.004-4.243-22.949-6.576-35.43-6.576C44.314,217.421,0,261.736,0,316.205s44.314,98.784,98.785,98.784 c50.94,0,92.995-38.759,98.232-88.335h46.474c0.204,0,0.379-0.011,0.54-0.028c2.701-0.14,5.349-1.309,7.284-3.495l114.303-129.123 l9.344,31.122c-35.526,14.98-60.53,50.161-60.53,91.075c0,54.469,44.314,98.784,98.784,98.784 c54.471,0,98.785-44.314,98.785-98.784C511.999,261.736,467.685,217.421,413.214,217.421z M143.215,252.29 c17.492,12.197,29.756,31.374,32.732,53.466h-52.089c-1.086-2.596-2.565-4.985-4.36-7.101L143.215,252.29z M98.784,394.091 c-42.947,0-77.887-34.939-77.887-77.886c0-42.947,34.939-77.887,77.887-77.887c9.056,0,17.749,1.57,25.84,4.425l-23.727,46.384 c-0.699-0.054-1.402-0.09-2.114-0.09c-14.981,0-27.168,12.188-27.168,27.168c0,14.98,12.188,27.166,27.168,27.166 c11.279,0,20.971-6.91,25.073-16.717h52.091C170.824,364.675,138.185,394.091,98.784,394.091z M197.014,305.756 c-3.189-30.185-20.028-56.356-44.211-72.213l18.329-35.828l55.273,108.041H197.014z M245.815,297.813l-57.606-112.6h157.283 L245.815,297.813z M413.214,394.091c-42.946,0-77.886-34.939-77.886-77.886c0-31.468,18.769-58.618,45.691-70.893l14.981,49.892 c-6.072,4.987-9.953,12.548-9.953,21c0,14.98,12.187,27.166,27.166,27.166c14.981,0,27.168-12.187,27.168-27.166 c0-14.037-10.7-25.621-24.372-27.025l-14.983-49.901c3.973-0.627,8.041-0.96,12.187-0.96c42.947,0,77.887,34.94,77.887,77.887 C491.101,359.152,456.161,394.091,413.214,394.091z">
                                                </path>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M98.784,358c-13.957,0-26.942-6.93-34.733-18.536c-3.216-4.792-9.709-6.066-14.5-2.852 c-4.791,3.217-6.068,9.708-2.852,14.499c11.681,17.399,31.152,27.786,52.085,27.786c5.77,0,10.449-4.678,10.449-10.449 C109.233,362.678,104.555,358,98.784,358z">
                                                </path>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M57.204,320.49c-0.144-1.415-0.216-2.856-0.216-4.284c0-5.771-4.679-10.449-10.449-10.449 c-5.77,0-10.449,4.678-10.449,10.449c0,2.132,0.109,4.284,0.325,6.398c0.546,5.382,5.087,9.393,10.382,9.393 c0.352,0,0.709-0.018,1.069-0.054C53.606,331.357,57.788,326.23,57.204,320.49z">
                                                </path>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M433.274,256.792c-5.467-1.847-11.396,1.091-13.242,6.558c-1.846,5.468,1.091,11.397,6.558,13.242 c16.999,5.739,28.42,21.658,28.42,39.614c0,5.771,4.679,10.449,10.449,10.449c5.77,0,10.449-4.678,10.449-10.449 C475.909,289.276,458.776,265.399,433.274,256.792z">
                                                </path>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M413.215,358c-13.957,0-26.942-6.93-34.733-18.536c-3.216-4.792-9.709-6.066-14.5-2.852 c-4.791,3.217-6.068,9.708-2.852,14.499c11.681,17.399,31.152,27.786,52.085,27.786c5.77,0,10.449-4.678,10.449-10.449 C423.664,362.678,418.985,358,413.215,358z">
                                                </path>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M371.634,320.49c-0.144-1.415-0.216-2.856-0.216-4.284c0-5.771-4.679-10.449-10.449-10.449 c-5.77,0-10.449,4.678-10.449,10.449c0,2.132,0.11,4.284,0.325,6.398c0.547,5.382,5.087,9.393,10.382,9.393 c0.354,0,0.712-0.018,1.07-0.054C368.037,331.357,372.219,326.23,371.634,320.49z">
                                                </path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <h4>Exercise</h4>
                                <h2 v-if="((sumeh + (sumem / 60)) / numeh.length).toFixed(2) != 'NaN'">{{ ((sumeh + (sumem /
                                    60)) / numeh.length).toFixed(2) }} hour</h2>
                                <h2 v-else>0 hour</h2>
                                <h6>DAILY AVERAGE</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="container-fluid dsb d-flex align-items-center">
                            <div class="card box  d-flex justify-content-center align-items-center">
                                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#898989" width="90">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path fill="#898989"
                                            d="M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <h4>Sleep</h4>
                                <h2 v-if="((sumsh + (sumsm / 60)) / numsh.length).toFixed(2) != 'NaN'">{{ ((sumsh + (sumsm /
                                    60)) / numsh.length).toFixed(2) }} hour</h2>
                                <h2 v-else>0 hour</h2>
                                <h6>DAILY AVERAGE</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="container mt-4">
            <div class="row border border-secondary border-3 bgtable" style="font-size:25px;">

                <div class="col  d-flex justify-content-center">Calories</div>
                <div class="col  d-flex justify-content-center">exercise</div>
                <div class="col  d-flex justify-content-center">sleep</div>
                <div class="col  d-flex justify-content-center">ปี-เดือน-วัน</div>
            </div>
            <div v-for="(itemdate) in q" :key="itemdate" style="font-size: 18px;">
                <div class="row border border-secondary">
                    <div class="col">
                        <div v-for="(valuesc, key) in showc" :key="key">
                            <div v-if="itemdate == valuesc.Date">
                                <div v-if="valuesc.ID == userid"
                                    class="bgtable border border-white d-flex justify-content-center m-2"
                                    style="border-radius: 25px;">{{ valuesc.food + " : " + valuesc.Calorie + " Kcal" }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div v-for="(valuese, key) in showe" :key="key">
                            <div v-if="itemdate == valuese.Date">
                                <div v-if="valuese.ID == userid"
                                    class="bgtable border border-white d-flex justify-content-center m-2"
                                    style="border-radius: 25px;">{{ valuese.ehour + " : " + valuese.eminute }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div v-for="(valuess, key) in shows" :key="key">
                            <div v-if="itemdate == valuess.Date">
                                <div v-if="valuess.ID == userid"
                                    class="bgtable border border-white d-flex justify-content-center m-2"
                                    style="border-radius: 25px;">{{ valuess.shour + " : " + valuess.sminute }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div v-for="(IdDate, key) in dataID" :key="key">
                            <div v-if="itemdate == IdDate.Date">
                                <div v-if="IdDate.ID == userid"
                                    class="bgtable border border-white d-flex justify-content-center m-2"
                                    style="border-radius: 25px;">{{ IdDate.Date }}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.dsb {
    height: 200px;
    background-color: #1E1E1E;
    border-radius: 20px;
    margin-top: 20px;
}

.bgtable {
    background-color: #1E1E1E;

}

.box {
    background-color: #121212;
    width: 100px;
    height: 100px;
    border-radius: 40px;
    margin-right: 20px;
}

h6 {
    font-size: smaller;
    color: #6B6B6B;
}

.chart-pie svg {
    transform: scale(0.5);
}

@media screen and (max-width: 500px) {
    .dsb {
        height: 120px;
        border-radius: 20px;
        margin-top: 20px;
        padding-left: 30px;
    }

    .box {
        background-color: #121212;
        width: 60px;
        height: 60px;
        border-radius: 20px;
        margin-right: 10px;
    }

    h4 {
        font-size: 20px;
    }

    h2 {
        font-size: 30px;
    }

    h6 {
        font-size: 10px;
    }
}</style>