<template>
  <section class="section works">
    <div class="container">
      <div class="flex">
        <h1>Works</h1>
      </div>
      <div class="freelancing-works flex flex-column">
        <div
          v-for="(work, index) in $static.allWorks.edges"
          :key="index"
          class="card flex"
        >
          <div class="left flex flex-column">
            <div class="content">
              <a :href="work.node.links[0].link">
                <div class="content-overlay"></div>
                <g-image class="content-image" :src="work.node.website_image" />
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title">{{ work.node.title }}</h3>
                </div>
              </a>
            </div>
          </div>
          <div class="right flex flex-column">
            <p>{{ work.node.description }}</p>
            <div class="stack flex">
              <g-image
                v-for="(stack, i) in work.node.stack"
                :key="i"
                :src="stack.image"
              />
              <div class="links flex">
                <g-link
                  v-for="(link, l) in work.node.links"
                  :key="l"
                  :to="link.link"
                >
                  <g-image :src="link.image" />
                </g-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Projects />
    </div>
  </section>
</template>

<static-query>
query {
  allWorks (sortBy: "id", order: ASC){
    totalCount
    edges {
      node {
        id
        title
        description
        website_image
        stack {
          image (width: 30, fit: contain, quality: 90)
        }
        links {
          link
          image (width: 30, fit: contain, quality: 90)
        }
      }
    }
  }
}
</static-query>

<script>
import Projects from "./Projects.vue";
export default {
  name: "works",
  data() {
    return {
      works: {},
    };
  },
  components: {
    Projects,
  },
};
</script>
