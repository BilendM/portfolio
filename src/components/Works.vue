<template>
  <section class="section works">
    <div class="container">
      <div class="flex">
        <h2>Projects</h2>
      </div>
      <div class="freelancing-works flex flex-column">
        <div
          v-for="(work, index) in $static.allWorks.edges"
          :key="index"
          class="card flex"
        >
          <div class="left flex flex-column">
            <a
              target="_blank"
              rel="noopener"
              :href="work.node.links[0].link"
              class="image"
            >
              <g-image
                class="image__img"
                :src="work.node.website_image"
                :alt="'Screenshot of ' + work.node.title + ' website'"
              />
              <div class="image__overlay image__overlay--primary">
                <h3 class="image__title">{{ work.node.title }}</h3>
              </div>
            </a>
          </div>
          <div class="right flex flex-column">
            <p>{{ work.node.description }}</p>
            <div class="stack flex">
              <g-image
                class="stack-image"
                v-for="(stack, i) in work.node.stack"
                :key="i"
                :src="stack.image"
                alt="Stack Logo"
              />
              <div class="links flex">
                <g-link
                  v-for="(link, l) in work.node.links"
                  :key="l"
                  :to="link.link"
                >
                  <g-image :src="link.image" :alt="'Open ' + link.link" />
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
  components: {
    Projects,
  },
};
</script>
