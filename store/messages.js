import { firebaseMutations, firebaseAction } from 'vuexfire'
import firebase from '~/plugins/firebase'
import 'firebase/firestore'
const db = firebase.database()

const messagesRef = db.ref('messages')

export const state = () => ({
  messages: [],
})

export const getters = {
  messages: state => state.messages
}

export const mutations = {
  ...firebaseMutations
}

export const actions = {
  initMessages : firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('messages', messagesRef.orderByChild('time'))
  }),

  addMessageRef : firebaseAction((context, data) => {
    // order by desc できない
    messagesRef.push({uid: data.uid, text: data.text, time: 9999999999999 - Date.now()})
  })
}