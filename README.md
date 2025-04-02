# I tried...
Everything.

----
Migrating it to react-router v7 using the codemod they provide, and it did "something" - & by something, I mean it threw an error about the Remix plugin not being there:
```
> npx remix vite:dev --port 3000

✅ Generated Routes
✅ Generated Routes
Remix Vite plugin not found in Vite config
```
...the same Remix plugin the RR7 docs say to replace with `reactRouter()`

## With Remix + future flags:
```
The following error is a bug in React Router; please open an issue!
https://github.com/remix-run/react-router/issues/new/choose
Route config in "routes.js" is invalid.```
```

This occurs *after* running `npx npm-check-updates -u` on the default Remix project. It updated some of the packages and Remix began listening to future flags (v3).

_See the full stack trace:_
```
sourfruit@occupymars contiguity-web % npm run dev

> dev
> npx remix vite:dev --port 3000

The following error is a bug in React Router; please open an issue! https://github.com/remix-run/react-router/issues/new/choose
Route config in "routes.js" is invalid.

Error: 
    at invariant (file:///Users/sourfruit/Desktop/PROJECTS/contiguity-web/node_modules/rr-next-routes/node_modules/@react-router/dev/dist/routes.js:63:11)
    at getAppDirectory2 (file:///Users/sourfruit/Desktop/PROJECTS/contiguity-web/node_modules/rr-next-routes/node_modules/@react-router/dev/dist/routes.js:69:3)
    at nextRoutes (file:///Users/sourfruit/Desktop/PROJECTS/contiguity-web/node_modules/rr-next-routes/src/next-routes.ts:108:24)
    at /Users/sourfruit/Desktop/PROJECTS/contiguity-web/app/routes.js:3:26
    at ViteNodeRunner.runModule (/Users/sourfruit/Desktop/PROJECTS/contiguity-web/node_modules/@remix-run/dev/node_modules/vite-node/dist/client.cjs:401:5)
    at ViteNodeRunner.directRequest (/Users/sourfruit/Desktop/PROJECTS/contiguity-web/node_modules/@remix-run/dev/node_modules/vite-node/dist/client.cjs:383:5)
    at ViteNodeRunner.cachedRequest (/Users/sourfruit/Desktop/PROJECTS/contiguity-web/node_modules/@remix-run/dev/node_modules/vite-node/dist/client.cjs:208:14)
    at ViteNodeRunner.executeFile (/Users/sourfruit/Desktop/PROJECTS/contiguity-web/node_modules/@remix-run/dev/node_modules/vite-node/dist/client.cjs:171:12)
    at Object.resolveConfig (/Users/sourfruit/Desktop/PROJECTS/contiguity-web/node_modules/@remix-run/dev/dist/config.js:189:32)
    at updateRemixPluginContext (/Users/sourfruit/Desktop/PROJECTS/contiguity-web/node_modules/@remix-run/dev/dist/vite/plugin.js:374:9)

```
