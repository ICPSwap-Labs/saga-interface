# Introduction

Interface of ICPSwap

# API

## SwapPool

### quote

Get token exchange ratio

```
await quote({
  operator: Principal.fromText("aaaaa-aa"),
  amountIn: "100000000",
  zeroForOne: true,
  amountOutMinimum: "0"
})

```

Parameters:

| Name             | Type      | Description                                        |
| :--------------- | :-------- | :------------------------------------------------- |
| operator         | Principal | operator, or use Principal.fromText("aaaaa-aa")    |
| amountIn         | Text      | How much of token0, or token1, is being swapped in |
| zeroForOne       | Boolean   | Whether the amount in is token0 or token1          |
| amountOutMinimum | Text      | The minimum amount will received                   |

Return Values:

| Name      | Type | Description                      |
| :-------- | :--- | :------------------------------- |
| amountOut | Text | The amount of the received token |

### swap

Exchange the typed amount of token0 to token1

```
await swap({
  operator: Principal.fromText("aaaaa-aa"),
  amountIn: "100000000",
  zeroForOne: true,
  amountOutMinimum: "1000"
})
```

Parameters:

| Name             | Type      | Description                                        |
| :--------------- | :-------- | :------------------------------------------------- |
| operator         | Principal | operator's principal                               |
| amountIn         | Text      | How much of token0, or token1, is being swapped in |
| zeroForOne       | Boolean   | Whether the amount in is token0 or token1          |
| amountOutMinimum | Text      | The minimum amount will received                   |

Return Values:

| Name      | Type | Description                      |
| :-------- | :--- | :------------------------------- |
| amountOut | Text | The amount of the received token |

## SwapFactory

### createPool

Create swap pool by given two tokens and fee

```
public shared(msg) func createPool(
  tokenA: Address,
  tokenAStandard: Text,
  tokenB: Address,
  tokenBStandard: Text,
  fee: Nat,
): async Text;
```

Parameters:

| Name           | Type | Description                             |
| :------------- | :--- | :-------------------------------------- |
| tokenA         | Text | One of the two tokens                   |
| tokenAStandard | Text | Token standard of tokenA (EXT \| DIP20) |
| tokenB         | Text | The other of the two tokens             |
| tokenBStandard | Text | Token standard of tokenB (EXT \| DIP20) |
| fee            | Nat  | The fee of the pool                     |

Return Values:

| Name           | Type | Description                     |
| :------------- | :--- | :------------------------------ |
| poolCanisterId | Text | canister id of the created pool |

### getPool

Get pool canister id by key (token0Address_token1Address_fee)

```
public query func getPool(k: Text): async Text;
```

Parameters:

| Name | Type | Description                   |
| :--- | :--- | :---------------------------- |
| k    | Text | Key of token0, token1 and fee |

Return Values:

| Name           | Type | Description                     |
| :------------- | :--- | :------------------------------ |
| poolCanisterId | Text | canister id of the created pool |

### getPools

Get pools info by keys

```
public query func getPool(k: [Text]): async [Pool];
```

Parameters:

| Name | Type   | Description                    |
| :--- | :----- | :----------------------------- |
| k    | [Text] | Keys of token0, token1 and fee |

Return Values:

| Name  | Type   | Description       |
| :---- | :----- | :---------------- |
| Pools | [Pool] | info of the pools |

### \_getPool

Get pool info by pool key

```
public query func _getPool(k: Text): async Pool;
```

Parameters:

| Name | Type | Description                    |
| :--- | :--- | :----------------------------- |
| k    | Text | Keys of token0, token1 and fee |

Return Values:

| Name | Type | Description      |
| :--- | :--- | :--------------- |
| Pool | Pool | info of the pool |

### getPoolList

Get pool list

```
public func getPoolList(): async [PoolInfo];
```

Return Values:

| Name     | Type       | Description      |
| :------- | :--------- | :--------------- |
| PoolList | [PoolInfo] | info of the pool |

### getPoolListByPage

Get pool list by page

```
public func getPoolListByPage(
  offset: Nat,
  limit: Nat,
): async CommonModel.Page<PoolInfo>;
```

Parameters:

| Name   | Type | Description |
| :----- | :--- | :---------- |
| offset | Nat  | page start  |
| limit  | Nat  | page limit  |

Return Values:

| Name     | Type                       | Description      |
| :------- | :------------------------- | :--------------- |
| PoolList | CommonModel.Page<PoolInfo> | info of the pool |

## SwapPositionManager

### createAndInitializePoolIfNecessary

Create pool

```
public shared(msg) func createAndInitializePoolIfNecessary(
  token0: Address,
  token0Standard: Text,
  token1: Address,
  token1Standard: Text,
  fee: Nat,
  sqrtPriceX96: Text
): async CommonModel.ResponseResult<Address>;
```

Parameters:

| Name           | Type | Description                                                 |
| :------------- | :--- | :---------------------------------------------------------- |
| token0         | Text | The canister id of token0                                   |
| token0Standard | Text | The standard id of token0 (EXT \| DIP20)                    |
| token1         | Text | The canister id of token1                                   |
| token1Standard | Text | The standard id of token1 (EXT \| DIP20)                    |
| fee            | Nat  | The fee amount of pool                                      |
| sqrtPriceX96   | Text | The initial square root price of the pool as a Q64.96 value |

Return Values:

| Name | Type | Description                  |
| :--- | :--- | :--------------------------- |
| pool | Text | The created pool canister id |

### mint

Create a position

```
public shared(msg) func mint(
  params: {
    token0: Address;
    token1: Address;
    fee: Nat;
    tickLower: Int;
    tickUpper: Int;
    amount0Desired: Text;
    amount1Desired: Text;
    amount0Min: Text;
    amount1Min: Text;
    recipient: Principal;
    deadline: Nat;
  }
): async CommonModel.ResponseResult<{
  tokenId: Nat;
  liquidity: Nat;
  amount0: Nat;
  amount1: Nat;
}>;
```

Parameters:

| Name                  | Type      | Description                                                                 |
| :-------------------- | :-------- | :-------------------------------------------------------------------------- |
| params.token0         | Text      | The token0 canister id of pool                                              |
| params.token1         | Text      | The token1 canister id of pool                                              |
| params.fee            | Nat       | The fee amount of pool                                                      |
| params.tickLower      | Int       | The lower tick of position                                                  |
| params.tickUpper      | Int       | The upper tick of position                                                  |
| params.amount0Desired | Text      | The desired token0 amount of this position                                  |
| params.amount1Desired | Text      | The desired token1 amount of this position                                  |
| params.amount0Min     | Text      | The minimum token0 amount of this position                                  |
| params.amount1Min     | Text      | The minimum token1 amount of this position                                  |
| params.recipient      | Principal | The principal for which the liquidity will be created                       |
| params.deadline       | Nat       | Transactions will revert if it is pending for more than this period of time |

Return Values:

| Name      | Type | Description                                         |
| :-------- | :--- | :-------------------------------------------------- |
| tokenId   | Nat  | The position's id                                   |
| liquidity | Nat  | The liquidity amount of this position               |
| amount0   | Nat  | The amount of token0 to achieve resulting liquidity |
| amount1   | Nat  | The amount of token1 to achieve resulting liquidity |

### increaseLiquidity

Increase liquidity within the current range

```
public shared(msg) func increaseLiquidity(
  params: {
    tokenId: Nat;
    amount0Desired: Text;
    amount1Desired: Text;
    amount0Min: Text;
    amount1Min: Text;
    recipient: Principal;
    deadline: Nat;
  }
): async CommonModel.ResponseResult<{
  liquidity: Nat;
  amount0: Nat;
  amount1: Nat;
}>;
```

Parameters:

| Name                  | Type      | Description                                                                 |
| :-------------------- | :-------- | :-------------------------------------------------------------------------- |
| params.tokenId        | Text      | The id of this position result by function mint                             |
| params.amount0Desired | Text      | The desired token0 amount of this position                                  |
| params.amount1Desired | Text      | The desired token1 amount of this position                                  |
| params.amount0Min     | Text      | The minimum token0 amount will be added                                     |
| params.amount1Min     | Text      | The minimum token1 amount will be added                                     |
| params.recipient      | Principal | The principal for which the liquidity will be created                       |
| params.deadline       | Nat       | Transactions will revert if it is pending for more than this period of time |

Return Values:

| Name      | Type | Description                                         |
| :-------- | :--- | :-------------------------------------------------- |
| liquidity | Nat  | The liquidity amount of this position               |
| amount0   | Nat  | The amount of token0 to achieve resulting liquidity |
| amount1   | Nat  | The amount of token1 to achieve resulting liquidity |

### decreaseLiquidity

Decrease liquidity within the current range

```
public shared(msg) func decreaseLiquidity(
  params: {
    tokenId: Nat;
    liquidity: Text;
    amount0Min: Text;
    amount1Min: Text;
    deadline: Nat;
    recipient:Principal;
  }
): async CommonModel.ResponseResult<{
  amount0: Nat;
  amount1: Nat;
}>;
```

Parameters:

| Name              | Type      | Description                                                                 |
| :---------------- | :-------- | :-------------------------------------------------------------------------- |
| params.tokenId    | Text      | The id of this position result by function mint                             |
| params.liquidity  | Text      | The liquidity amount will removed                                           |
| params.amount0Min | Text      | The minimum token0 amount will removed                                      |
| params.amount1Min | Text      | The minimum token1 amount will removed                                      |
| params.recipient  | Principal | The principal for which the liquidity will be created                       |
| params.deadline   | Nat       | Transactions will revert if it is pending for more than this period of time |

Return Values:

| Name    | Type | Description                               |
| :------ | :--- | :---------------------------------------- |
| amount0 | Nat  | The fee amount of token0 you will receive |
| amount1 | Nat  | The fee amount of token1 you will receive |

### collect

Collect the fee amount earned by position

```
public shared(msg) func collect(
  params: {
    tokenId: Nat;
    recipient: Principal;
    amount0Max: Text;
    amount1Max: Text;
    internalCall: Bool;
  }
): async CommonModel.ResponseResult<{
  amount0: Nat;
  amount1: Nat;
}>;
```

Parameters:

| Name                | Type      | Description                                           |
| :------------------ | :-------- | :---------------------------------------------------- |
| params.tokenId      | Text      | The id of this position result by function mint       |
| params.amount0Max   | Text      | The maximum token0 amount you will receive            |
| params.amount1Max   | Text      | The maximum token1 amount you will receive            |
| params.recipient    | Principal | The principal for which the liquidity will be created |
| params.internalCall | Nat       | This is a internal call or not                        |

Return Values:

| Name    | Type | Description                               |
| :------ | :--- | :---------------------------------------- |
| amount0 | Nat  | The fee amount of token0 you will receive |
| amount1 | Nat  | The fee amount of token1 you will receive |

### refreshIncome

Get the fee amount of position

```
public shared(msg) func refreshIncome(
  tokenId: Nat;
): async CommonModel.ResponseResult<{
  amount0: Nat;
  amount1: Nat;
}>;
```

Parameters:

| Name    | Type | Description                                     |
| :------ | :--- | :---------------------------------------------- |
| tokenId | Text | The id of this position result by function mint |

Return Values:

| Name    | Type | Description              |
| :------ | :--- | :----------------------- |
| amount0 | Nat  | The fee amount of token0 |
| amount1 | Nat  | The fee amount of token1 |

### positions

Get details of position

```
public shared(msg) func positions(
  tokenId: Nat;
): async CommonModel.ResponseResult<{
  nonce: Nat;
  operator: Address;
  token0: Address;
  token1: Address;
  fee: Nat;
  tickLower:Int;
  tickUpper: Int;
  liquidity: Nat;
  feeGrowthInside0LastX128: Nat;
  feeGrowthInside1LastX128: Nat;
  tokensOwed0: Nat;
  tokensOwed1: Nat;
  poolId: Nat;
}>;
```

Parameters:

| Name    | Type | Description                                     |
| :------ | :--- | :---------------------------------------------- |
| tokenId | Text | The id of this position result by function mint |

Return Values:

| Name                     | Type | Description                     |
| :----------------------- | :--- | :------------------------------ |
| nonce                    | Nat  | --                              |
| operator                 | Nat  | The owner of this position      |
| token0                   | Nat  | The canister id of token0       |
| token1                   | Nat  | The canister id of token1       |
| fee                      | Nat  | The fee amount of pool          |
| tickLower                | Nat  | The lower tick of this position |
| tickUpper                | Nat  | The upper tick of this position |
| liquidity                | Nat  | The liquidity amount            |
| feeGrowthInside0LastX128 | Nat  | --                              |
| feeGrowthInside1LastX128 | Nat  | --                              |
| tokensOwed0              | Nat  | --                              |
| tokensOwed1              | Nat  | --                              |
| poolId                   | Nat  | The number id of liquidity pool |

### getTickInfos

Get all ticks of a liquidity pool

```
public func getTickInfos(
  poolKey: Text;
): async CommonModel.ResponseResult<[{
  liquidityNet: Int;
  price0: Nat;
  price1: Nat;
  tickIndex: Int;
  price0Decimal: Nat;
  price1Decimal: Nat;
}]>;
```

Parameters:

| Name    | Type | Description |
| :------ | :--- | :---------- |
| poolKey | Text | Pool key    |

Return Values:

| Name          | Type | Description            |
| :------------ | :--- | :--------------------- |
| liquidityNet  | Nat  | liquidity amount       |
| price0        | Nat  | The price of token0    |
| price1        | Nat  | The price of token1    |
| tickIndex     | Nat  | The index of this tick |
| price0Decimal | Nat  | Token0's decimal       |
| price1Decimal | Nat  | Token1's decimal       |

### ownerTokens

Get user's position token index by address

```
public func ownerTokens(
  ownerAddress: Text;
): async CommonModel.ResponseResult<[Nat]>;
```

Parameters:

| Name         | Type | Description           |
| :----------- | :--- | :-------------------- |
| ownerAddress | Text | User's wallet address |

Return Values:

| Name   | Type  | Description                                  |
| :----- | :---- | :------------------------------------------- |
| tokens | [Nat] | An array of token index which the user owned |

### getPoolTVL

Get the liquidity pool TVL value

```
public func getPoolTVL(
  poolKeys: [Text];
): async CommonModel.ResponseResult<[{
  token0TVL: Nat;
  token1TVL: Nat;
}]>;
```

Parameters:

| Name     | Type   | Description |
| :------- | :----- | :---------- |
| poolKeys | [Text] | Pool keys   |

Return Values:

| Name      | Type | Description                     |
| :-------- | :--- | :------------------------------ |
| token0TVL | Nat  | The TVL value of token0 in pool |
| token1TVL | Nat  | The TVL value of token1 in pool |

### getTotalVolume

Get the liquidity pool total volume

```
public func getTotalVolume(
  poolKey: Text;
): async CommonModel.ResponseResult<{
  tokenA: Nat;
  tokenB: Nat;
}>;
```

Parameters:

| Name    | Type | Description |
| :------ | :--- | :---------- |
| poolKey | Text | Pool key    |

Return Values:

| Name   | Type | Description          |
| :----- | :--- | :------------------- |
| tokenA | Nat  | The amount of tokenA |
| tokenB | Nat  | The amount of tokenB |

## SwapPool

### info

Get pool info

```
public func info(): async CommonModel.ResponseResult<{
  token0: Text;
  token1: Text;
  fee: Nat;
  sqrtRatioX96: Nat;
  liquidity: Nat;
  tickCurrent: Int;
  ticks: [Int];
  balance0: Nat;
  balance1: Nat;
  pool: Text;
}>;
```

Return Values:

| Name         | Type | Description                                       |
| :----------- | :--- | :------------------------------------------------ |
| token0       | Text | The canister id of token0                         |
| token1       | Text | The canister id of token1                         |
| fee          | Nat  | The fee amount                                    |
| sqrtRatioX96 | Nat  | A sqrt price representing the current pool prices |
| liquidity    | Nat  | The liquidity amount of the pool                  |
| tickCurrent  | Nat  | The current tick                                  |
| ticks        | Nat  | All tick in the pool                              |
| balance0     | Nat  | The amount of token0                              |
| balance1     | Nat  | The amount of token1                              |
| pool         | Nat  | The canister id of pool                           |

### infoWithNoBalance

Get pool info which balance is 0

```
public query func infoWithNoBalance(): async CommonModel.ResponseResult<{
  token0: Text;
  token1: Text;
  fee: Nat;
  sqrtRatioX96: Nat;
  liquidity: Nat;
  tickCurrent: Int;
  ticks: [Int];
  balance0: Nat;
  balance1: Nat;
  pool: Text;
}>;
```

Return Values:

| Name         | Type | Description                                       |
| :----------- | :--- | :------------------------------------------------ |
| token0       | Text | The canister id of token0                         |
| token1       | Text | The canister id of token1                         |
| fee          | Nat  | The fee amount                                    |
| sqrtRatioX96 | Nat  | A sqrt price representing the current pool prices |
| liquidity    | Nat  | The liquidity amount of the pool                  |
| tickCurrent  | Nat  | The current tick                                  |
| ticks        | Nat  | All tick in the pool                              |
| balance0     | Nat  | The amount of token0 (always is 0)                |
| balance1     | Nat  | The amount of token1 (always is 0)                |
| pool         | Nat  | The canister id of pool                           |

### getStandard

Get the two tokens standard in pool

```
public query func getStandard(
  token: Text
): async CommonModel.ResponseResult<Text>;
```

Parameters:

| Name  | Type | Description              |
| :---- | :--- | :----------------------- |
| token | Text | The canister id of token |

Return Values:

| Name     | Type | Description           |
| :------- | :--- | :-------------------- |
| standard | Text | The standard of token |

## 4fpgw-4aaaa-aaaag-qblka-cai

### getPool

```
query (poolId: Text) -> async PoolOverview

await getPool("pool canister id")

```

Parameters:

| Name   | Type   | Description             |
| :----- | :----- | :---------------------- |
| poolId | string | The canister id of pool |

Return Values:

| Name                | Type   | Description                             |
| :------------------ | :----- | :-------------------------------------- |
| id                  | number | id                                      |
| token0Id            | string | canister id of token0                   |
| token1Id            | string | canister id of token1                   |
| totalVolumeUSD      | number | USD value of total volume               |
| sqrtPrice           | number | --                                      |
| tvlToken0           | number | tvl of token0                           |
| tvlToken1           | number | tvl of token1                           |
| pool                | string | canister id of pool                     |
| tick                | number | tick of pool                            |
| liquidity           | number | liquidity of pool                       |
| feeTier             | number | fee of pool                             |
| volumeUSD           | number | USD value of volume                     |
| volumeUSDChange     | number | USD value changed of volume in one day  |
| feesUSD             | number | USD value of fees                       |
| feesUSDChange       | number | USD value changed of fees in one day    |
| tvlUSD              | number | USD value of tvl                        |
| tvlUSDChange        | number | USD value changed of tvl in one day     |
| volumeUSDWeek       | number | USD value of volume in one week         |
| volumeUSDWeekChange | number | USD value of volume changed in one week |
| txCount             | number | total transactions count                |
| token0Standard      | string | standard of token0                      |
| token0Symbol        | string | symbol of token0                        |
| token0Decimals      | number | decimals of token0                      |
| token0Price         | number | price of token0                         |
| token1Standard      | string | Token standard of token1                |
| token1Symbol        | string | symbol of token1                        |
| token1Decimals      | number | decimals of token1                      |
| token1Price         | number | The price of token1                     |
