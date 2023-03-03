import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const useProfileStore = defineStore('Profile', () => {
  const auth = getAuth()
  const uid = ref();
  const username = ref();
  const obj_user = ref({})
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

  return { getuser , username }
})
