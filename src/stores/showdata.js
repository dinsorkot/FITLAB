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

  const Calorie = async () => {
    showc.value = [];
    Database.value = [];
    q.value = [];
    const querySnapshot = await getDocs(query(collection(db, 'Calorie')))
    querySnapshot.forEach(async (doc) => {
      Caloriedata = {
        Calorie: doc.data().numcalorie,
        Date : doc.data().date
      }
      showc.value.push(Caloriedata)
     Database.value.push(doc.data().date)


       q.value = Database.value.filter((item, index) => {
        return Database.value.indexOf(item) === index;
      });
      console.log(q);
      console.log(Caloriedata);
    })
  }


    const Exercise = async () => {
     showe.value = [];
     Database.value = [];
     q.value=[];
     
      const querySnapshot = await getDocs(query(collection(db, 'Exercise')))
      querySnapshot.forEach((doc) => {
        ExerciseData = {
          ehour: doc.data().hour,
          Date:doc.data().date
        }
        showe.value.push(ExerciseData)
        Database.value.push(ExerciseData.Date)

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
      const querySnapshot = await getDocs(query(collection(db, 'Sleep')))
      querySnapshot.forEach((doc) => {
        SleepData = {
          shour: doc.data().hour,
          Date: doc.data().date
        }
        shows.value.push(SleepData)
        Database.value.push(SleepData.Date)
        q.value = Database.value.filter((item, index) => {
          return Database.value.indexOf(item) === index;
        });
        console.log(q)
        
      })
    }
    
    
  return {Calorie, Exercise,Sleep,showe,showc,shows, Database,q}
})

