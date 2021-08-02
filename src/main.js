// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/styles.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'
import config from '../gridsome.config'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'preload stylesheet',
    as: 'style',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700;900&display=swap'
  })
  head.meta.push(
    {
      key: 'keywords',
      name: 'keywords',
      content: 'HTML, CSS, Javascript, JS, Vue, Vuejs, Front-end, Front-end, Back end, Back-end, Iraq, Sulaymaniyah, Web, Developer, Web Developer'
    },
    {
      name: 'author',
      content: config.author
    },
    {
      key: 'description',
      name: 'description',
      content: config.siteDescription
    },

    { name: 'copyright', content: 'Bilend Mohammed. All rights reserved.' },
    { key: "og:type", property: "og:type", content: 'article' },
    { key: "og:description", property: "og:description", content: config.siteDescription },
    { key: "og:image", property: "og:image", content: 'https://bilendm.com/assets/images/science.png' },
    { property: "og:site_name", content: config.siteName }
  )
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  if (process.isClient) {
    AOS.init({
      easing: 'ease-out-back'
    })
  }
}
