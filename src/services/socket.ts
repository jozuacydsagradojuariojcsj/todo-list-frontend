import {io, Socket} from "socket.io-client";

let socket : Socket | null = null;

export const connectSocket = (accessToken: string | null) => {

    if(!socket){
        if(accessToken) {
            socket = io("http://localhost:3001", {
                auth:{accessToken},
                transports:["websocket"]
            });
        } else {
            console.log("User unauthorized")
        }
    }
}

export const disconnectSocket = () => {
    if (socket) {
      socket.disconnect();
      socket = null;
      console.log("Socket disconnected");
    }
  };


export const getSocket = () => socket;
