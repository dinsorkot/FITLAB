import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged, reauthenticateWithRedirect } from 'firebase/auth'
import { collection, onSnapshot, query, orderBy, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'

export const useProfileStore = defineStore('Profile', () => {
  const auth = getAuth()
  const uid = ref(null)
  const username = ref(null)
  const infoUser = ref({})
  const getUserG = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        uid.value = user.uid
        username.value = user.displayName
        console.log('User ID:', uid.value)
        console.log('Username:', username.value)
      } else {
        console.log('User is signed out')
      }
    })
  }
  const getUserE = () => {
    const collec = collection(db, 'users')
    onSnapshot(collec, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id == uid.value) {
          username.value = doc.data().username
          console.log(username.value)
          infoUser.value = {
            username: doc.data().username,
            age: doc.data().age,
            sex: doc.data().sex,
            weight: doc.data().weight,
            height: doc.data().height
          }
          console.log(infoUser.value);
        }
      })
    })
  }
  const deletePost = async (postId) => {
    try {
      await deleteDoc(doc(db, 'posts', postId))
      console.log('Post deleted successfully')
      count.value = true
      getPosted()
    } catch (error) {
      console.error('Error deleting document:', error)
    }
  }

  const getPosted = () => {
    if (count.value) {
      posteds.value = []
      router.go(0)
    }
    const q = query(collection(db, 'posts'), orderBy('usetime', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const doc = change.doc
          const post = {
            uid: doc.id,
            id: doc.data().id,
            time: doc.data().time,
            post: doc.data().posted,
            username: doc.data().username
          }
          posteds.value.push(post)
        }
      })
    })
  }

  const getInfoUser = () => {
    return infoUser.value
  }

  return { getUserG, getUserE, getInfoUser }
})
