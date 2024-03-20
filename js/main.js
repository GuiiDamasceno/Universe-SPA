import { Router } from "./router.js"

const router = new Router()
router.add("/", "p06-Universe/pages/home.html")
router.add('/universe', 'p06-Universe/pages/universe.html')
router.add('/explore', 'p06-Universe/pages/explore.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()