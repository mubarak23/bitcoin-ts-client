import axios from "axios";
import { BlcockchainInfo, NetworkInfo } from "./types/bitcoin.type";


export class BitcoinClient {
  constructor(
    private readonly rpcUrl: string,
    private readonly rpcUsername: string,
    private readonly rpcPassword: string,
  ) {}


  private async call<T>(method: string, payload: unknown[] = []): Promise<T> {
    const response = await axios.post(
      this.rpcUrl,
      {
        jsonrpc: '1.0',
        method,
        param: payload
      },
      {
        auth: {
          username: this.rpcUsername,
          password: this.rpcPassword
        }
      }
    );
    // remov this before publish the package on npm 
    console.log("response data is:", response.data);
    return response.data.result;
  }

  async getBlockChainInfo(): Promise<BlcockchainInfo> {
    return this.call('getblockchaininfo')
  }

  async getnetworkinfo(): Promise<NetworkInfo> {
    return this.call('getnetworkinfo')
  }
}