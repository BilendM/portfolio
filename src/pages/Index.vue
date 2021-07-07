<template>
  <Layout>
    <div class="hero flex">
      <div class="hero-image"></div>
      <div class="container">
        <div class="hero-text">
          <p>Hello, I'm</p>
          <h1>Bilend Mohammed</h1>
        </div>
      </div>
    </div>
    <Aboutme id="about" />
    <Works id="works" />
  </Layout>
</template>

<script>
import Aboutme from "~/components/Aboutme.vue";
import Works from "~/components/Works.vue";
export default {
  metaInfo: {
    title: "Home",
  },
  components: {
    Aboutme,
    Works,
  },
};
</script>