import { firebaseMutations, firebaseAction } from 'vuexfire'
import firebase from '~/plugins/firebase'
import 'firebase/firestore'

export const strict = false

export const state = () => ({
})

export const getters = {
}

export const mutations = {
  ...firebaseMutations
}

export const actions = {
}
