install:
	yarn install

dev: install
	yarn webpack --mode=development --watch --config config/webpack.config.js

build: install clear
	yarn webpack --mode=production --config config/webpack.config.js

clear:
	rm -rf build

lint:
	yarn eslint .

lint.fix:
	yarn eslint --fix .
