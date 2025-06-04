export interface BlcockchainInfo {
  chain: string,
  blocks: number,
  headers: number,
  bestblockhash: string,
  difficulty: number,
  mediantime: number,
  verificationprogress: number,
  initialblockdownload: boolean,
  chainwork: string;
  pruned: boolean;
  softforks: any[];
  warnings: string;
}

export interface NetworkInfo {
    version: number;
  subversion: string;
  protocolversion: number;
  localservices: string;
  timeoffset: number;
  connections: number;
  networks: {
    name: string;
    limited: boolean;
    reachable: boolean;
    proxy: string;
    proxy_randomize_credentials: boolean;
  }[];
  relayfee: number;
  warnings: string;
}


export interface Block {
    hash: string;
  confirmations: number;
  size: number;
  height: number;
  version: number;
  versionHex: string;
  merkleroot: string;
  tx: string[];
  time: number;
  nonce: number;
  bits: string;
  difficulty: number;
  previousblockhash?: string;
  nextblockhash?: string;
}

export interface RawTransaction {
   txid: string;
  hash: string;
  size: number;
  version: number;
  locktime: number;
  vin: any[];
  vout: any[];
  hex?: string;
}