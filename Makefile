install:
	yarn install

dev: install
	yarn webpack --mode=development --watch

build: install clear
	yarn webpack --mode=production

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
