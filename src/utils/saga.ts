import { Principal } from "@dfinity/principal";
import upperFirst from "lodash/upperFirst";
import { ArgKey, ArgValue } from "types/saga";
import { stringToArrayBuffer } from "utils/index";

export function makeId() {
  let length = 200;

  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export function argTypeFormat(type: ArgKey, value: string): ArgValue | undefined {
  switch (type) {
    case ArgKey.Bool:
      return { [upperFirst(value)]: null } as { True: null } | { False: null };
    case ArgKey.I64:
      return { I64: BigInt(value) };
    case ArgKey.U64:
      return { U64: BigInt(value) };
    case ArgKey.Slice:
      return { Slice: stringToArrayBuffer(value) };
    case ArgKey.Text:
      return { Text: value };
    case ArgKey.Principal:
      return { Principal: Principal.fromText(value) };
  }
}
