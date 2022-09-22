# image-processing


## Scripts to run:
* build: to build dist folder containing all js created js files
* test: for testing
* start: to run (node dist/index.js)



## Only one endpoint:
* GET http://localhost:3000/?fileName=value&width=value&height=value
* Example: http://localhost:3000/?fileName=fjord&width=300&height=150


## Notes
|src/utilities contain two middleware function files:
|    validation Utility file to validate the params of the url
|    image Utility file to create or check the existence of the specified version of the image



