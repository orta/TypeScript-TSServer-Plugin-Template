## A WIP Template for a TypeScript Language Service Plugin

<img src="./docs/screenshot.png">

#### Get Started

```
git clone https://github.com/orta/TypeScript-TSServer-Plugin-Template
cd TypeScript-TSServer-Plugin-Template

# Install deps and run TypeScript
npm i
npx tsc

# Set up the host app to work in
cd example
npm i
cd ..

# Open one VS Code window to work on your plugin
code .

# To have an environment which your plugin runs
# Use this to hook in right as TS Server is booting:
TSS_DEBUG_BRK=9559 code example

# or use this to hook in later:
TSS_DEBUG=9559 code example
```

You can then use the launch option to connect your debugger to the running TSServer in the other window

