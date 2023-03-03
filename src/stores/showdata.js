import { ref } from 'vue'
import { defineStore } from 'pinia'
import { collection, getDocs,query } from "firebase/firestore";
import { db } from "../firebase";
import { doc,increment,setDoc} from "firebase/firestore"; 
export const Data = defineStore('showdata', () => {
  var showc = ref([]);
  var Caloriedata = {};
  var showe = ref([]);
  var ExerciseData = {};
  var shows=ref([]);
  var SleepData={};
  var sum=ref([])

 


   /*const groupedData = async () => {
      return this.showe.reduce((result, items) => {
        const date = items.date;
        if (!result[showe.date]) {
          result[date] = [];
        }
        result[date].push(items);
        return result;
        
      },{});}*/

  
  /*const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }*/
  const Update = async (num,date) => {
    const checkRef = doc(db, "Sum", date);
    if(date==date){
    await setDoc(checkRef, {
      Date: date,
      Sum: increment(num)
      
  });
}
    
    // To update age and favorite color
    
}

  const Calorie = async () => {
    sum.value=[];
    showc.value = [];
    const querySnapshot = await getDocs(query(collection(db, 'Calorie')))
    querySnapshot.forEach((doc) => {
      Caloriedata = {
        Calorie: doc.data().numcalorie,
        Date : doc.data().date
      }
      Update(Caloriedata.Caloriedata,Caloriedata.date)
      console.log(Caloriedata)
      showc.value.push(Caloriedata)
    })
  }

/*const sumCal = async ()=>{
  const querySnapshot = await getDocs(query(collection(db, "Calorie").groupBy("date").get()));
querySnapshot.forEach((doc) => {
  Caloriedata = {
    Calorie: doc.data().numcalorie,
  }
  this.sum+=Caloriedata.Calorie
  showc.value.push(sum)
  console.log(doc.id, " => ", doc.data());
});
}*/

    const Exercise = async () => {
      showe.value = [];
      const querySnapshot = await getDocs(query(collection(db, 'Exercise')))
      querySnapshot.forEach((doc) => {
        ExerciseData = {
          ehour: doc.data().hour
        }
        showe.value.push(ExerciseData)
      })
  
    }

    
    const Sleep = async () => {
      shows.value = [];
      const querySnapshot = await getDocs(query(collection(db, 'Sleep')))
      querySnapshot.forEach((doc) => {
        SleepData = {
          shour: doc.data().hour
        }
        shows.value.push(SleepData)
      })
    }
   
    console.log(sum);
  return {Calorie, Exercise,Sleep,showe,showc,shows}
})

