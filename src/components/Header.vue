<template>
  <div class="header-box">
    <div class="top-logo-box"><img src="../assets/Netflix-logo.png" alt=""></div>
  </div>
</template>

<script>

export default {
    name: 'Header'
}
</script>

<style lang="scss">
    .header-box {
        height: 10vh;
        background: #1B1B1B;
        display: flex;
        align-items: center;
    }

    .top-logo-box img {
        width: 30%;
    }
</style>
