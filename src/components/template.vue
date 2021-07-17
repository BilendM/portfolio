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
              Worked on <span>Booking Advisors</span>. An online flight and
              hotel booking platform. Utilized Quasar Framework, payment
              gateways, and external APIs to create a fully functioning platform
              where users can search for flights and hotels and book them.
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
