/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface Secp256R1IoTeXInterface extends ethers.utils.Interface {
  functions: {
    "validateSignature(bytes32,bytes,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "validateSignature",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "validateSignature",
    data: BytesLike
  ): Result;

  events: {};
}

export class Secp256R1IoTeX extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: Secp256R1IoTeXInterface;

  functions: {
    validateSignature(
      message: BytesLike,
      signature: BytesLike,
      publicKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      result: boolean;
      0: boolean;
    }>;

    "validateSignature(bytes32,bytes,bytes)"(
      message: BytesLike,
      signature: BytesLike,
      publicKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      result: boolean;
      0: boolean;
    }>;
  };

  validateSignature(
    message: BytesLike,
    signature: BytesLike,
    publicKey: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "validateSignature(bytes32,bytes,bytes)"(
    message: BytesLike,
    signature: BytesLike,
    publicKey: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    validateSignature(
      message: BytesLike,
      signature: BytesLike,
      publicKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "validateSignature(bytes32,bytes,bytes)"(
      message: BytesLike,
      signature: BytesLike,
      publicKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    validateSignature(
      message: BytesLike,
      signature: BytesLike,
      publicKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "validateSignature(bytes32,bytes,bytes)"(
      message: BytesLike,
      signature: BytesLike,
      publicKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    validateSignature(
      message: BytesLike,
      signature: BytesLike,
      publicKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "validateSignature(bytes32,bytes,bytes)"(
      message: BytesLike,
      signature: BytesLike,
      publicKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
