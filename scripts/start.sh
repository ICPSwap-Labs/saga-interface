#!/bin/bash
network=${1:-"local"}

chmod 777 ./scripts/env.sh
./scripts/env.sh $network

chmod 777 ./scripts/canister_ids_json.sh
./scripts/canister_ids_json.sh all local

# locales
yarn i18n:extract

yarn start
