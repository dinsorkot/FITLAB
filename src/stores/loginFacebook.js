import { defineStore } from 'pinia'
import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth'
import { useRouter } from 'vue-router'

export const useLoginFacebook = defineStore('loginF', () => {
  const auth = getAuth()
  const router = useRouter();
  const provider = new FacebookAuthProvider()
  const signinFacebook = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result)
        const accessToken = credential.accessToken

        // IdP data available using getAdditionalUserInfo(result)
        // ...
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
        const credential = FacebookAuthProvider.credentialFromError(error)

        // ...
      })
  }

  return { signinFacebook }
})
