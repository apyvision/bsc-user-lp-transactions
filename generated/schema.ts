// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get liquidityPositions(): Array<string> | null {
    let value = this.get("liquidityPositions");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set liquidityPositions(value: Array<string> | null) {
    if (value === null) {
      this.unset("liquidityPositions");
    } else {
      this.set(
        "liquidityPositions",
        Value.fromStringArray(value as Array<string>)
      );
    }
  }

  get userLPTransactions(): Array<string> | null {
    let value = this.get("userLPTransactions");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set userLPTransactions(value: Array<string> | null) {
    if (value === null) {
      this.unset("userLPTransactions");
    } else {
      this.set(
        "userLPTransactions",
        Value.fromStringArray(value as Array<string>)
      );
    }
  }
}

export class LiquidityPosition extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LiquidityPosition entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LiquidityPosition entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LiquidityPosition", id.toString(), this);
  }

  static load(id: string): LiquidityPosition | null {
    return store.get("LiquidityPosition", id) as LiquidityPosition | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get poolAddress(): Bytes {
    let value = this.get("poolAddress");
    return value.toBytes();
  }

  set poolAddress(value: Bytes) {
    this.set("poolAddress", Value.fromBytes(value));
  }

  get poolProviderKey(): string {
    let value = this.get("poolProviderKey");
    return value.toString();
  }

  set poolProviderKey(value: string) {
    this.set("poolProviderKey", Value.fromString(value));
  }
}

export class UserLPTransaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save UserLPTransaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save UserLPTransaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("UserLPTransaction", id.toString(), this);
  }

  static load(id: string): UserLPTransaction | null {
    return store.get("UserLPTransaction", id) as UserLPTransaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get poolAddress(): Bytes {
    let value = this.get("poolAddress");
    return value.toBytes();
  }

  set poolAddress(value: Bytes) {
    this.set("poolAddress", Value.fromBytes(value));
  }

  get poolProviderKey(): string {
    let value = this.get("poolProviderKey");
    return value.toString();
  }

  set poolProviderKey(value: string) {
    this.set("poolProviderKey", Value.fromString(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Exception extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Exception entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Exception entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Exception", id.toString(), this);
  }

  static load(id: string): Exception | null {
    return store.get("Exception", id) as Exception | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get addrs(): Bytes {
    let value = this.get("addrs");
    return value.toBytes();
  }

  set addrs(value: Bytes) {
    this.set("addrs", Value.fromBytes(value));
  }

  get txHash(): Bytes {
    let value = this.get("txHash");
    return value.toBytes();
  }

  set txHash(value: Bytes) {
    this.set("txHash", Value.fromBytes(value));
  }

  get message(): string {
    let value = this.get("message");
    return value.toString();
  }

  set message(value: string) {
    this.set("message", Value.fromString(value));
  }
}
