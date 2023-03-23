import { defineConfig } from 'astro/config'
import type { PreRenderedAsset } from 'rollup'

// https://astro.build/config
export default defineConfig({
    vite: {
        build: {
            // cssCodeSplit: false,
            rollupOptions: {
                output: {
                    assetFileNames: (assetInfo: PreRenderedAsset) => {
                        // assetInfo.nameの末尾が".css"の場合
                        if (/\.css$/.test(assetInfo.name!)) return `css/${assetInfo.name}`
                        return 'img/[name].[ext]'
                    }
                }
            }
        }
    }
})