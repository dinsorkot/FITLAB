import { ref } from 'vue'
import { defineStore } from 'pinia'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const Data = defineStore('showdata', () => {
  var showc = ref([])
  var Caloriedata = {}
  var showe = ref([])
  var ExerciseData = {}
  var shows = ref([])
  var SleepData = {}
  var Database = ref([])
  const uid = ref()
  const username = ref()
  const q = ref([])
  const auth = getAuth()
  const numc = ref([])
  const sumc = ref([])
  const numeh = ref([])
  const sumeh = ref([])
  const numem = ref([])
  const sumem = ref([])
  const numsh = ref([])
  const sumsh = ref([])
  const numsm = ref([])
  const sumsm = ref([])
  const ID = ref([])
  const dataID = ref([])

  const getuser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        uid.value = user.uid
        username.value = user.displayName
        // ...
        console.log(uid.value)
        console.log(username.value)
      } else {
        // User is signed out
        // ...
      }
    })
  }

  const User = () => {
    return uid.value
  }

  const Calorie = async () => {
    showc.value = []
    Database.value = []
    q.value = []
    numc.value = []
    sumc.value = []
    ID.value = []
    dataID.value = []
    const querySnapshot = await getDocs(query(collection(db, 'Calorie')))
    querySnapshot.forEach(async (doc) => {
      Caloriedata = {
        food: doc.data().foodname,
        Calorie: doc.data().numcalorie,
        Date: doc.data().date,
        ID: doc.data().id
      }

      showc.value.push(Caloriedata)
      ID.value.push(Caloriedata)
      Database.value.push(doc.data().date)
      if (uid.value == Caloriedata.ID) {
        numc.value.push(doc.data().numcalorie)
        sumc.value = numc.value.reduce((sum, n) => sum + n, 0)
      }
      q.value = Database.value.filter((item, index) => {
        return Database.value.indexOf(item) === index
      })
      dataID.value = ID.value.filter(
        (item, index, self) => index === self.findIndex((t) => t.Date === item.Date)
      )

      console.log(q)
      console.log(numc)
      console.log(dataID)
    })
  }

  const Exercise = async () => {
    console.log('GetExercise')
    showe.value = []
    Database.value = []
    q.value = []
    numeh.value = []
    sumeh.value = []
    numem.value = []
    sumem.value = []
    ID.value = []
    dataID.value = []
    const querySnapshot = await getDocs(query(collection(db, 'Exercise')))
    querySnapshot.forEach((doc) => {
      ExerciseData = {
        ehour: doc.data().hour,
        eminute: doc.data().minute,
        Date: doc.data().date,
        ID: doc.data().id
      }
      showe.value.push(ExerciseData)
      Database.value.push(ExerciseData.Date)

      console.log(ExerciseData.value)
      ID.value.push(ExerciseData)
      if (uid.value == ExerciseData.ID) {
        numeh.value.push(doc.data().hour)
        sumeh.value = numeh.value.reduce((sumeh, n) => sumeh + n, 0)
        numem.value.push(doc.data().minute)
        sumem.value = numem.value.reduce((sumem, n1) => sumem + n1, 0)
      }
      q.value = Database.value.filter((item, index) => {
        return Database.value.indexOf(item) === index
      })
      dataID.value = ID.value.filter(
        (item, index, self) => index === self.findIndex((t) => t.Date === item.Date)
      )
      console.log(q.value)
    })
  }

  const Sleep = async () => {
    shows.value = []
    Database.value = []
    q.value = []
    numsh.value = []
    sumsh.value = []
    numsm.value = []
    sumsm.value = []
    ID.value = []
    dataID.value = []
    const querySnapshot = await getDocs(query(collection(db, 'Sleep')))
    querySnapshot.forEach((doc) => {
      SleepData = {
        shour: doc.data().hour,
        sminute: doc.data().minute,
        Date: doc.data().date,
        ID: doc.data().id
      }

      shows.value.push(SleepData)
      ID.value.push(SleepData)
      Database.value.push(SleepData.Date)
      if (uid.value == SleepData.ID) {
        numsh.value.push(doc.data().hour)
        numsm.value.push(doc.data().minute)
        sumsh.value = numsh.value.reduce((sumsh, n) => sumsh + n, 0)
        sumsm.value = numsm.value.reduce((sumsm, n1) => sumsm + n1, 0)
        console.log('nummmm', numsh)
        console.log('nummmm', numsm)
      }
      q.value = Database.value.filter((item, index) => {
        return Database.value.indexOf(item) === index
      })
      dataID.value = ID.value.filter(
        (item, index, self) => index === self.findIndex((t) => t.Date === item.Date)
      )

      console.log(dataID.value)
    })
  }

  return {
    User,
    getuser,
    Calorie,
    Exercise,
    Sleep,
    showe,
    showc,
    shows,
    Database,
    q,
    sumc,
    numc,
    sumeh,
    numeh,
    sumem,
    sumsh,
    numsh,
    sumsm,
    ID,
    dataID
  }
})
