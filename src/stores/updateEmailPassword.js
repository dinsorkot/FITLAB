import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { getAuth, updateEmail, updatePassword ,deleteUser , signOut  } from 'firebase/auth'

export const useUpdateEP = defineStore('updateEP', () => {
  const auth = getAuth()
  const user = auth.currentUser;
  const router = useRouter();
  const updatedE = (newEmail) => {
    updateEmail(user, newEmail)
      .then(() => {
        // Email updated!
        console.log('Email updated!')
        alertify.success('Email updated!')
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      })
  }

  const updatedP = (newPassword) => {
    updatePassword(user, newPassword)
      .then(() => {
        // Update successful.
        console.log('Password successful.')
        alertify.success('Password updated!')
      })
      .catch((error) => {
        // An error ocurred
        // ...
      })
  }

  const DeleteUser = () => {
    deleteUser(user)
      .then(() => {
        // User deleted.
        alertify.error('User deleted.');
        setTimeout(()=>{
          router.push("/")
        },1500)
        
      })
      .catch((error) => {
        // An error ocurred
        // ...
      })
  }

  const signOuted = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        alertify.success('Sign-out successful.')
        setTimeout(()=> {
            router.push('/')
        },2000)
      }).catch((error) => {
        // An error happened.
      });
  }
  return { updatedE, updatedP ,DeleteUser,signOuted }
})
