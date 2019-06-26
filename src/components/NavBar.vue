<template>
  <v-toolbar>
    <v-btn :to="{ name: 'home' }" active-class flat large><v-toolbar-title>RE Cashflow Calculator</v-toolbar-title></v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
          v-for="item in menu"
          :key="item.link.name"
          :to="item.link"
          exact
          flat
        >{{ item.title }}</v-btn>
      
    </v-toolbar-items>
    <v-menu class="hidden-md-and-up">
      <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="item in menu" :key="item.link.name">
            <v-btn
              :to="item.link"
              exact
              flat
            >{{ item.title }}</v-btn>
          </v-list-tile>   
        </v-list>
    </v-menu>
  </v-toolbar>
</template>



<script>
export default {
  data: () => ({
    menu: [
      {
        link: { name: 'home' },
        title: 'Home'
      },
      {
        link: { name: 'calculate' },
        title: 'Calculate'
      },
    ]
  })
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav > .brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
</style>