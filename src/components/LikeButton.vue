<template>
  <button class="btn btn-light btn-lg btn-block" @click="incremementLike">
    <i class="fas fa-heart"></i> {{ likes }}
  </button>
</template>

<script>
export default {
  props: {
    postLikes: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      likes: this.postLikes,
    }
  },
  methods: {
    incremementLike() {
      this.likes++
      this.$emit('likeWasIncremented', this.likes);
    }
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

  i {
    color: #E1306C;
  }  

</style>
