<template>
  <section class="info-section works">
    <div class="container">
      <div class="flex">
        <h1>Works</h1>
      </div>
      <div class="freelancing-works flex flex-column">
        <div class="card flex">
          <div class="left flex">
            <g-image src="~/assets/images/ahmedShaswar.png" width="500" />
          </div>
          <div class="right flex flex-column">
            <p class="description flex">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              veritatis quae et dicta eaque. Placeat, maxime. Maiores at maxime
              aspernatur doloremque voluptas atque temporibus id voluptates
              debitis. Nihil, distinctio ipsa.
            </p>
            <div class="stack flex">
              <g-image
                width="30 "
                src="~/assets/images/gridsome.svg"
                fit="contain"
              />
              <g-image
                src="~/assets/images/prismic.svg"
                fit="contain"
                width="30"
              />
            </div>
            <div class="links flex">
              <g-link to="https://ahmedshaswar.com">
                <g-image
                  width="30"
                  src="~/assets/images/open_website.svg"
                  fit="contain"
                />
              </g-link>
              <g-link to="https://github.com/BilendM/AhmedShaswar">
                <g-image
                  src="~/assets/images/github_outline.svg"
                  fit="contain"
                  width="30"
                />
              </g-link>
            </div>
          </div>
        </div>
        <div class="card flex">
          <div class="left flex">
            <g-image src="~/assets/images/ahmedShaswar.png" width="500" />
          </div>
          <div class="right flex flex-column">
            <p class="description flex">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              veritatis quae et dicta eaque. Placeat, maxime. Maiores at maxime
              aspernatur doloremque voluptas atque temporibus id voluptates
              debitis. Nihil, distinctio ipsa.
            </p>
            <div class="stack flex">
              <g-image
                width="30 "
                src="~/assets/images/gridsome.svg"
                fit="contain"
              />
              <g-image
                src="~/assets/images/prismic.svg"
                fit="contain"
                width="30"
              />
            </div>
            <div class="links flex">
              <g-link to="https://ahmedshaswar.com">
                <g-image
                  width="30"
                  src="~/assets/images/open_website.svg"
                  fit="contain"
                />
              </g-link>
              <g-link to="https://github.com/BilendM/AhmedShaswar">
                <g-image
                  src="~/assets/images/github_outline.svg"
                  fit="contain"
                  width="30"
                />
              </g-link>
            </div>
          </div>
        </div>
      </div>
      <Projects />
    </div>
  </section>
</template>

<script>
import Projects from "./Projects.vue";
export default {
  name: "works",
  components: {
    Projects,
  },
};
</script>
