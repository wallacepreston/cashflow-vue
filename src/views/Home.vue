<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/re-cashflow-logo.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to RE Cashflow
        </h1>
        
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>
        <v-layout justify-center>
          <v-btn color="primary"
            v-for="(option, i) in homeOptions"
            :key="i"
            :to="option.url"
            class="subheading mx-3"
          >
            {{ option.text }}
          </v-btn>
        </v-layout>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      homeOptions: [
        {
          text: 'Home',
          url: '/'
        },
        {
          text: 'Calculate',
          url: '/calculate'
        },
        {
          text: 'About',
          url: '/about'
        }
      ],
    })
  }
</script>

<style>

</style>
