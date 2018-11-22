import {Server} from './server/server'
import {usersRouter} from './users/users.router'
import {restaurantsRouter} from './restaurants/restaurant.router'
import { reviewsRouter} from './reviews/reviews.router'

const server = new Server()

server.bootstrap([
    usersRouter, 
    restaurantsRouter,
    reviewsRouter
]).then(()=>{
    console.log("Server is listening on:", server.application.address())
}).catch((err)=>{
    console.log("Server Errros to start")
    console.log(err)
    process.exit(1)
})