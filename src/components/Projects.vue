<template>
  <div>
    <div class="flex">
      <h1>Projects</h1>
    </div>
    <div class="projects flex">
      <div
        v-for="(project, index) in $static.allProjects.edges"
        :key="index"
        data-aos="fade-up"
        :data-aos-delay="index * 50"
        class="card flex flex-column"
      >
        <div class="name flex">
          <h2 class="">{{ project.node.title }}</h2>
          <div v-if="project.node.links.length > 0" class="links flex">
            <g-link
              v-for="(link, l) in project.node.links"
              :key="l"
              :to="link.link"
            >
              <g-image :src="link.image" />
            </g-link>
          </div>
        </div>
        <p class="desc flex">
          {{ project.node.description }}
        </p>
        <p class="tech flex">
          <span v-for="(stack, s) in project.node.stack" :key="s"
            >{{ stack.name }}
            <div v-if="s < project.node.stack.length - 1" class="dot"></div>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  allProjects (sortBy: "id", order: ASC){
    totalCount
    edges {
      node {
        id
        title
        description
        stack {
          name
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
export default {
  name: "works",
};
</script>
