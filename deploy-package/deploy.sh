#!/usr/bin/env bash
npm run build
cp deploy-package/appspec.yml build/
cp deploy-package/scripts/uninstall.sh build/
aws deploy push --application-name GUISMI --s3-location s3://guismi-api-codebuild-input-bucket/guismi.zip --source build/
cd  cd build/ 
aws deploy create-deployment --application-name GUISMI --s3-location bucket=guismi-api-codebuild-input-bucket,key=guismi.zip,bundleType=zip --deployment-group-name GUISMI-APP --deployment-config-name CodeDeployDefault.AllAtOnce