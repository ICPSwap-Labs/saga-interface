#!/bin/bash

network=$1
mode=$2

copy_env() {
  chmod 777 ./scripts/env.sh
  ./scripts/env.sh $network
}

deploy_local() {
  echo "Deploying local..."

  copy_env

  dfx identity use icpswap-v2

  dfx deploy --network=local --no-wallet --with-cycles=200000000000000000
}

deploy_test() {
  echo "Deploying test..."

  if [ "$mode" = "reinstall" ]; then
    mkdir -p ./.dfx/test/
    rm ./.dfx/test/canister_ids.json
  else
    mkdir -p ./.dfx/test/
    cp -R ./canister_ids_test.json .dfx/test/canister_ids.json
  fi

  copy_env

  dfx identity use icpswap-v2

  dfx deploy --network=test --no-wallet --with-cycles=200000000000000000

  cp -R .dfx/test/canister_ids.json ./canister_ids_test.json 
}

deploy_ic() {
  echo "deploying ic..."

  copy_env

  dfx identity use icpswap-v2
  dfx deploy --wallet=yudqc-5aaaa-aaaak-aacrq-cai --network=ic
}

if [ $network = "test" ]
then
deploy_test

elif [ $network = "ic" ]
then
deploy_ic

else
deploy_local
fi
