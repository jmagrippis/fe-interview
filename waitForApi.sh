#!/bin/bash

until curl http://localhost:3002
do
  sleep 1
done
