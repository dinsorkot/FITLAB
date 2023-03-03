import { ref  } from 'vue'
import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { addDoc, collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase'
import { useRouter } from 'vue-router'



export const usePostStore = defineStore('PostStore', () => {
  const uid = ref()
  const username = ref()
  const posteds = ref([])
  var objPost = {}
  const auth = getAuth()
  const count = ref(false)
  const router = useRouter()
  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        uid.value = user.uid
        username.value = user.displayName
        console.log(uid.value)
        console.log(username.value)
      } else {
        // User is signed out
      }
    })
  }

  const createPost = async (post, tm, stm) => {
    try {
      await addDoc(collection(db, 'posts'), {
        id: uid.value,
        username: username.value,
        posted: post,
        time: tm,
        usetime: stm
      })
      count.value = true
      console.log('created')
    } catch (e) {
      console.error('Error adding document: ', e)
    }
    getPosted()
  }

  const postsCollection = collection(db, 'posts')


  const getPosted = () => {
    console.log(count)
    if (count.value == true) {
      posteds.value = []
      router.go(0)
    }
    const q = query(postsCollection, orderBy('usetime', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const doc = change.doc
          objPost = {
            uid: doc.id,
            time: doc.data().time,
            post: doc.data().posted,
            username: doc.data().username
          }
          posteds.value.push(objPost)
        }
      })
    })
    console.log('getPosted')
  }

  return { getUser, createPost, getPosted, posteds }
})
