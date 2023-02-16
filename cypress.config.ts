import {defineConfig} from "cypress";
import testConfig from './build/test.json';

export default defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },

  e2e: {
    viewportHeight: 720, // https://www.figma.com/file/YzxoypSoG1mgZeRpwMmkHk/Healthcheck-360-User-web-UI?node-id=138%3A3495
    viewportWidth: 1280, // figma settings
    baseUrl: testConfig.BASE_URL,
    setupNodeEvents(on, config) {
       on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
          launchOptions.args.push('--window-size=1280,720')
          launchOptions.args.push('--force-device-scale-factor=1')
        }
        if (browser.name === 'electron' && browser.isHeadless) {
          launchOptions.preferences.width = 1280
          launchOptions.preferences.height = 720
        }
        if (browser.name === 'firefox' && browser.isHeadless) {
          launchOptions.args.push('--width=1280')
          launchOptions.args.push('--height=720')
        }
        return launchOptions
      })
    },
  },
});
