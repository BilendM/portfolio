// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/styles.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'preload stylesheet',
    as: 'style',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700;900&display=swap'
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  if (process.isClient) {
    AOS.init({
      easing: 'ease-out-back'
    })
  }
}
