import msgpack from "msgpack5";

const packer = msgpack();

const encoded = packer.encode({name: "hoge", age: 15});
console.info("encoded", encoded);

const decoded = packer.decode(encoded);
console.info("decoded", decoded);
