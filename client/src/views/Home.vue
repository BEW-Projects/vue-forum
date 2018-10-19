<template>
  <div class="home">
      <div class="jumbotron">
        <h1 class="display-3">Welcome to Community!</h1>
        <p class="lead">A fully open source forum. Made with 💙 by Edwin Cloud.</p>
        <hr class="my-4">
        <p>This forum is all about community. Be kind! Be helpful! 🌈</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" :href="getLoginUrl" role="button">Login with Google</a>
        </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
      getLoginUrl() {
        if(window.location.hostname === 'localhost') {
            return 'http://localhost:3000/auth/google';
        } else {
            return 'https://community-ec-api.now.sh/auth/google';
        }
      }
  }
};
</script>
