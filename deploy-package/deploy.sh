#!/usr/bin/env bash
npm run build
aws s3 rm s3://www.guismi.com --recursive
aws s3 cp build/ s3://www.guismi.com --recursive