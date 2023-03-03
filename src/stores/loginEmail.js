import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export const useLoginEmail = defineStore('Email', () => {
  const router = useRouter()

  const auth = getAuth()
  const signinEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        // ...
        console.log(user.email)
        router.push('main')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorMessage)
      })
  }

  return { signinEmail }
})
