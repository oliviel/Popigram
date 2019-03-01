<template>
  <div>
   <nav class="navbar navbar-expand-lg navbar-dark justify-content-between justify-content-xl-around py-3">
      <router-link :to="{ name: 'post-list' }" class="brand zero">
        <i class="fab fa-instagram fa-lg mr-1"></i><span> | </span><span class="m-2">Popigram</span> 
      </router-link>
      <div>
        <input class="border rounded d-none d-md-inline" type="search" placeholder="Search" aria-label="Search">
      </div>
      <ul class="nav">
        <li class="nav-item">
          <router-link to="" class="nav-link"><i class="fas fa-plus"></i></router-link>
        </li>
        <li class="nav-item">
          <router-link to="" class="nav-link"><i class="fas fa-heart"></i></router-link>
        </li>
        <li class="nav-item">
          <router-link to="" class="nav-link"><i class="far fa-user"></i></router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Lora');

  nav {
    background-color: #E1306C;
  }

  @media (min-width: 1000px) { 
    nav {
      justify-content: space-around;
    }
  }

  i {
    font-size: 2.3rem;
  }

  span {
    font-family: 'Lora', serif;
    font-size: 1.8rem;
  }

  i, span {
    color: white;
  }

  i.fab.fa-instagram {
    border-bottom: 0;
  }

  i + span {
    font-size: 2.5rem;
  }

  input[type="search"] {
    width: 21.5rem;
    height: 2.6rem;
    text-align: center;
    color: #999;
    font-size: 1.5rem;
    font-weight: 200;
    outline: none;
  }

  input[type="search"]:focus {
    text-align: left;
  }

  .zero {
    text-decoration: none;
  }
</style>



