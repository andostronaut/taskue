import '@assets/main.css'
import 'vue-final-modal/style.css'

import { createApp } from 'vue'

// import pinia as state management
import { createPinia } from 'pinia'
// import create final modal for managing modal
import { createVfm } from 'vue-final-modal'

import App from '@/App.vue'
import router from '@/router'

// import the fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// import font awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import specific icons
import { faPlus, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

// import vue notification
import Notifications from '@kyvg/vue3-notification'

const app = createApp(App)

// add icons to the library
library.add(faPlus)
library.add(faCheck)
library.add(faXmark)

// use plugins
app.use(createPinia())
app.use(createVfm())
app.use(Notifications)
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
