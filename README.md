# Node Micro Boilerplate

Minimal starter files to create a Node.js (TypeScript powered) microservice.

### Environment variables

In project's root directory, create a `.env` file:

```
cp .env.example .env
```

Then fill the values in your `.env` file accordingly.

| Variable            | Description                  |
| :------------------ | :--------------------------- |
| `SERVICE_NAME`      | String. Application's name.  |

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
