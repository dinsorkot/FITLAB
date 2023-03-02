<script setup>
import Calories from './form_input/Calories.vue';
import Exercise from './form_input/Exercise.vue';
import Sleep from './form_input/Sleep.vue';
import { ref } from 'vue'

const views = [
    { id: 'calories', icon: 'bi-food', component: Calories },
    { id: 'exercise', icon: 'bi-basketball', component: Exercise },
    { id: 'sleep', icon: 'bi-moon', component: Sleep }
]

const selectedView = ref(views[0])

const selectView = (view) => {
    selectedView.value = view
}

</script>

<template>
    <div class="text-light form-view mb-5 pb-5">
        <div>
            รายการบันทึก
        </div>
        <div class="d-flex justify-content-center gap-2 mt-2 mb-3">
            <button v-for="view in views" :key="view.id" class="btn btn-outline-primary" @click="selectView(view)"
                :class="{ active: view === selectedView }">
                <i :class="view.icon"></i> Add {{ view.id }}
            </button>
        </div>
        <transition name="fade">
            <component :is="selectedView.component" />
        </transition>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

@media screen and (max-width: 500px) {
    .form-view {
        margin-left: 10px;
    }
}

.active {
    background-color: #6c757d;
    color: white;
}
</style>
