# spool-cart-countries

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Follow @FabrixApp on Twitter][twitter-image]][twitter-url]

[Cart](https://github.com/fabrix-app/spool-cart) Countries (Shipping Zone and Taxes) has the default supported countries with relatively updated state/province taxes.

## Install

```sh
$ npm install --save @fabrix/spool-cart-countries
```

## Configure

```js
// config/main.ts
export const main = {
  spools: [
    // ... other spools
    require('@fabrix/spool-cart-countries').CartCountriesSpool
  ]
}
```

[npm-image]: https://img.shields.io/npm/v/@fabrix/spool-cart-countries.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fabrix/spool-cart-countries
[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/spool-cart-countries/master.svg
[ci-url]: https://circleci.com/gh/fabrix-app/spool-cart-countries/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/spool-cart-countries.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/spool-cart-countries
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/Lobby
[twitter-image]: https://img.shields.io/twitter/follow/FabrixApp.svg?style=social
[twitter-url]: https://twitter.com/FabrixApp
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/fabrix-app/spool-cart-countries.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/fabrix-app/spool-cart-countries/coverage
