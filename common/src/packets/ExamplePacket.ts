import type { IPacket } from "../PacketBase";
import msgpack from "msgpack5";
const packer = msgpack();

export class ExamplePacket implements IPacket {
  constructor(private _hoge: number, private _fuga: string) {}

  get hoge(): number { return this._hoge; }
  get fuga(): string { return this._fuga; }
  
  get packetId(): number { return 1; }
  
  encode(): Buffer {
    return packer.encode([this._hoge, this._fuga]).slice();
  }
  decode(buffer: Buffer): void {
    [this._hoge, this._fuga] = packer.decode(buffer);
  }
  
}
