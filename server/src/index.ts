import WebSocket from "ws";
import { ExamplePacket } from "@yanapiidxer/websocket-messagepack-common";

const server = new WebSocket.Server({
  port: 3000,
}, () => {
  console.info("Launch Server.");
});

server.on("connection", (socket: WebSocket) => {
  console.info("Client Connected.");
  socket.on("message", (data: Buffer) => {
    const packet = new ExamplePacket(0, "");
    packet.decode(data);
    console.info(packet.hoge, packet.fuga);
  });
  socket.on("close", () => {
    console.info("Client Disconnected.");
  })
});
