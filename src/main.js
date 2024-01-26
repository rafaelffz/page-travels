import './index.css'
import { createI18n } from 'vue-i18n'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// i18n
import { pt_BR } from './locales/pt_BR.js'
import { en } from './locales/en.js'

const languages = {
  pt_BR,
  en
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'pt_BR',
  messages: languages,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
