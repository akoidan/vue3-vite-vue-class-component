import {resolve} from "path";
import viteChecker from "vite-plugin-checker";
import vue from "@vitejs/plugin-vue";
import Inspector from "vite-plugin-vue-inspector";
import {splitVendorChunkPlugin} from "vite";
import viteVisualizer from "rollup-plugin-visualizer";
import {OutputChunk} from "rollup";

export function getConfig(consts: {IS_DEBUG?: boolean, PUBLIC_PATH?: string, PORT?: number}) {
  const srcDir = resolve(__dirname, '..', 'src');
  const distDir = resolve(__dirname, '..', 'dist');
  const plugins = [viteChecker({
    typescript: true,
    vueTsc: true,
  })];
  // plugins.push(viteCompression({
  //   filter: () => true,
  // }))
  return {
    resolve: {
      alias: [
        {find: '@', replacement: srcDir},
      ],
    },
    ...(consts.PUBLIC_PATH ? {base: consts.PUBLIC_PATH} : null),
    root: srcDir,
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        sass: {
          additionalData: `
            @import "@/assets/sass/global-variables.sass"
            @import "@/assets/sass/global-mixins.sass"
          `,
        },
      },
    },
    plugins: [
      vue(),
      Inspector({
        vue: 3,
      }),
      ...plugins,
      splitVendorChunkPlugin(),
    ],
    build: {
      emptyOutDir: true,
      assetsInlineLimit: 0,
      minify: !consts.IS_DEBUG,
      outDir: distDir,
      sourcemap: true,
      rollupOptions: {
        plugins: process.env.ANALYZE ? [] : [
          viteVisualizer({
            filename: resolve(__dirname, 'stats.html'),
          })
        ],
        input: {
          index: resolve(srcDir, 'index.html'), //index should be inside src, otherwise vite won't return it by default
        },
        output: {
          assetFileNames: (assetInfo) => {
            let dirName = '';
            if (/\.(mp3|wav)$/.test(assetInfo.name!)) {
              dirName = `sounds/`;
            } else if (/((fonts?\/.*\.svg)|(\.(woff2?|eot|ttf|otf)))(\?.*)?/.test(assetInfo.name!)) {
              dirName = `font/`;
            } else if (/\.(png|jpg|svg|gif|ico)$/.test(assetInfo.name!)) {
              dirName = `img/`;
            } else if (/\.css$/.test(assetInfo.name!)) {
              dirName = `css/`;
            }
            return `${dirName}[name]-[hash].[ext]`
          },
          chunkFileNames(assetInfo: OutputChunk) {
            return 'js/[name]-[hash].js';
          },
          entryFileNames: 'js/[name]-[hash].js',
        },
      },
    },
    server: {
      port: consts.PORT,
    },
    define: {
      APP_CONSTS: JSON.stringify(consts)
    }
  }
}
