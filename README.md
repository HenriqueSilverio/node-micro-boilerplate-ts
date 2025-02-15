# Node Micro Boilerplate

Minimal starter files to create a Node.js (TypeScript powered) microservice.

## Docker

### Build

```bash
docker build -t boilerplate .
```

### Run

```bash
docker run \
  --rm -it \
  --name boilerplate \
  -e SERVICE_NAME="Node Micro Boilerplate" \
  boilerplate
```

### Access

```bash
docker exec -it boilerplate /bin/sh
```
