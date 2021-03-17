<template>
  <div>
    <h1 class="main-top"><img src="../assets/controll.svg" /></h1>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand>TBNG</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="e => this.$router.push({ path: '/' })"
            >Home</b-nav-item
          >
          <b-nav-item @click="e => this.$router.push({ path: '/members' })"
            >Members</b-nav-item
          >
          <b-nav-item @click="e => this.$router.push({ path: '/achievements' })"
            >Team rank
          </b-nav-item>
          <b-nav-item @click="e => this.$router.push({ path: '/about' })"
            >About</b-nav-item
          >
          <b-nav-item @click="e => this.$router.push({ path: '/join' })">
            Become a member</b-nav-item
          >
          <b-nav-item @click="e => this.$router.push({ path: '/Vip' })">
            VIP💎
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="https://google.com"
              >Sign Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.insta {
  font-size: 0;
}

a {
  cursor: pointer;
}
.main-top {
  display: none;
}

@media (max-width: 998px) {
  .main-top {
    display: block;
  }
}
</style>
