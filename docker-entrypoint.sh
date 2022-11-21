#!/bin/bash
dockerize -wait tcp://postgres:5432 -timeout 20s
npm install
npx sequelize db:migrate

