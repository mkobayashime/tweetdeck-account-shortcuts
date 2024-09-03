wxt = yarn run wxt
biome = yarn run biome

node_modules: package.json yarn.lock
ifeq ($(MAKE_YARN_FROZEN_LOCKFILE), 1)
	yarn install --frozen-lockfile
else
	yarn install
endif
	@touch node_modules

lint: node_modules PHONY
	$(biome) check .

lint.fix: node_modules PHONY
	$(biome) check --fix .

typecheck: node_modules PHONY
	$(typecheck)

typecheck.watch: node_modules PHONY
	$(typecheck) --watch

dev: node_modules PHONY
	 $(wxt)

dev.firefox: node_modules PHONY
	 $(wxt) -b firefox

build: node_modules PHONY
	 $(wxt) build

build.firefox: node_modules PHONY
	 $(wxt) build -b firefox

zip: node_modules PHONY
	 $(wxt) zip

zip.firefox: node_modules PHONY
	 $(wxt) zip -b firefox

compile: node_modules PHONY
	 yarn run tsc --noEmit

PHONY:
