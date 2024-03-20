export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)

        if(window.location.pathname == "/explore") {
            document.body.style.backgroundImage = "url(/p06-Universe/assets/mountains-universe-2.jpg)"
        } else if(window.location.pathname == "/universe") {
            document.body.style.backgroundImage = "url(/p06-Universe/assets/mountains-universe-3.jpg)"
        } else {
            document.body.style.backgroundImage = "url(/p06-Universe/assets/mountains-universe-1.jpg)"
        }
    
        this.handle()
    }
    
    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname]
    
        fetch(route)
        .then(data => data.text())
        .then(html => { 
            document.querySelector('.content').innerHTML = html
        })
    }  
}