<template>
  <Layout>
    <div id="/" class="hero flex">
      <div class="hero-image"></div>
      <div class="container">
        <div class="hero-text">
          <p>Hello, I'm</p>
          <h1 data-aos="fade-down">Bilend Mohammed</h1>
        </div>
      </div>
    </div>
    <Aboutme id="about" />
    <Works id="works" />
    <Contact id="contact" />
  </Layout>
</template>

<script>
import Aboutme from "~/components/Aboutme.vue";
import Works from "~/components/Works.vue";
import Contact from "~/components/Contact.vue";
export default {
  metaInfo: {
    title: "Home",
  },
  components: {
    Aboutme,
    Works,
    Contact,
  },
};
</script>