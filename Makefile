install:
	yarn install

dev: install
	NODE_ENV=development yarn webpack --watch

build: install clear
	NODE_ENV=production yarn webpack

clear:
	rm -rf build

lint:
	yarn eslint .

lint.fix:
	yarn eslint --fix .

format:
	yarn run prettier --write .

format.check:
	yarn run prettier --check .
