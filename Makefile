wxt = bunx wxt
biome = bunx biome

deps: PHONY
	bun install

lint: deps PHONY
	$(biome) check .

lint.fix: deps PHONY
	$(biome) check --fix .

typecheck: deps PHONY
	$(typecheck)

typecheck.watch: deps PHONY
	$(typecheck) --watch

dev: deps PHONY
	 $(wxt)

dev.firefox: deps PHONY
	 $(wxt) -b firefox

build: deps PHONY
	 $(wxt) build

build.firefox: deps PHONY
	 $(wxt) build -b firefox

zip: deps PHONY
	 $(wxt) zip

zip.firefox: deps PHONY
	 $(wxt) zip -b firefox

PHONY:
