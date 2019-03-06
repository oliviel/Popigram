<template>
  <section class="container d-flex justify-content-center">
    <div class="align-items-center">
      <div class="card mb-4">
        <div class="card-header">
          <i class="fas fa-user-circle"></i><strong class="ml-3 mt-2">Sofia Duran</strong>
        </div>
        <img src="https://i.pinimg.com/originals/99/b9/4a/99b94a97599ec1b1fe71558dc6cef21b.jpg" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <p class="card-text"><strong>Sofia Duran</strong> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div class="row">
            <div class="col-6">
              <button class="btn btn-light btn-lg btn-block"><i class="fas fa-heart"></i></button>
            </div>
            <div class="col-6">
              <button class="btn btn-light btn-lg btn-block"><i class="fas fa-comments"></i></button>
            </div>
          </div>
        </div>
      </div>
      <BaseCard/>
    </div>
    <div class="ml-5 block d-none d-md-block fixed-rigth">
      <i class="fas fa-user-circle"></i> <strong class="ml-3">Sofia Duran</strong>
    </div>
  </section>
</template>

<script>
  import BaseCard from '@/components/BaseCard.vue';

  export default {
    components: {
      BaseCard
    }
  };
</script>

<style scoped>
  @media (min-width: 576px) { 
    div.card {
      width: 20rem;
    }
  }

  /* // Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) { 
    div.card {
      width: 32rem;
    }
  }

  /* // Large devices (desktops, 992px and up) */
  @media (min-width: 992px) { 
    div.card {
      width: 45rem;
    }
  }

  /* // Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1300px) { 
    section.container {
      margin-top: 9rem !important;
    }
    
    div.card {
      width: 61.6rem;
    }

    /* .block {
      margin-right: 10rem;
    } */

    .block i {
      font-size: 5rem;
      position: relative;
    }

    .block strong {
      position: relative;
      bottom: 1.5rem; 
      font-size: 1.5rem;
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

  /* button:hover, button:focus {
    border-color: #E1306C;
    background-color: #fff;
    outline: 0;
  }

  button {
    border: 1px solid lightgray;
    background-color: #fff;
  } */

  i {
    color: #E1306C;
  }  

</style>
