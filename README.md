# Bitcoin JSON-RPC Client (TypeScript)

A lightweight, type-safe, and modern TypeScript client for interacting with a [Bitcoin Core](https://bitcoincore.org/en/) node using JSON-RPC.

[![License](https://img.shields.io/github/license/YOUR_GITHUB_USERNAME/bitcoin-ts-client)](LICENSE)
[![NPM Version](https://img.shields.io/npm/v/bitcoin-ts-client)](https://www.npmjs.com/package/bitcoin-ts-client)
[![Build Status](https://img.shields.io/github/actions/workflow/status/YOUR_GITHUB_USERNAME/bitcoin-ts-client/test.yml?branch=main)](https://github.com/YOUR_GITHUB_USERNAME/bitcoin-ts-client/actions)

---

## ✨ Features

- Supports Bitcoin Core v24+ JSON-RPC methods
- Written in modern TypeScript
- Fully typed with helpful return types
- Easy to extend
- Includes basic unit tests

---

## 📦 Installation

```bash
npm install bitcoin-ts-client
# or
yarn add bitcoin-ts-client
```

---

## 🛠 Usage

```ts
import { BitcoinClient } from 'bitcoin-ts-client';

const client = new BitcoinClient(
  'http://localhost:8332', // RPC URL
  'rpcuser', // RPC Username
  'rpcpassword' // RPC Password
);

// Example: Get blockchain info
async function main() {
  const info = await client.getBlockchainInfo();
  console.log(info);
}

main();
```

---

## ✅ Available Methods

You can call common Bitcoin Core RPC methods like:

- `getBlockchainInfo()`
- `getNetworkInfo()`
- `getBlockCount()`
- `getBlockHash(height)`
- `getBlock(hash)`

Additional methods like:

- `getRawTransaction(txid, verbose)`
- `getNewAddress(label?, addressType?)`
- `createWallet(txid, verbose)`
- `getNewAddress(label?, addressType?)`

are currently in progress.

> Want to request support for more methods? Open an issue or contribute!

---

## 🧪 Testing

This package uses **Jest** for testing.

### Run Tests

```bash
npm run test
```

Tests are located under the `tests/` directory.

---

## 🧱 Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm run test
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repo
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

Please make sure to run tests and follow the coding style before submitting.

---

## 🧠 Resources

- [Bitcoin Core RPC Documentation](https://developer.bitcoin.org/reference/rpc/index.html)
- [Bitcoin GitHub](https://github.com/bitcoin/bitcoin)
- [TypeScript](https://www.typescriptlang.org/)

---

## 👥 Authors

- [Mubarak Aminu](https://github.com/mubrak23)

---

## 📬 Support

If you find this project useful, give it a ⭐ on [GitHub](https://github.com/mubarak23/bitcoin-ts-client). For support, open an [issue](https://github.com/YOUR_GITHUB_USERNAME/bitcoin-ts-client/issues).
