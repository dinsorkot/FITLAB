import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { addDoc, collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase'

export const usepostStore = defineStore('counter', () => {
  const auth = getAuth()
  const uid = ref()
  const username = ref()
  var Posteds = ref([])
  var obj_post = {}
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
  const createpost = async (post, tm) => {
    try {
      await addDoc(collection(db, 'posts'), {
        id: uid.value,
        username: username.value,
        posted: post,
        time: tm
      })
      console.log('created')
    } catch (e) {
      console.error('Error adding docment: ', e)
    }
    getpost()
  }
  const getpost = async () => {
    Posteds.value = []
    const querySnapshot = await getDocs(query(collection(db, 'posts'), orderBy('time', 'desc')))
    querySnapshot.forEach((doc) => {
      obj_post = {
        uid: doc.id,
        time: doc.data().time,
        post: doc.data().posted,
        username: doc.data().username
      }
      Posteds.value.push(obj_post)
    })
    console.log(Posteds.value);
  }

  return { getuser, createpost, getpost, Posteds }
})
