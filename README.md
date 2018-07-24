# spool-cart-countries

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

[Proxy Cart](https://github.com/fabrix-app/spool-cart) Countries (Shipping Zone and Taxes) has the default supported countries with relatively updated state/province taxes.

## Install

```sh
$ npm install --save spool-proxy-cart-countries
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

[npm-image]: https://img.shields.io/npm/v/spool-proxy-cart-countries.svg?style=flat-square
[npm-url]: https://npmjs.org/package/spool-proxy-cart-countries
[ci-image]: https://img.shields.io/travis/CaliStyle/spool-proxy-cart-countries/master.svg?style=flat-square
[ci-url]: https://travis-ci.org/CaliStyle/spool-proxy-cart-countries
[daviddm-image]: http://img.shields.io/david/CaliStyle/spool-proxy-cart-countries.svg?style=flat-square
[daviddm-url]: https://david-dm.org/CaliStyle/spool-proxy-cart-countries
[codeclimate-image]: https://img.shields.io/codeclimate/github/CaliStyle/spool-proxy-cart-countries.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/CaliStyle/spool-proxy-cart-countries

