import { PrivateKey } from "@proven-network/crypto";

class ApplicationBytesStore {
  storeName: string;

  constructor(storeName: string) {
    this.storeName = storeName;
  }

  get(key: string): Promise<Uint8Array | undefined> {
    return Promise.resolve(new Uint8Array());
  }

  set(key: string, value: Uint8Array): Promise<boolean> {
    return Promise.resolve(true);
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

  set(key: string, value: PrivateKey): Promise<boolean> {
    return Promise.resolve(true);
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

  set(key: string, value: string): Promise<boolean> {
    return Promise.resolve(true);
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

class PersonalStringStore {
  storeName: string;

  constructor(storeName: string) {
    this.storeName = storeName;
  }

  get(key: string): Promise<string | undefined> {
    return Promise.resolve("");
  }

  set(key: string, value: string): Promise<boolean> {
    return Promise.resolve(true);
  }
}

class PersonalBytesStore {
  storeName: string;

  constructor(storeName: string) {
    this.storeName = storeName;
  }

  get(key: string): Promise<Uint8Array | undefined> {
    return Promise.resolve(new Uint8Array());
  }

  set(key: string, value: Uint8Array): Promise<boolean> {
    return Promise.resolve(true);
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

  set(key: string, value: PrivateKey): Promise<boolean> {
    return Promise.resolve(true);
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

  set(
    nftResourceAddress: string,
    nftId: string | number | Uint8Array,
    key: string,
    value: string
  ): Promise<boolean> {
    return Promise.resolve(true);
  }
}

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

  set(
    nftResourceAddress: string,
    nftId: string | number | Uint8Array,
    key: string,
    value: Uint8Array
  ): Promise<boolean> {
    return Promise.resolve(true);
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

  set(
    nftResourceAddress: string,
    nftId: string | number | Uint8Array,
    key: string,
    value: PrivateKey
  ): Promise<boolean> {
    return Promise.resolve(true);
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
