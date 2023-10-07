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
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IValidatorInterface extends ethers.utils.Interface {
  functions: {
    "NAME()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "enable(bytes)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "validCaller(address,bytes)": FunctionFragment;
    "validateSignature(address,bytes32,bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(functionFragment: "enable", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validCaller",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validateSignature",
    values: [string, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "enable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validCaller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateSignature",
    data: BytesLike
  ): Result;

  events: {};
}

export class IValidator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IValidatorInterface;

  functions: {
    NAME(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "NAME()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    VERSION(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "VERSION()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    enable(
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "enable(bytes)"(
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    validCaller(
      caller: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "validCaller(address,bytes)"(
      caller: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    validateSignature(
      account: string,
      userOpHash: BytesLike,
      signature: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "validateSignature(address,bytes32,bytes)"(
      account: string,
      userOpHash: BytesLike,
      signature: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  NAME(overrides?: CallOverrides): Promise<string>;

  "NAME()"(overrides?: CallOverrides): Promise<string>;

  VERSION(overrides?: CallOverrides): Promise<string>;

  "VERSION()"(overrides?: CallOverrides): Promise<string>;

  enable(
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "enable(bytes)"(
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  validCaller(
    caller: string,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "validCaller(address,bytes)"(
    caller: string,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  validateSignature(
    account: string,
    userOpHash: BytesLike,
    signature: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "validateSignature(address,bytes32,bytes)"(
    account: string,
    userOpHash: BytesLike,
    signature: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    NAME(overrides?: CallOverrides): Promise<string>;

    "NAME()"(overrides?: CallOverrides): Promise<string>;

    VERSION(overrides?: CallOverrides): Promise<string>;

    "VERSION()"(overrides?: CallOverrides): Promise<string>;

    enable(data: BytesLike, overrides?: CallOverrides): Promise<void>;

    "enable(bytes)"(data: BytesLike, overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    validCaller(
      caller: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "validCaller(address,bytes)"(
      caller: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    validateSignature(
      account: string,
      userOpHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "validateSignature(address,bytes32,bytes)"(
      account: string,
      userOpHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    NAME(overrides?: CallOverrides): Promise<BigNumber>;

    "NAME()"(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    "VERSION()"(overrides?: CallOverrides): Promise<BigNumber>;

    enable(data: BytesLike, overrides?: PayableOverrides): Promise<BigNumber>;

    "enable(bytes)"(
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validCaller(
      caller: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "validCaller(address,bytes)"(
      caller: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateSignature(
      account: string,
      userOpHash: BytesLike,
      signature: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "validateSignature(address,bytes32,bytes)"(
      account: string,
      userOpHash: BytesLike,
      signature: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "NAME()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "VERSION()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    enable(
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "enable(bytes)"(
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validCaller(
      caller: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "validCaller(address,bytes)"(
      caller: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateSignature(
      account: string,
      userOpHash: BytesLike,
      signature: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "validateSignature(address,bytes32,bytes)"(
      account: string,
      userOpHash: BytesLike,
      signature: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}
