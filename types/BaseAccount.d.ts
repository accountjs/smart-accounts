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
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface BaseAccountInterface extends ethers.utils.Interface {
  functions: {
    "entryPoint()": FunctionFragment;
    "getNonce()": FunctionFragment;
    "validateUserOp(tuple,bytes32,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "entryPoint",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getNonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "validateUserOp",
    values: [
      {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGasLimit: BigNumberish;
        verificationGasLimit: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymasterAndData: BytesLike;
        signature: BytesLike;
      },
      BytesLike,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validateUserOp",
    data: BytesLike
  ): Result;

  events: {};
}

export class BaseAccount extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BaseAccountInterface;

  functions: {
    entryPoint(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "entryPoint()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    getNonce(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getNonce()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    validateUserOp(
      userOp: {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGasLimit: BigNumberish;
        verificationGasLimit: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymasterAndData: BytesLike;
        signature: BytesLike;
      },
      userOpHash: BytesLike,
      missingAccountFunds: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "validateUserOp(tuple,bytes32,uint256)"(
      userOp: {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGasLimit: BigNumberish;
        verificationGasLimit: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymasterAndData: BytesLike;
        signature: BytesLike;
      },
      userOpHash: BytesLike,
      missingAccountFunds: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  entryPoint(overrides?: CallOverrides): Promise<string>;

  "entryPoint()"(overrides?: CallOverrides): Promise<string>;

  getNonce(overrides?: CallOverrides): Promise<BigNumber>;

  "getNonce()"(overrides?: CallOverrides): Promise<BigNumber>;

  validateUserOp(
    userOp: {
      sender: string;
      nonce: BigNumberish;
      initCode: BytesLike;
      callData: BytesLike;
      callGasLimit: BigNumberish;
      verificationGasLimit: BigNumberish;
      preVerificationGas: BigNumberish;
      maxFeePerGas: BigNumberish;
      maxPriorityFeePerGas: BigNumberish;
      paymasterAndData: BytesLike;
      signature: BytesLike;
    },
    userOpHash: BytesLike,
    missingAccountFunds: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "validateUserOp(tuple,bytes32,uint256)"(
    userOp: {
      sender: string;
      nonce: BigNumberish;
      initCode: BytesLike;
      callData: BytesLike;
      callGasLimit: BigNumberish;
      verificationGasLimit: BigNumberish;
      preVerificationGas: BigNumberish;
      maxFeePerGas: BigNumberish;
      maxPriorityFeePerGas: BigNumberish;
      paymasterAndData: BytesLike;
      signature: BytesLike;
    },
    userOpHash: BytesLike,
    missingAccountFunds: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    entryPoint(overrides?: CallOverrides): Promise<string>;

    "entryPoint()"(overrides?: CallOverrides): Promise<string>;

    getNonce(overrides?: CallOverrides): Promise<BigNumber>;

    "getNonce()"(overrides?: CallOverrides): Promise<BigNumber>;

    validateUserOp(
      userOp: {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGasLimit: BigNumberish;
        verificationGasLimit: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymasterAndData: BytesLike;
        signature: BytesLike;
      },
      userOpHash: BytesLike,
      missingAccountFunds: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "validateUserOp(tuple,bytes32,uint256)"(
      userOp: {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGasLimit: BigNumberish;
        verificationGasLimit: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymasterAndData: BytesLike;
        signature: BytesLike;
      },
      userOpHash: BytesLike,
      missingAccountFunds: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    entryPoint(overrides?: CallOverrides): Promise<BigNumber>;

    "entryPoint()"(overrides?: CallOverrides): Promise<BigNumber>;

    getNonce(overrides?: CallOverrides): Promise<BigNumber>;

    "getNonce()"(overrides?: CallOverrides): Promise<BigNumber>;

    validateUserOp(
      userOp: {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGasLimit: BigNumberish;
        verificationGasLimit: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymasterAndData: BytesLike;
        signature: BytesLike;
      },
      userOpHash: BytesLike,
      missingAccountFunds: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "validateUserOp(tuple,bytes32,uint256)"(
      userOp: {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGasLimit: BigNumberish;
        verificationGasLimit: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymasterAndData: BytesLike;
        signature: BytesLike;
      },
      userOpHash: BytesLike,
      missingAccountFunds: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "entryPoint()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getNonce()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    validateUserOp(
      userOp: {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGasLimit: BigNumberish;
        verificationGasLimit: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymasterAndData: BytesLike;
        signature: BytesLike;
      },
      userOpHash: BytesLike,
      missingAccountFunds: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "validateUserOp(tuple,bytes32,uint256)"(
      userOp: {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGasLimit: BigNumberish;
        verificationGasLimit: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymasterAndData: BytesLike;
        signature: BytesLike;
      },
      userOpHash: BytesLike,
      missingAccountFunds: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
