<template>
  <button class="btn btn-light btn-lg btn-block" @click="incremementLike">
    <i class="fas fa-comments" slot="text"></i> {{ postComments }}
  </button>
</template>

<script>
export default {
  props: {
    postComments: {
      type: Number,
      required: true,
    },
  },
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

  p.card-text {
    font-size: 1.3rem;
  }

  i {
    color: #E1306C;
  }  

</style>
