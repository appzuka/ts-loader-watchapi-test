# ts-loader experimentalwatchapi test

This repo is to demonstrate behaviour in ts-loader@8.0.1 with experimentalWatchApi.

```shell
yarn install

# Run in watch mode
yarn start

# Run in production mode
yarn build 
```

To see your output simply open up http://localhost:8080 in your browser of choice.

# What should happen

The webpack config includes a simple loader which replaces the word 'World' for 'Replace'. In watch mode, the browser should show:
```
Hello Replace! index.ts V1
Hello Replace! render.ts V1
```
If index.ts or render.ts are edited to 'V2' the text should change in the browser after saving.

With experimentalWatchApi=false in webpack.config.js this is exactly what happens.

With experimentalWatchApi=true the following is displayed:
```
Hello Replace! index.ts V1
Hello World! render.ts V1
```
The loader was not processed for render.ts.  If render.ts is edited to 'V2' the display changes to:
```
Hello Replace! index.ts V1
Hello Replace! render.ts V1
```
Now the loader is being used but the old version of render.ts is shown. Next, render.ts is changed to V3.  Now the display is correct:
```
Hello Replace! index.ts V1
Hello Replace! render.ts V3
```
If render.ts is edited further the edits are reflected in the output correctly.

Similarly, if index.ts is edited the first edit is not shown in the output.

In summary, there are 2 issues:

- The loader is only applied to the entrypoint, index.ts.
- The first edit is not reflected in the build.




