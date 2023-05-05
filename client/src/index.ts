import msgpack from "msgpack5";
import WebSocket from "ws";

const packer = msgpack();
const encoded: Buffer = packer.encode(["hoge", 15]).slice();

const socket = new WebSocket("ws://localhost:3000");
socket.onopen = () => {
  socket.send(encoded, () => {
    socket.close();
  });
}
