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