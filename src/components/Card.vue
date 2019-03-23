<template>
   <div class="card">
    <div class="card-header">
      <i class="fas fa-user-circle"></i><strong class="ml-3 mt-2">Sofia Duran</strong>
    </div>
    <img src="https://i.pinimg.com/originals/99/b9/4a/99b94a97599ec1b1fe71558dc6cef21b.jpg" class="card-img-top img-fluid" alt="user post">
    <div class="card-body">
      <p class="card-text"><strong>Sofia Duran</strong> Some quick example text to build on the card title and make up the bulk of the card's content</p>
      <div class="row">
        <div class="col-6">
          <LikeButton  @likeWasIncremented="likes = $event" :postLikes="likes"></LikeButton>
        </div>
        <div class="col-6">
          <CommentButton :postComments="commnets"></CommentButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LikeButton from '@/components/LikeButton.vue';
  import CommentButton from '@/components/CommentButton.vue';

  export default {
     data() {
      return {
        likes: 0,
        commnets: 10,
      }
    },
    components: {
      LikeButton,
      CommentButton,
    },
  }
</script>

<style scoped>
  @media (min-width: 576px) { 
    div.card {
      width: 28rem;
    }
  }

  @media (min-width: 700px) { 
    div.card {
      width: 61rem;
    }
  }

  /* // Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) { 
    div.card {
      width: 61rem;
    }
  }

  /* // Large devices (desktops, 992px and up) */
  @media (min-width: 992px) { 
    div.card {
      width: 61.6rem;
    }
  }

  /* // Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1300px) { 
    div.card {
      width: 61.6rem;
    }
  }

  div.card {
    background-color: #fff;
  }

  div.card-header {
    font-size: 1.3rem;
  }

  div.card-header i {
    position: relative;
    font-size: 2.5rem;
  }

  div.card-header strong {
    position: absolute;
  }

  p.card-text {
    font-size: 1.3rem;
  }

</style>
