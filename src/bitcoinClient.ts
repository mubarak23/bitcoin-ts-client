import axios from "axios";
import { BlcockchainInfo, NetworkInfo, Block, RawTransaction } from "./types/bitcoin.type";


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
    return this.call('getblockchaininfo');
  }

  async getnetworkinfo(): Promise<NetworkInfo> {
    return this.call('getnetworkinfo');
  }

 async getblockcount (): Promise<Number>{
    return this.call('getblockcount');
  }

async getblockhash(height: number): Promise<String> {
  return this.call('getblockhash', [height]);
}

async getBlock(hash: string): Promise<Block> {
  return this.call('getblock', [hash])
}

async getRawTransaction(txid: string, verbose = true): Promise<RawTransaction>{
  return this.call("getrawtransaction", [txid, verbose ? 1: 0])  
}

}


 