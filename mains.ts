import {Server} from './server/server'
import {usersRouters} from './users/users.router'

const server = new Server()

server.bootstrap([usersRouters]).then(()=>{
    console.log("Server is listening on:", server.application.address())
}).catch((err)=>{
    console.log("Server Errros to start")
    console.log(err)
    process.exit(1)
})