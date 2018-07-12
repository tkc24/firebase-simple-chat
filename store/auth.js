import { firebaseMutations, firebaseAction } from 'vuexfire'
import firebase from '~/plugins/firebase'
import 'firebase/firestore'
const db = firebase.database()

const auth = firebase.auth()

export const state = () => ({
  user: null
})

export const getters = {
  currentUser (state) {
    return state.user
  },
  isAuthenticated (state) {
    return !!state.user
  }
}

export const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

export const actions = {
  // サインイン処理
  async signIn ({dispatch, commit}, data) {
    try {
      await auth.signInWithEmailAndPassword(data['email'], data['password'])
      .then((user) => {
        // ログイン成功
        commit('setUser', user)
        dispatch('setUser', user)
      })
      .catch((error) => {
        // エラー処理
 
      })
    } catch (error) {
      console.log('reject[error]:' + error);
    }
  },
  // サインアウト処理
  signOut({dispatch, commit}) {
    try {
      // サインアウト処理
      auth.signOut()
      .then(() => {
        commit('setUser', null)
      })
      .catch((error) => {
        // エラー処理
      })
      // No user is signed in.
      dispatch('setLoginStateInitialize')
    } catch (error) {
      console.log('reject[error]:' + error);
    }
  },
  setUser: firebaseAction(({ bindFirebaseRef }) => {
    commit('setUser', state.members[0])
  }),
}
