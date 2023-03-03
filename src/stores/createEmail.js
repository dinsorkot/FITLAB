import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

export const useCreateUser = defineStore('counter', () => {
  const auth = getAuth()
  const createUser = (email, password, username, sex, age, weight, heigh) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        createUsername(user.uid, user.email, password, username, sex, age, weight, heigh)
        // ...
        console.log('created')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ..
        console.log(errorMessage);
      })
  }

  const createUsername = async (
    uid,
    emailed,
    passworded,
    usernamed,
    sexed,
    aged,
    weighted,
    heighed
  ) => {
    await setDoc(doc(db, 'users', uid), {
      email: emailed,
      password: passworded,
      username: usernamed,
      sex: sexed,
      age: aged,
      weight: weighted,
      heigh: heighed
    })
  }
  return { createUser }
})
