# Key-Value Store Types for Proven Application Code

This package defines key-value store types for usage in Proven Application code. It includes string, byte and key stores for application, personal, and NFT contexts.

## Installation

Install this package as a dev dependency:

```bash
npm install --save-dev @proven-network/kv
```

or

```bash
yarn add -D @proven-network/kv
```

## Usage

### Application Store

#### String Store

```typescript
import { getApplicationStore } from "@proven-network/kv";

const APP_STORE = getApplicationStore("myAppStore");

export const handler = async () => {
  const success = await APP_STORE.set("key", "value");

  if (success) {
    const value = await APP_STORE.get("key")!;
    console.log(value);
  }
};
```

#### Bytes Store

```typescript
import { getApplicationBytesStore } from "@proven-network/kv";

const APP_BYTES_STORE = getApplicationBytesStore("myAppBytesStore");

export const handler = async () => {
  const success = await APP_BYTES_STORE.set("key", new Uint8Array([1, 2, 3]));

  if (success) {
    const value = await APP_BYTES_STORE.get("key");
    console.log(value);
  }
};
```

#### Key Store

```typescript
import { generateEd25519Key } from "@proven-network/crypto";
import { getApplicationKeyStore } from "@proven-network/kv";

const APP_KEY_STORE = getApplicationKeyStore("myAppKeyStore");

export const handler = async () => {
  const success = await APP_KEY_STORE.set("key", generateEd25519Key());

  if (success) {
    const value = await APP_KEY_STORE.get("key");
    console.log(value);
  }
};
```

### Personal Store

#### String Store

```typescript
import { getPersonalStore } from "@proven-network/kv";

const PERSONAL_STORE = getPersonalStore("myPersonalStore");

export const handler = async () => {
  const success = await PERSONAL_STORE.set("key", "value");

  if (success) {
    const value = await PERSONAL_STORE.get("key");
    console.log(value);
  }
};
```

#### Bytes Store

```typescript
import { getPersonalBytesStore } from "@proven-network/kv";

const PERSONAL_BYTES_STORE = getPersonalBytesStore("myPersonalBytesStore");

export const handler = async () => {
  const success = await PERSONAL_BYTES_STORE.set(
    "key",
    new Uint8Array([1, 2, 3])
  );

  if (success) {
    const value = await PERSONAL_BYTES_STORE.get("key");
    console.log(value);
  }
};
```

#### Key Store

```typescript
import { generateEd25519Key } from "@proven-network/crypto";
import { getPersonalKeyStore } from "@proven-network/kv";

const PERSONAL_KEY_STORE = getApplicationKeyStore("myPersonalKeyStore");

export const handler = async () => {
  const success = await PERSONAL_KEY_STORE.set("key", generateEd25519Key());

  if (success) {
    const value = await PERSONAL_KEY_STORE.get("key");
    console.log(value);
  }
};
```

### NFT Store

#### String Store

```typescript
import { getNftStore } from "@proven-network/kv";

const NFT_STORE = getNftStore("myNftStore");
const RESOURCE_ADDR = "resource_1qlq38wvrvh5m4kaz6etaac4389qtuycnp89atc8acdfi";

export const handler = async (nftId: string) => {
  const success = await NFT_STORE.set(RESOURCE_ADDR, nftId, "key", "value");

  if (success) {
    const value = await NFT_STORE.get(RESOURCE_ADDR, nftId, "key");
    console.log(value);
  }
};
```

#### Bytes Store

```typescript
import { getNftBytesStore } from "@proven-network/kv";

const NFT_BYTES_STORE = getNftBytesStore("myNftBytesStore");
const RESOURCE_ADDR = "resource_1qlq38wvrvh5m4kaz6etaac4389qtuycnp89atc8acdfi";

export const handler = async (nftId: string) => {
  const success = await NFT_BYTES_STORE.set(
    RESOURCE_ADDR,
    nftId,
    "key",
    new Uint8Array([1, 2, 3])
  );

  if (success) {
    const value = await NFT_BYTES_STORE.get(RESOURCE_ADDR, nftId, "key");
    console.log(value);
  }
};
```

#### Key Store

```typescript
import { generateEd25519Key } from "@proven-network/crypto";
import { getNftKeyStore } from "@proven-network/kv";

const NFT_KEY_STORE = getNftKeyStore("myNftKeyStore");
const RESOURCE_ADDR = "resource_1qlq38wvrvh5m4kaz6etaac4389qtuycnp89atc8acdfi";

export const handler = async (nftId: string) => {
  const success = await NFT_KEY_STORE.set(
    RESOURCE_ADDR,
    nftId,
    generateEd25519Key()
  );

  if (success) {
    const value = await NFT_KEY_STORE.get(RESOURCE_ADDR, nftId);
    console.log(value);
  }
};
```
