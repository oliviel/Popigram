<template>
  <div class="container mt-5">
    <div class="row">

      <div class="col-md-6 col-xl-4 mb-5 mb-xl-0">
        <div class="card">
          <img src="https://i.pinimg.com/originals/99/b9/4a/99b94a97599ec1b1fe71558dc6cef21b.jpg" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-xl-4 mb-5 mb-xl-0">
        <div class="card">
          <img src="https://i.pinimg.com/originals/99/b9/4a/99b94a97599ec1b1fe71558dc6cef21b.jpg" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button class="btn btn-light btn-lg btn-block"><i class="fas fa-heart"></i></button>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-xl-4">
        <div class="card">
          <img src="https://i.pinimg.com/originals/99/b9/4a/99b94a97599ec1b1fe71558dc6cef21b.jpg" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {

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
    div.card {
      width: 35.8rem;
    }
  }

  

</style>
