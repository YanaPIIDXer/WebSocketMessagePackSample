import type { IPacket } from "../PacketBase";
import { EPacketId } from "./PacketId";
import msgpack from "msgpack5";
const packer = msgpack();

export class SamplePacket implements IPacket {
  constructor(private _hoge: number = 0, private _fuga: string = "") {}

  get hoge(): number { return this.hoge; }
  get fuga(): string { return this.fuga; }
  
  get packetId(): EPacketId { return EPacketId.SAMPLE_PACKET; }
  
  encode(): Buffer {
    const datas: any[] = [this.packetId];

    datas.push(this._hoge);
    datas.push(this._fuga);
    
    return packer.encode([datas]).slice();
  }

  decode(buffer: Buffer): void {
    [this._hoge, this._fuga] = packer.decode(buffer);
  }
}
