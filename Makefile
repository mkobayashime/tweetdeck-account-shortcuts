install:
	yarn install

dev: install
	yarn webpack --mode=development --watch --config config/webpack.config.js

build: install
	yarn webpack --mode=production --config config/webpack.config.js

lint:
	yarn eslint src/**/*.js

lintfix:
	yarn eslint --fix src/**/*.js
