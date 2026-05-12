#!/bin/bash
# Simple health check helper
HOST=${1:-http://localhost:3000}
echo "Checking health of $HOST..."
curl -s "$HOST/health" || echo "Failed to connect to $HOST"
echo ""
