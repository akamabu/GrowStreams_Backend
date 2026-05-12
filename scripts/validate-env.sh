#!/bin/bash
# Checks if all required env vars in .env.example are present in .env
if [ ! -f api/.env.example ]; then echo 'Example file missing'; exit 1; fi
for var in $(grep -v '^#' api/.env.example | cut -d'=' -f1 | grep -v '^$'); do
  if ! grep -q "^$var=" .env; then echo "Missing: $var"; fi
done
