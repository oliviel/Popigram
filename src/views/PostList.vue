<template>
  <section class="container d-flex justify-content-center">
    <div class="align-items-center">
      <div class="mb-4">
        <BaseCard/>    
      </div>
      <BaseCard/>
    </div>
    <div class="ml-5 block d-none d-lg-block fixed-rigth">
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
  @media (min-width: 320px) { 
    section.container {
      margin-top: 7rem !important;
    }
  }

  @media (min-width: 576px) { 
    section.container {
      margin-top: 7rem !important;
    }
  }

  /* // Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) { 
    section.container {
      margin-top: 9rem !important;
    }
  }

  /* // Large devices (desktops, 992px and up) */
  @media (min-width: 992px) { 
    section.container {
      margin-top: 9rem !important;
    }
  }

  /* // Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1300px) { 
    section.container {
      margin-top: 9rem !important;
    }

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

</style>
