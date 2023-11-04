import { io } from "socket.io-client";

const socket = io(process.env.baseUrl, { autoConnect: false });

function createWebSocketPlugin(socket) {
  return (store) => {
    store.$socket = socket;
    // Thêm các socket event listening
  };
}

// Plugin lưu giá trị nhận được từ Socket vào Vuex store
export const websocketPlugin = createWebSocketPlugin(socket);

export default socket;
