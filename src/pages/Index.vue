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
    <div class="post-list">
      <div v-for="(edge, index) in $page.allWorks.edges" :key="index">
        <h1 class="title" v-html="edge.node.title" />
        <g-image v-for="(image, i) in edge.node.images" :key="i" :src="image.image" />
      </div>
    </div>
    <Aboutme id="about" />
    <Works id="works" />
    <Contact id="contact" />
  </Layout>
</template>

<page-query>
query {
  allWorks {
    totalCount
    edges {
      node {
        title
        description
        stack {
          image
        }
        links {
          link
          image
        }
      }
    }
  }
}
</page-query>

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