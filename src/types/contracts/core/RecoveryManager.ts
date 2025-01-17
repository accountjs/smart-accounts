/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from '../../common'

export interface RecoveryManagerInterface extends utils.Interface {
  functions: {
    'addRecoveror(address,bytes)': FunctionFragment
    'getRecoverorsPaginated(address,uint256)': FunctionFragment
    'isRecoverorEnabled(address)': FunctionFragment
    'removeRecoveror(address,address)': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic: 'addRecoveror' | 'getRecoverorsPaginated' | 'isRecoverorEnabled' | 'removeRecoveror',
  ): FunctionFragment

  encodeFunctionData(functionFragment: 'addRecoveror', values: [string, BytesLike]): string
  encodeFunctionData(functionFragment: 'getRecoverorsPaginated', values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: 'isRecoverorEnabled', values: [string]): string
  encodeFunctionData(functionFragment: 'removeRecoveror', values: [string, string]): string

  decodeFunctionResult(functionFragment: 'addRecoveror', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getRecoverorsPaginated', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isRecoverorEnabled', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'removeRecoveror', data: BytesLike): Result

  events: {
    'AddedRecoveror(address)': EventFragment
    'RemovedRecoveror(address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'AddedRecoveror'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RemovedRecoveror'): EventFragment
}

export interface AddedRecoverorEventObject {
  recoveror: string
}
export type AddedRecoverorEvent = TypedEvent<[string], AddedRecoverorEventObject>

export type AddedRecoverorEventFilter = TypedEventFilter<AddedRecoverorEvent>

export interface RemovedRecoverorEventObject {
  recoveror: string
}
export type RemovedRecoverorEvent = TypedEvent<[string], RemovedRecoverorEventObject>

export type RemovedRecoverorEventFilter = TypedEventFilter<RemovedRecoverorEvent>

export interface RecoveryManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: RecoveryManagerInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    addRecoveror(
      recoveror: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string },
    ): Promise<ContractTransaction>

    getRecoverorsPaginated(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string[], string] & { array: string[]; next: string }>

    isRecoverorEnabled(recoveror: string, overrides?: CallOverrides): Promise<[boolean]>

    removeRecoveror(
      prevRecoveror: string,
      recoveror: string,
      overrides?: Overrides & { from?: string },
    ): Promise<ContractTransaction>
  }

  addRecoveror(
    recoveror: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string },
  ): Promise<ContractTransaction>

  getRecoverorsPaginated(
    start: string,
    pageSize: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<[string[], string] & { array: string[]; next: string }>

  isRecoverorEnabled(recoveror: string, overrides?: CallOverrides): Promise<boolean>

  removeRecoveror(
    prevRecoveror: string,
    recoveror: string,
    overrides?: Overrides & { from?: string },
  ): Promise<ContractTransaction>

  callStatic: {
    addRecoveror(recoveror: string, data: BytesLike, overrides?: CallOverrides): Promise<void>

    getRecoverorsPaginated(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string[], string] & { array: string[]; next: string }>

    isRecoverorEnabled(recoveror: string, overrides?: CallOverrides): Promise<boolean>

    removeRecoveror(prevRecoveror: string, recoveror: string, overrides?: CallOverrides): Promise<void>
  }

  filters: {
    'AddedRecoveror(address)'(recoveror?: null): AddedRecoverorEventFilter
    AddedRecoveror(recoveror?: null): AddedRecoverorEventFilter

    'RemovedRecoveror(address)'(recoveror?: null): RemovedRecoverorEventFilter
    RemovedRecoveror(recoveror?: null): RemovedRecoverorEventFilter
  }

  estimateGas: {
    addRecoveror(recoveror: string, data: BytesLike, overrides?: Overrides & { from?: string }): Promise<BigNumber>

    getRecoverorsPaginated(start: string, pageSize: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    isRecoverorEnabled(recoveror: string, overrides?: CallOverrides): Promise<BigNumber>

    removeRecoveror(
      prevRecoveror: string,
      recoveror: string,
      overrides?: Overrides & { from?: string },
    ): Promise<BigNumber>
  }

  populateTransaction: {
    addRecoveror(
      recoveror: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string },
    ): Promise<PopulatedTransaction>

    getRecoverorsPaginated(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    isRecoverorEnabled(recoveror: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    removeRecoveror(
      prevRecoveror: string,
      recoveror: string,
      overrides?: Overrides & { from?: string },
    ): Promise<PopulatedTransaction>
  }
}
