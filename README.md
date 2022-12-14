## Installation

```bash
$ npm install
```

## Running the app

Clone ```.env.template``` and rename to ```.env```

```bash
# Start database
$ docker compose up -d

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Production Build
Clone ```.env.template``` and rename to ```.env```

```bash
$ docker-compose -f docker-compose.prod.yaml up --build -d
```
