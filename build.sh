rm -rf node_modules && \
yarn install && \
cd node_modules/vue-class-component && \
yarn install && \
yarn build && \
cd ../.. 