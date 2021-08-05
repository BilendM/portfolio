<template>
  <section class="section no-padding-top contact">
    <div class="container">
      <div class="flex">
        <h1>Get in Touch</h1>
      </div>
      <div class="contact flex">
        <div class="left flex flex-column">
          <div class="contact-information flex flex-column">
            <h3>
              <g-image
                width="16"
                src="~/assets/images/email.svg"
                fit="contain"
                alt="Email Icon"
              />
              bilendmohammed@gmail.com
            </h3>
            <h3>
              <g-image
                width="16"
                src="~/assets/images/phone.svg"
                fit="contain"
                alt="Phone Icon"
              />+964 773 555 9696
            </h3>
            <h3>
              <g-image
                width="16"
                src="~/assets/images/marker.svg"
                fit="contain"
                alt="Location Marker Icon"
              />Sulaymaniyah, Iraq
            </h3>
          </div>
          <div class="flex socials">
            <g-link to="https://www.linkedin.com/in/bilendmohammed/">
              <g-image
                width="30"
                src="~/assets/images/linkedin.svg"
                fit="contain"
                alt="Linkedin Logo"
              />
            </g-link>
            <g-link to="https://github.com/BilendM">
              <g-image
                width="30"
                src="~/assets/images/github_outline.svg"
                fit="contain"
                alt="Github Logo"
              />
            </g-link>
          </div>
        </div>
        <div class="right flex flex-column contact-form">
          <form
            name="contact"
            method="POST"
            @submit.prevent="submitForm"
            id="contact-form"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div class="flex flex-column name">
              <p hidden>
                <label> Don’t fill this out: <input name="bot-field" /> </label>
              </p>
              <label for="name">Your Name</label>
              <input
                required
                v-model="formData.name"
                id="name"
                type="text"
                name="name"
                placeholder="Faraj Galali"
              />
            </div>
            <div class="flex flex-column email">
              <label for="email">Your Email</label>
              <input
                required
                v-model="formData.email"
                id="email"
                type="email"
                name="email"
                placeholder="youremail@domain.com"
              />
            </div>
            <div class="flex flex-column message">
              <label for="message">Message</label>
              <textarea
                required
                v-model="formData.message"
                rows="6"
                id="message"
                name="message"
                placeholder="Hi, let's work together!"
              ></textarea>
            </div>
            <div class="flex submit">
              <button type="submit">{{ sendMessage }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      sendMessage: "Send Message",
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    submitForm(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData,
        }),
      })
        .then(() => {
          this.sendMessage = "Message Sent!";
          this.formData.name = "";
          this.formData.email = "";
          this.formData.message = "";
        })
        .catch((error) => {
          console.log(error);
          this.sendMessage = "Not Sent :(";
        });
    },
  },
};
</script>
