#!/bin/bash
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" -d "$POSTGRES_DB" <<-EOSQL

        CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            first_name VARCHAR(50) NOT NULL,
            last_name VARCHAR (50) NOT NULL,
            username VARCHAR (50) UNIQUE NOT NULL,
            password VARCHAR (50) NOT NULL,
            email VARCHAR (255) UNIQUE NOT NULL,
            create_on TIMESTAMP NOT NULL DEFAULT NOW(),
            last_login TIMESTAMP NOT NULL
        );
EOSQL