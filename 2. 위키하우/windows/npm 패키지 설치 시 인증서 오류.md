```text
> Downloading Prisma engines for Node-API for windows [                    ] 0%Error: request to https://binaries.prisma.sh/all_commits/81e4af48011447c3cc503a190e86995b66d2a28e/windows/schema-engine.exe.gz.sha256 failed, reason: self-signed certificate in certificate chain

```

방법
1. CMD 관리자 -> 해결 불가
2. `npm config set strict-ssl false -g` -> 해결 불가
3. `npm install --unsafe-perm prisma`
4. set NODE_TLS_REJECT_UNAUTHORIZED=0 -> 해결