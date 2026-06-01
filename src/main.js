import { createApp, nextTick } from 'vue'
import App from './App.vue'
import './style.css'
import router from './Router/index.js'
import { locale, translateDOM } from './translation.js'

const app = createApp(App)
app.use(router)
app.mount('#app')

router.afterEach(() => {
  if (locale.value === 'ki') {
    nextTick(() => {
      translateDOM(document.body, 'ki')
    })
  }
})
