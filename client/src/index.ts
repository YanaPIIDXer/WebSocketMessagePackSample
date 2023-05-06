import msgpack from "msgpack5";
import WebSocket from "ws";
import { ExamplePacket } from "@yanapiidxer/websocket-messagepack-common";

const encoded: Buffer = new ExamplePacket(20, "fuga").encode();

const socket = new WebSocket("ws://localhost:3000");
socket.onopen = () => {
  socket.send(encoded, () => {
    socket.close();
  });
}
