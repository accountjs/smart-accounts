/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  Authority,
  AuthorityInterface,
} from "../../../contracts/common/Authority";

const _abi = [
  {
    inputs: [],
    name: "CallerNotEntryPoint",
    type: "error",
  },
  {
    inputs: [],
    name: "CallerNotSelf",
    type: "error",
  },
] as const;

export class Authority__factory {
  static readonly abi = _abi;
  static createInterface(): AuthorityInterface {
    return new utils.Interface(_abi) as AuthorityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Authority {
    return new Contract(address, _abi, signerOrProvider) as Authority;
  }
}