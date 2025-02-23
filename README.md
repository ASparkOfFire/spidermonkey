# Building and Running SpiderMonkey with WASI

## 1. Bootstrap the System
Run the following commands to set up the required dependencies:

```sh
# Download and run Mozilla's bootstrap script
curl -O https://hg.mozilla.org/mozilla-central/raw-file/default/python/mozboot/bin/bootstrap.py
python3 bootstrap.py --vcs=git

# Add the WebAssembly target for Rust
rustup target add wasm32-wasi

# Install Wasmtime (WebAssembly runtime)
curl https://wasmtime.dev/install.sh -sSf | bash
```

After running these commands, you can delete the `mozilla-unified` directory if it was created during bootstrapping.

---

## 2. Compile SpiderMonkey for WASI

```sh
./js/src/devtools/automation/autospider.py wasi
```

This script will automatically configure and build SpiderMonkey for the WASI target.

---

## 3. Run SpiderMonkey with Wasmtime

```sh
wasmtime obj-spider/js.wasm
```

This executes the compiled WebAssembly SpiderMonkey binary using Wasmtime.

