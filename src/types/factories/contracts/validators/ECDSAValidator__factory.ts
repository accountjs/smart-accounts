/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { ECDSAValidator, ECDSAValidatorInterface } from '../../../contracts/validators/ECDSAValidator'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'oldOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnerChanged',
    type: 'event',
  },
  {
    inputs: [],
    name: 'NAME',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'VERSION',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'enable',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'caller',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'validCaller',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'userOpHash',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'validateSignature',
    outputs: [
      {
        internalType: 'uint256',
        name: 'validationData',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
] as const

const _bytecode =
  '0x608080604052346100165761067c908161001c8239f35b600080fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826301ffc9a7146102af575081630c9595561461020e578163666e1b39146101d5578163971604c6146101835781639ea9bd591461011d57508063a3f4df7e146100cb5763ffa1ad741461007257600080fd5b346100c757816003193601126100c7576100c39061008e61032e565b90600582527f302e302e3100000000000000000000000000000000000000000000000000000060208301525191829182610364565b0390f35b5080fd5b50346100c757816003193601126100c7576100c3906100e861032e565b90600f82527f45434453412056616c696461746f72000000000000000000000000000000000060208301525191829182610364565b9190503461017f578060031936011261017f57610138610318565b9160243567ffffffffffffffff811161017b579361015c83926020963691016102e5565b50503381528085526001600160a01b0391829120541691519216148152f35b8480fd5b8280fd5b9050606036600319011261017f57610199610318565b926044359067ffffffffffffffff82116101d25750926101c16101cb926020953691016102e5565b91602435906103ad565b9051908152f35b80fd5b5050346100c75760203660031901126100c757602091816001600160a01b0391826101fe610318565b1681528085522054169051908152f35b9050602036600319011261017f5780359067ffffffffffffffff82116102ab5761023a913691016102e5565b60141161017f576001600160a01b03903560601c91338452836020528320805490837fffffffffffffffffffffffff0000000000000000000000000000000000000000831617905516337f381c0d11398486654573703c51ee8210ce9461764d133f9f0e53b6a5397053318480a480f35b8380fd5b84913461017f57602036600319011261017f573563ffffffff60e01b811680910361017f5763052a2cc960e01b14815260209150f35b9181601f840112156103135782359167ffffffffffffffff8311610313576020838186019501011161031357565b600080fd5b600435906001600160a01b038216820361031357565b604051906040820182811067ffffffffffffffff82111761034e57604052565b634e487b7160e01b600052604160045260246000fd5b6020808252825181830181905290939260005b82811061039957505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610377565b9290916001600160a01b0391826000951685528460205282604086205416937f19457468657265756d205369676e6564204d6573736167653a0a3332000000008652601c52603c85209067ffffffffffffffff928382116104805760405193601f8301601f19908116603f011685019081118582101761046c57604052818452368282011161046857918660208386946104519683610459990137840101526105ae565b919091610494565b16036104625790565b50600190565b8680fd5b634e487b7160e01b88526041600452602488fd5b634e487b7160e01b87526041600452602487fd5b600581101561059857806104a55750565b600181036104f25760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b6002810361053f5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b60031461054857565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b634e487b7160e01b600052602160045260246000fd5b9060418151146000146105dc576105d8916020820151906060604084015193015160001a906105e6565b9091565b5050600090600290565b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083116106635791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa156106565781516001600160a01b03811615610462579190565b50604051903d90823e3d90fd5b5050505060009060039056fea164736f6c6343000813000a'

type ECDSAValidatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: ECDSAValidatorConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1

export class ECDSAValidator__factory extends ContractFactory {
  constructor(...args: ECDSAValidatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(overrides?: Overrides & { from?: string }): Promise<ECDSAValidator> {
    return super.deploy(overrides || {}) as Promise<ECDSAValidator>
  }
  override getDeployTransaction(overrides?: Overrides & { from?: string }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): ECDSAValidator {
    return super.attach(address) as ECDSAValidator
  }
  override connect(signer: Signer): ECDSAValidator__factory {
    return super.connect(signer) as ECDSAValidator__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): ECDSAValidatorInterface {
    return new utils.Interface(_abi) as ECDSAValidatorInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ECDSAValidator {
    return new Contract(address, _abi, signerOrProvider) as ECDSAValidator
  }
}
