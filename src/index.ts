import { SigningKey } from "@proven-network/crypto";

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

  get(key: string): Promise<SigningKey | undefined> {
    return Promise.resolve(new SigningKey(0));
  }

  set(key: string, value: SigningKey): Promise<boolean> {
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

export const getPersonalStore = (storeName: string) => {
  return new PersonalStringStore(storeName);
};

export const getPersonalBytesStore = (storeName: string) => {
  return new PersonalBytesStore(storeName);
};

class NftStringStore {
  storeName: string;
  nftId: string;

  constructor(storeName: string, nftId: string) {
    this.storeName = storeName;
    this.nftId = nftId;
  }

  get(key: string): Promise<string | undefined> {
    return Promise.resolve("");
  }

  set(key: string, value: string): Promise<boolean> {
    return Promise.resolve(true);
  }
}

class NftBytesStore {
  storeName: string;
  nftId: string;

  constructor(storeName: string, nftId: string) {
    this.storeName = storeName;
    this.nftId = nftId;
  }

  get(key: string): Promise<Uint8Array | undefined> {
    return Promise.resolve(new Uint8Array());
  }

  set(key: string, value: Uint8Array): Promise<boolean> {
    return Promise.resolve(true);
  }
}

export const getNftStore = (storeName: string, nftId: string) => {
  return new NftStringStore(storeName, nftId);
};

export const getNftBytesStore = (storeName: string, nftId: string) => {
  return new NftBytesStore(storeName, nftId);
};
