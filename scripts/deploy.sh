#!/bin/bash
chmod 777 ./scripts/env.sh
./scripts/env.sh ic

dfx identity use icpswap-v2
dfx deploy --wallet=$(dfx identity --network=ic get-wallet) --network=ic
