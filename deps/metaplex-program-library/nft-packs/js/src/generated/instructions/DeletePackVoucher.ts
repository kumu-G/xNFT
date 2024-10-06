/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category DeletePackVoucher
 * @category generated
 */
export const DeletePackVoucherStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number;
}>([['instructionDiscriminator', beet.u8]], 'DeletePackVoucherInstructionArgs');
/**
 * Accounts required by the _DeletePackVoucher_ instruction
 *
 * @property [_writable_] packSet
 * @property [_writable_] packVoucher
 * @property [**signer**] authority
 * @property [_writable_] refunder
 * @category Instructions
 * @category DeletePackVoucher
 * @category generated
 */
export type DeletePackVoucherInstructionAccounts = {
  packSet: web3.PublicKey;
  packVoucher: web3.PublicKey;
  authority: web3.PublicKey;
  refunder: web3.PublicKey;
};

export const deletePackVoucherInstructionDiscriminator = 10;

/**
 * Creates a _DeletePackVoucher_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category DeletePackVoucher
 * @category generated
 */
export function createDeletePackVoucherInstruction(
  accounts: DeletePackVoucherInstructionAccounts,
  programId = new web3.PublicKey('packFeFNZzMfD9aVWL7QbGz1WcU7R9zpf6pvNsw2BLu'),
) {
  const [data] = DeletePackVoucherStruct.serialize({
    instructionDiscriminator: deletePackVoucherInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.packSet,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.packVoucher,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.authority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.refunder,
      isWritable: true,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
