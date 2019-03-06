<template>
  <button class="btn btn-light btn-lg btn-block"><slot></slot></button>
</template>

<script>
export default {

}
</script>

<style scoped>

  button:focus, button:active {
    border-color: #E1306C;
    background-color: #fff;
    outline: 0;
  }

  button:hover {
    border-color: #E1306C;
    background-color: #fff;
    outline: 0;
  }

  button {
    border: 1px solid lightgray;
    background-color: #fff;
  }

</style>
