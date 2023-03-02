import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const usepostStore = defineStore('counter', () => {
  const auth = getAuth()
  const getuser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid
        // ...
        console.log(uid);
      } else {
        // User is signed out
        // ...
      }
    })
  }

  return { getuser }
})
