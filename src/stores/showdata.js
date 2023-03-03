import { ref } from 'vue'
import { defineStore } from 'pinia'
import { collection, getDocs,query } from "firebase/firestore";
import { db } from "../firebase";

export const Data = defineStore('showdata', () => {
  var showc = ref([]);
  var Caloriedata = {};

  /*const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }*/

  const Calorie = async () => {
    showc.value = [];
    const querySnapshot = await getDocs(query(collection(db, 'Calorie')))
    querySnapshot.forEach((doc) => {
      Caloriedata = {
        time: doc.data().time,
        Calorie: doc.data().numcalorie
      }
      showc.value.push(Caloriedata)
    })
    console.log(showc.value);
  }

  return { Calorie,showc }
})


