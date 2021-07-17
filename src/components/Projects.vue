<template>
  <div>
    <div class="flex">
      <h1>Projects</h1>
    </div>
    <div class="projects flex">
      <div data-aos="fade-up" class="card flex flex-column">
        <div class="name flex">
          <h2 class="">Name of Website</h2>
          <g-link to="https://ahmedshaswar.com">
            <g-image
              width="30"
              src="~/assets/images/open_website.svg"
              fit="contain"
            />
          </g-link>
        </div>
        <p class="desc flex">
          description of the app that might be a few lines long and it will talk
          about the app itself sdokhfodns fsdh fsjdhf sjhf
        </p>
        <p class="tech flex">Technologies used for the app</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "works",
  data() {
    return {
      projects: [
        {
          name: "Babylon Holiday",
          description: "This is a description for the website",
          links: [{}],
        },
      ],
    };
  },
};
</script>
