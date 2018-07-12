<template lang="pug">
  v-content
    v-container(grid-list-xl fill-height)
      v-layout(row wrap justify-center align-center)
        v-flex(md6 sm12 xs12 left-side)
          LeftLogo
        v-flex(md6 sm12 xs12)
          v-card(flat mt-5)
            v-container(fluid grid-list-lg)
              v-layout(row)
                v-flex(xs12)
                  v-text-field(v-model="email" label="email")
              v-layout(row)
                v-flex(xs12)
                  v-text-field(v-model="password" label="password" type="password")
              v-layout(row)
                v-flex(xs12)
                  v-btn(outline color="indigo" @click="signin") sign in
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import LeftLogo from '~/components/LeftLogo'

export default {
  layout: 'none',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  components: {
    LeftLogo,
  },
  mounted () {
  },
  updated () {
  },
  computed: {
    ...mapGetters('auth',['isAuthenticated', 'currentUser']),
  },
  methods: {
    ...mapActions('auth', {authSignin: 'signIn', authSetUser: 'setUser'}),
    // サインイン処理
    signin: async function() {
      var data = {
        email: this.email,
        password: this.password
      }
      await this.authSignin(data)
      await this.gotoMessages()
    },
    gotoMessages: async function () {
      if (this.isAuthenticated) {
        await this.$router.push({ path: '/messages/' })
      }
    }
  }
};
</script>