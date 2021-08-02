<template>
  <Layout>
    <div id="/" class="hero flex">
      <div class="hero-image"></div>
      <div class="container">
        <div class="hero-text">
          <p>Hello, I'm</p>
          <h1 data-aos="fade-down">Bilend Mohammed</h1>
          <p class="small">And I'm a Front-end Web Developer</p>
        </div>
      </div>
    </div>
    <Aboutme id="about" />
    <Works style="overflow: hidden" id="works" />
    <Contact id="contact" />
  </Layout>
</template>

<script>
import Aboutme from "~/components/Aboutme.vue";
import Works from "~/components/Works.vue";
import Contact from "~/components/Contact.vue";
export default {
  components: {
    Aboutme,
    Works,
    Contact,
  },
};
</script>