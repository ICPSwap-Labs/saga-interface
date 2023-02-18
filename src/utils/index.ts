import Decimal from "decimal.js";
import dayjs from "dayjs";
import { BigNumber, parseTokenAmount, toSignificant } from "@icpswap/sdk";

// TODO: hijack bigint
// @ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString();
};

export const NO_GROUP_SEPARATOR_FORMATTER = {
  groupSeparator: "",
};

const CryptoJS = require("crypto-js");

export const zero = new BigNumber(0);

export const toString = (x: number, dp = 18) => Decimal.mul(x, Decimal.pow(10, dp)).toFixed(0);
export const toDecimal = (x: number, dp = 18) => Decimal.div(x, Decimal.pow(10, dp));

export function numberThousandFormat(num: number): string {
  if (num) return new BigNumber(num).toFormat();
  return "";
}

export const timestampToTimes = (timestamp: bigint | string | number): string => {
  if (!timestamp) return "";
  let newTimestamp = new BigNumber(String(timestamp).substr(0, 13)).toNumber();
  return dayjs(newTimestamp).format("YYYY-MM-DD HH:mm:ss");
};

export const splitString = (value: string | undefined, length = 4): string => {
  if (!value) return "";
  return `${value.slice(0, length)}....${value.slice(-length)}`;
};

export function encryptPassword(password: string): string {
  return CryptoJS.AES.encrypt(password, password).toString();
}

export function decryptString(password: string, string: string): string {
  return CryptoJS.AES.decrypt(string, password).toString(CryptoJS.enc.Utf8);
}

export function encryptMnemonic(password: string): (mnemonic: string) => string {
  return (mnemonic: string) => CryptoJS.AES.encrypt(mnemonic, password).toString();
}

export function decryptMnemonic(password: string): (mnemonic: string) => string {
  return (mnemonic) => CryptoJS.AES.decrypt(mnemonic, password).toString(CryptoJS.enc.Utf8);
}

export const unitPrice = (price: string | number): string => {
  if (price === "--") return price;
  return `${getUnit()} ${price}`;
};

export function getUnit() {
  return "$";
}

export const cyclesBalanceFormat = (value: string | number | bigint | undefined, noUnit?: boolean): string => {
  if (value === undefined) return "--";
  if (value === 0 || !value) return noUnit ? `0` : `0 T`;
  return `${new BigNumber(parseTokenAmount(value, 12).toFixed(4)).toFormat()}${noUnit ? "" : " T"}`;
};

function swap<T>(items: T[], leftIndex: number, rightIndex: number): void {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function quickInnerSort<T>(
  arr: T[],
  partition: (arr: T[], left: number, right: number) => number,
  left?: number,
  right?: number
) {
  let partitionIndex = null;

  left = typeof left !== "number" ? 0 : left;
  right = typeof right !== "number" ? arr.length - 1 : right;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickInnerSort(arr, partition, left, partitionIndex - 1);
    quickInnerSort(arr, partition, partitionIndex + 1, right);
  }

  return arr;
}

export function quickSort<T>(arr: T[], key?: string, valueFormat?: (value: any) => any) {
  const getArrIndexValue = (arr: T[], index: number) => {
    if (key) {
      // @ts-ignore
      let value: any = arr[index][key];
      return valueFormat ? valueFormat(value) : value;
    }
    return valueFormat ? valueFormat(arr[index]) : arr[index];
  };

  const partition = (arr: T[], left: number, right: number): number => {
    const pivot = left;
    let index = pivot + 1;
    for (let i = index; i <= right; i++) {
      if (new BigNumber(getArrIndexValue(arr, i)).isLessThan(getArrIndexValue(arr, pivot))) {
        swap(arr, i, index);
        index++;
      }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
  };

  return quickInnerSort(arr, partition);
}

export function transactionsTypeFormat(type: any): string {
  if (typeof type === "string") return type;
  if (typeof type === "object") {
    if (type) {
      return Object.keys(type)[0];
    }
  }
  return type;
}

export function moErrMessageFormat(errMessage: string): string {
  let _errMessage = errMessage.toString();
  return _errMessage.split("Reject text: ")[1]?.replace(/\s/g, "");
}

export function isValidReactElement(object: any): boolean {
  return (
    typeof object === "object" &&
    object !== null &&
    !!object.$$typeof &&
    typeof object.$$typeof === "symbol" &&
    object.$$typeof.toString() === "Symbol(react.element)"
  );
}

export function enumTypeFormat(type: string | object): string {
  if (typeof type === "string") return type;
  if (typeof type === "object") {
    if (type) {
      return Object.keys(type)[0];
    }
  }
  return type;
}

export function isDarkTheme(theme: any): boolean {
  return false;
}

export const isICPSwapOfficial = (account: string | undefined): boolean => {
  return account === "b2b33b29fa0f9458ec7ba0025f6a53126043fad143dd17619d5f162f41e69869";
};

export function openInNewWindow(url: string, id: string): void {
  let a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("target", "_blank");
  a.setAttribute("id", id);
  if (!document.getElementById(id)) {
    document.body.appendChild(a);
  }
  a.click();
}

export function getExplorerPrincipalLink(principalId: string): string {
  if ((principalId ?? "").length > 27) {
    return `https://icscan.io/principal/${principalId}`;
  } else {
    return `https://icscan.io/canister/${principalId}`;
  }
}

export function getExplorerAccountLink(account: string): string {
  return `https://icscan.io/account/${account}`;
}

export function nanosecond2Millisecond(time: string | number | bigint) {
  return new BigNumber(String(time)).dividedBy(1000000).toNumber();
}

export function millisecond2Nanosecond(time: string | number | bigint) {
  return new BigNumber(new Date(String(time)).getTime()).multipliedBy(1000000).toNumber();
}

export function nullParamsFormat<T>(value: T | null | undefined): [T] | [] {
  return value ? [value] : [];
}

export function openBase64ImageInNewWindow(base64String: string) {
  var image = new Image();
  image.src = base64String;

  var win = window.open("");
  win?.document.write(image.outerHTML);
}

export function stringToArrayBuffer(string: string): Uint8Array {
  return new TextEncoder().encode(string);
}

export function arrayBufferToString(arrayBuffer: Uint8Array): string {
  return new TextDecoder("utf-8").decode(arrayBuffer);
}

export type CountingTime = {
  hour: string | number;
  min: string | number;
  sec: string | number;
};

export function toDoubleNumber(string: number | string) {
  const newString = String(string);

  if (newString.length < 2) {
    return `0${newString}`;
  }

  return string;
}

export function counter(time: string | number | Date): CountingTime {
  const now = new Date().getTime();
  const end = new Date(time).getTime();

  const diff = end - now;

  if (diff <= 0) {
    return {
      hour: "00",
      min: "00",
      sec: "00",
    };
  }

  const sec = parseInt(String((diff / 1000) % 60));
  const min = parseInt(String((diff / (60 * 1000)) % 60));
  const hour = parseInt(String(diff / (60 * 60 * 1000)));

  return {
    hour: toDoubleNumber(hour),
    min: toDoubleNumber(min),
    sec: toDoubleNumber(sec),
  };
}

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

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function toFormat(value: string | number | BigNumber | undefined) {
  if (value === undefined) return "";
  return new BigNumber(value).toFormat();
}

export function toSignificantFormatted(val: number | string, dig: number = 8) {
  return toSignificant(val, dig, { groupSeparator: "," });
}

export { principalToAddress } from "@icpswap/sdk";
