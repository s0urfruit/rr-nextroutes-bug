import { vitePlugin as remix } from "@remix-run/dev"
import { defineConfig } from "vite"
import { vercelPreset } from "@vercel/remix/vite"
import { createRoutesFromFolders } from "@remix-run/v1-route-convention"
import path from "path"


export default defineConfig({
	plugins: [
		remix({
			future: {
				v3_routeConfig: true,
                v3_relativeSplatPath: true,
                v3_throwAbortReason: true,
			},
			//routes: async (defineRoutes) => {
			//    return createRoutesFromFolders(defineRoutes, {
			//		ignoredFilePatterns: ["**/.*", "**/*.css"],
			//	})
			//},
		}),
	],
	resolve: {
		alias: {
			"~": path.resolve(__dirname),
			"@": path.resolve(__dirname, "app"),
		},
	},
})
