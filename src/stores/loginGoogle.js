import { defineStore } from 'pinia'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useRouter } from 'vue-router'

export const useLoginGoogle = defineStore('loginG', () => {
  const auth = getAuth()
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const signinGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        // IdP data available using getAdditionalUserInfo(result)
        // ..
        console.log(user.email);
        router.push('/main');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }

  return { signinGoogle }
})
