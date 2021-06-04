// import { createApp } from 'vue'
// import App from './App.vue'
// import router from "@/router"

// createApp(App).use(router).mount('#app')

import App from "./App.vue"
import routes from "pages-generated"
import { ViteSSG } from "vite-ssg"

export const createApp = ViteSSG(App, { routes })
