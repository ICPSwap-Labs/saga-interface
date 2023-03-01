import { ResultStatus, Result } from "types/global";
import isObject from "lodash/isObject";

// TODO: hijack bigint
// @ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString();
};

export const NO_GROUP_SEPARATOR_FORMATTER = {
  groupSeparator: "",
};

export function shortenAddress(str = "") {
  return `${str.slice(0, 6)}...${str.slice(str.length - 4)}`;
}

export function shorten(str: string, key?: any): string {
  if (!str) return str;
  let limit;
  if (typeof key === "number") limit = key;
  if (key === "symbol") limit = 6;
  if (key === "name") limit = 64;
  if (key === "choice") limit = 12;
  if (limit) return str.length > limit ? `${str.slice(0, limit).trim()}...` : str;
  return shortenAddress(str);
}

export function isResultKey(key: string) {
  return isResultErrKey(key) || isResultOkKey(key);
}

export function isResultErrKey(key: string) {
  return key === ResultStatus.ERROR || key === "Err";
}

export function isResultOkKey(key: string) {
  return key === ResultStatus.OK || key === "Ok";
}

export function isObjectResult(result: any): result is { [key: string]: any } {
  const key = Object.keys(result);
  return result && isObject(result) && key && key[0] && isResultKey(key[0]);
}

export function enumResultFormat<T>(result: any): Result<T> {
  if (result === null || result === undefined) {
    return {
      status: ResultStatus.ERROR,
      message: "",
      data: undefined,
    };
  }

  const key = Object.keys(result);

  if (isObjectResult(result)) {
    let message = "";

    if (isResultErrKey(key[0]) && isObject(result[key[0]])) {
      const messageKey = Object.keys(result[key[0]])[0];
      const value = result[key[0]][messageKey];

      // TODO: for token
      if (messageKey === "Other") {
        message = value;
      } else {
        message = `${messageKey}: ${value}`;
      }
    } else {
      if (typeof result[key[0]] === "string") {
        message = result[key[0]];
      }
    }

    return {
      status: isResultErrKey(key[0]) ? ResultStatus.ERROR : ResultStatus.OK,
      data: isResultOkKey(key[0]) ? (result[key[0]] as T) : undefined,
      message: message,
    };
  }

  return {
    status: ResultStatus.OK,
    data: result as T,
    message: "",
  };
}

export function stringToArrayBuffer(string: string): Uint8Array {
  return new TextEncoder().encode(string);
}

export function arrayBufferToString(arrayBuffer: Uint8Array): string {
  return new TextDecoder("utf-8").decode(arrayBuffer);
}
