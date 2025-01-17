/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import type { Provider } from '@ethersproject/providers'
import type { FallbackManager, FallbackManagerInterface } from '../../../contracts/core/FallbackManager'

const _abi = [
  {
    inputs: [],
    name: 'AddressCannotBeZero',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CallerNotEntryPoint',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CallerNotSelf',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousHandler',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'handler',
        type: 'address',
      },
    ],
    name: 'ChangedFallbackHandler',
    type: 'event',
  },
  {
    stateMutability: 'nonpayable',
    type: 'fallback',
  },
  {
    inputs: [],
    name: 'getFallbackHandler',
    outputs: [
      {
        internalType: 'address',
        name: '_handler',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'handler',
        type: 'address',
      },
    ],
    name: 'setFallbackHandler',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const

export class FallbackManager__factory {
  static readonly abi = _abi
  static createInterface(): FallbackManagerInterface {
    return new utils.Interface(_abi) as FallbackManagerInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): FallbackManager {
    return new Contract(address, _abi, signerOrProvider) as FallbackManager
  }
}
