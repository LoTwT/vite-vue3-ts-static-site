import { createRouter, createWebHistory } from "vue-router"
import routes from "pages-generated"

export default createRouter({
    history: createWebHistory("/"),
    routes
})