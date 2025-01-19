import { PrivateKey } from "@proven-network/crypto";

class ApplicationBytesStore {
  storeName: string;

  constructor(storeName: string) {
    this.storeName = storeName;
  }

  get(key: string): Promise<Uint8Array | undefined> {
    return Promise.resolve(new Uint8Array());
  }

  keys(): Promise<string[]> {
    return Promise.resolve([]);
  }

  set(key: string, value: Uint8Array): Promise<void> {
    return Promise.resolve();
  }
}

class ApplicationKeyStore {
  storeName: string;

  constructor(storeName: string) {
    this.storeName = storeName;
  }

  get(key: string): Promise<PrivateKey | undefined> {
    return Promise.resolve(new PrivateKey(0));
  }

  keys(): Promise<string[]> {
    return Promise.resolve([]);
  }

  set(key: string, value: PrivateKey): Promise<void> {
    return Promise.resolve();
  }
}

class ApplicationStringStore {
  storeName: string;

  constructor(storeName: string) {
    this.storeName = storeName;
  }

  get(key: string): Promise<string | undefined> {
    return Promise.resolve("");
  }

  keys(): Promise<string[]> {
    return Promise.resolve([]);
  }

  set(key: string, value: string): Promise<void> {
    return Promise.resolve();
  }
}

export const getApplicationStore = (storeName: string) => {
  return new ApplicationStringStore(storeName);
};

export const getApplicationBytesStore = (storeName: string) => {
  return new ApplicationBytesStore(storeName);
};

export const getApplicationKeyStore = (storeName: string) => {
  return new ApplicationKeyStore(storeName);
};

class PersonalBytesStore {
  storeName: string;

  constructor(storeName: string) {
    this.storeName = storeName;
  }

  get(key: string): Promise<Uint8Array | undefined> {
    return Promise.resolve(new Uint8Array());
  }

  keys(): Promise<string[]> {
    return Promise.resolve([]);
  }

  set(key: string, value: Uint8Array): Promise<void> {
    return Promise.resolve();
  }
}

class PersonalKeyStore {
  storeName: string;

  constructor(storeName: string) {
    this.storeName = storeName;
  }

  get(key: string): Promise<PrivateKey | undefined> {
    return Promise.resolve(new PrivateKey(0));
  }

  keys(): Promise<string[]> {
    return Promise.resolve([]);
  }

  set(key: string, value: PrivateKey): Promise<void> {
    return Promise.resolve();
  }
}

class PersonalStringStore {
  storeName: string;

  constructor(storeName: string) {
    this.storeName = storeName;
  }

  get(key: string): Promise<string | undefined> {
    return Promise.resolve("");
  }

  keys(): Promise<string[]> {
    return Promise.resolve([]);
  }

  set(key: string, value: string): Promise<void> {
    return Promise.resolve();
  }
}

export const getPersonalStore = (storeName: string) => {
  return new PersonalStringStore(storeName);
};

export const getPersonalBytesStore = (storeName: string) => {
  return new PersonalBytesStore(storeName);
};

export const getPersonalKeyStore = (storeName: string) => {
  return new PersonalKeyStore(storeName);
};

class NftBytesStore {
  storeName: string;

  constructor(storeName: string) {
    this.storeName = storeName;
  }

  get(
    nftResourceAddress: string,
    nftId: string | number | Uint8Array,
    key: string
  ): Promise<Uint8Array | undefined> {
    return Promise.resolve(new Uint8Array());
  }

  keys(
    nftResourceAddress: string,
    nftId: string | number | Uint8Array
  ): Promise<string[]> {
    return Promise.resolve([]);
  }

  set(
    nftResourceAddress: string,
    nftId: string | number | Uint8Array,
    key: string,
    value: Uint8Array
  ): Promise<void> {
    return Promise.resolve();
  }
}

class NftKeyStore {
  storeName: string;

  constructor(storeName: string) {
    this.storeName = storeName;
  }

  get(
    nftResourceAddress: string,
    nftId: string | number | Uint8Array,
    key: string
  ): Promise<PrivateKey | undefined> {
    return Promise.resolve(new PrivateKey(0));
  }

  keys(
    nftResourceAddress: string,
    nftId: string | number | Uint8Array
  ): Promise<string[]> {
    return Promise.resolve([]);
  }

  set(
    nftResourceAddress: string,
    nftId: string | number | Uint8Array,
    key: string,
    value: PrivateKey
  ): Promise<void> {
    return Promise.resolve();
  }
}

class NftStringStore {
  storeName: string;

  constructor(storeName: string) {
    this.storeName = storeName;
  }

  get(
    nftResourceAddress: string,
    nftId: string | number | Uint8Array,
    key: string
  ): Promise<string | undefined> {
    return Promise.resolve("");
  }

  keys(
    nftResourceAddress: string,
    nftId: string | number | Uint8Array
  ): Promise<string[]> {
    return Promise.resolve([]);
  }

  set(
    nftResourceAddress: string,
    nftId: string | number | Uint8Array,
    key: string,
    value: string
  ): Promise<void> {
    return Promise.resolve();
  }
}

export const getNftStore = (storeName: string) => {
  return new NftStringStore(storeName);
};

export const getNftBytesStore = (storeName: string) => {
  return new NftBytesStore(storeName);
};

export const getNftKeyStore = (storeName: string) => {
  return new NftKeyStore(storeName);
};
