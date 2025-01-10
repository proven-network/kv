# Key-Value Store Types for Proven Application Code

This package defines key-value store types for usage in Proven Application code. It includes string and byte stores for application, personal, and NFT contexts.

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
  const success = await APP_STORE.set("key1", "value1");
  if (success) {
    const value = await APP_STORE.get("key1");
    console.log(value);
  }
};
```

#### Bytes Store

```typescript
import { getApplicationBytesStore } from "@proven-network/kv";

const APP_BYTES_STORE = getApplicationBytesStore("myAppBytesStore");

export const handler = async () => {
  const success = await APP_BYTES_STORE.set("key1", new Uint8Array([1, 2, 3]));
  if (success) {
    const value = await APP_BYTES_STORE.get("key1");
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
  const success = await PERSONAL_STORE.set("key1", "value1");
  if (success) {
    const value = await PERSONAL_STORE.get("key1");
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
    "key1",
    new Uint8Array([1, 2, 3])
  );
  if (success) {
    const value = await PERSONAL_BYTES_STORE.get("key1");
    console.log(value);
  }
};
```

### NFT Store

#### String Store

```typescript
import { getNftStore } from "@proven-network/kv";

const NFT_STORE = getNftStore("myNftStore", "nft123");

export const handler = async () => {
  const success = await NFT_STORE.set("key1", "value1");
  if (success) {
    const value = await NFT_STORE.get("key1");
    console.log(value);
  }
};
```

#### Bytes Store

```typescript
import { getNftBytesStore } from "@proven-network/kv";

const NFT_BYTES_STORE = getNftBytesStore("myNftBytesStore", "nft123");

export const handler = async () => {
  const success = await NFT_BYTES_STORE.set("key1", new Uint8Array([1, 2, 3]));
  if (success) {
    const value = await NFT_BYTES_STORE.get("key1");
    console.log(value);
  }
};
```
