<template>
  <div>
    <nav
      aria-label="Desktop navigation bar"
      class="nav desktop"
      :class="{ 'nav-hidden': !showNavbar }"
    >
      <div class="logo">
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </div>
      <ul class="nav-links">
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
        <li>
          <a class="resume" href="contact">Resume</a>
        </li>
      </ul>
    </nav>
    <nav
      aria-label="Mobile navigation bar"
      class="nav mobile"
      :class="{ 'nav-hidden': !showNavbar }"
    >
      <div class="logo">
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </div>
      <ul class="nav-links">
        <li>
          <a class="resume" href="contact">Resume</a>
        </li>
      </ul>
      <div class="bottom-nav-links">
        <ul class="nav-links">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
    <slot />
    <footer>Built by Bilend Mohammed</footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 2) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>