import { ref } from 'vue'
import { defineStore } from 'pinia'
import { collection, getDocs,query} from "firebase/firestore";
import { db } from "../firebase";


export const Data = defineStore('showdata', () => {
  var showc = ref([]);
  var Caloriedata = {};
  var showe = ref([]);
  var ExerciseData = {};
  var shows=ref([]);
  var SleepData={};
  var Database=ref([]);
  const q=ref([]);
  const numc=ref([]);
  const sumc=ref([]);
  const numeh=ref([]);
  const sumeh=ref([]);
  const numem=ref([]);
  const sumem=ref([]);
  const numsh=ref([]);
  const sumsh=ref([]);
  const numsm=ref([]);
  const sumsm=ref([]);


    


  const Calorie = async () => {
    showc.value = [];
    Database.value = [];
    q.value = [];
    numc.value=[];
    sumc.value=[];
    const querySnapshot = await getDocs(query(collection(db, 'Calorie')))
    querySnapshot.forEach(async (doc) => {
      Caloriedata = {
        food : doc.data().foodname,
        Calorie: doc.data().numcalorie,
        Date : doc.data().date
      }
      
      showc.value.push(Caloriedata)
    
     Database.value.push(doc.data().date)
     numc.value.push(doc.data().numcalorie)
     sumc.value = numc.value.reduce((sum, n) => sum + n, 0);
       q.value = Database.value.filter((item, index) => {
        return Database.value.indexOf(item) === index;
      });
      console.log(q);
      console.log(numc);
    })
  }



    const Exercise = async () => {
     showe.value = [];
     Database.value = [];
     q.value=[];
     numeh.value=[];
     sumeh.value=[];
     numem.value=[];
     sumem.value=[];
     
      const querySnapshot = await getDocs(query(collection(db, 'Exercise')))
      querySnapshot.forEach((doc) => {
        ExerciseData = {
          ehour: doc.data().hour,
          eminute: doc.data().minute,
          Date:doc.data().date
        }
        showe.value.push(ExerciseData)
        Database.value.push(ExerciseData.Date)
        console.log(ExerciseData)

        numeh.value.push(doc.data().hour)
        sumeh.value = numeh.value.reduce((sumeh, n) => sumeh + n, 0);
        numem.value.push(doc.data().minute)
        sumem.value = numem.value.reduce((sumem, n1) => sumem + n1, 0);

        q.value = Database.value.filter((item, index) => {
          return Database.value.indexOf(item) === index;
        });
        console.log(q);
      })
  
    }

    
    const Sleep = async () => {
      shows.value = [];
      Database.value = [];
      q.value=[];
      numsh.value=[];
     sumsh.value=[];
     numsm.value=[];
     sumsm.value=[];
      const querySnapshot = await getDocs(query(collection(db, 'Sleep')))
      querySnapshot.forEach((doc) => {
        SleepData = {
          shour: doc.data().hour,
          sminute:doc.data().minute,
          Date: doc.data().date
        }
        shows.value.push(SleepData)
        Database.value.push(SleepData.Date)
        numsh.value.push(doc.data().hour)
        numsm.value.push(doc.data().minute)
        sumsh.value = numsh.value.reduce((sumsh, n) => sumsh + n, 0);
        sumsm.value = numsm.value.reduce((sumsm, n1) => sumsm + n1, 0);
        q.value = Database.value.filter((item, index) => {
          return Database.value.indexOf(item) === index;
        });
        console.log(q)
        
      })
    }
    
    
  return {Calorie, Exercise,Sleep,showe,showc,shows, Database,q,sumc,sumeh,sumem,sumsh,sumsm}
})

