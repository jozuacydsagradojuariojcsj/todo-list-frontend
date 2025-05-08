import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export const connectSocket = () => {
  if (!socket) {
    socket = io("http://localhost:3001", {
      withCredentials: true,
    });
    console.log("User Connected");
  }
  console.log("User not connected")
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
    console.log("Socket disconnected");
  }
};

export const getSocket = () => socket;
