import msgpack from "msgpack5";
import WebSocket from "ws";

const packer = msgpack();
const server = new WebSocket.Server({
  port: 3000,
}, () => {
  console.info("Launch Server.");
});

server.on("connection", (socket: WebSocket) => {
  console.info("Client Connected.");
  socket.on("message", (data: Buffer) => {
    const decoded = packer.decode(data);
    console.info(decoded);
  });
  socket.on("close", () => {
    console.info("Client Disconnected.");
  })
});
