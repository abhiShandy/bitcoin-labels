#!/bin/sh
docker buildx build --platform linux/arm64,linux/amd64 --tag abhishandy/bitcoin-labels:v0.2.1 --output "type=registry" .