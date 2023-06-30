all: angular node
.PHONY: clean angular node
NG = ng
NG_OUT_DIR = scripts/client

angular:
	mkdir -p $(NG_OUT_DIR)
	cd angular && $(NG) build --configuration production --output-path ../$(NG_OUT_DIR)

node:
	cd scripts && npm --loglevel=error install

clean:
	rm -rf $(NG_OUT_DIR)/*