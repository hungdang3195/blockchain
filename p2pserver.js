const Websocket = require('ws')

const P2P_PORT = process.env.P2P_PORT || 5001
const peers = process.env.PEERS ?  process.env.PEERS.split(',') : []

class P2pServer{
    constructor(blockChain){
        this.sockets = []
        this.blockChain = blockChain
    }

    listen(){
        const server = new Websocket.Server({
            port : P2P_PORT
        })
        server.on('connection', socket =>{
            this.connectSocket(socket)

            // 1. conections socker
            // 2 connect peer
        })
        this.connectPeers()
        console.log(`listenting on p2p on ${P2P_PORT}`)
    }

    connectPeers(){
        peers.forEach(peer=>{
            const socket = new Websocket(peer)
            socket.on('open', () =>{
                this.connectSocket(socket)
                // 1. socket listen
                // 2. update chain

            })
        })
    }

    connectSocket(socket){
        this.sockets.push(socket)
        console.log("socket connnected")
        this.messageHandler(socket)
        this.sendChain(socket)
    }

    sendChain(socket){
         socket.send(JSON.stringify(this.blockChain.chain))
    }
    messageHandler(socket){
        socket.on('message', (message)=>{
            const receivingChain = JSON.parse(message)
            this.blockChain.replace(receivingChain)
        })
    }

}
module.exports = P2pServer