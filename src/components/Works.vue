<template>
  <section class="section works">
    <div class="container">
      <div class="flex">
        <h1>Works</h1>
      </div>
      <div class="freelancing-works flex flex-column">
        <div class="card flex">
          <div class="left flex flex-column">
            <g-image src="~/assets/images/booking_advisors.png" />
          </div>
          <div class="right flex flex-column">
            <p class="description">
              Worked on <span>Booking Advisors</span>. A Moonline Travel and
              Trade product. An online flight and hotel booking platform.
              Utilized Quasar Framework, payment gateways, and external APIs to
              create a fully functioning platform where users can search for
              flights and hotels and book them.
            </p>
            <div class="stack flex">
              <g-image
                width="30 "
                src="~/assets/images/vue.svg"
                fit="contain"
              />
              <g-image
                src="~/assets/images/quasar_dark.svg"
                fit="contain"
                width="30"
              />
            </div>
            <div class="links flex">
              <g-link to="https://bookingadvisors.com">
                <g-image
                  width="30"
                  src="~/assets/images/open_website.svg"
                  fit="contain"
                />
              </g-link>
            </div>
          </div>
        </div>
        <div class="card flex">
          <div class="left flex flex-column">
            <g-image src="~/assets/images/ahmedShaswar.png" />
          </div>
          <div class="right flex flex-column">
            <p class="description">
              Created a website for <span>Ahmed Shaswar</span> company. This was
              my first go at creating a JAMstack website. I used Gridsome and
              Vuetify for the front-end and Prismic for the backend.
            </p>
            <div class="stack flex">
              <g-image
                width="30 "
                src="~/assets/images/gridsome.svg"
                fit="contain"
              />
              <g-image
                src="~/assets/images/vuetify.svg"
                fit="contain"
                width="30"
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
            </div>
          </div>
        </div>
        <div class="card flex">
          <div class="left flex flex-column">
            <g-image src="~/assets/images/medguide.png" />
          </div>
          <div class="right flex flex-column">
            <p class="description">
              Created <span>Med Guide</span>, an online course website for a
              client. I used various Wordpress plugins to create a fully
              functioning website in which users can create accounts, view
              courses, and purchase them. Also my first experience with AWS and
              trying out their services.
            </p>
            <div class="stack flex">
              <g-image
                src="~/assets/images/wordpress_white.svg"
                fit="contain"
                width="30"
              />
            </div>
            <div class="links flex">
              <g-link to="https://medguide.krd">
                <g-image
                  width="30"
                  src="~/assets/images/open_website.svg"
                  fit="contain"
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
