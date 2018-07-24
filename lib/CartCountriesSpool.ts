import { Spool } from '@fabrix/fabrix/dist/common'

import * as config from './config/index'
import * as pkg from '../package.json'
import * as api  from './api/index'

export class CartCountriesSpool extends Spool {

  constructor(app) {
    super(app, {
      config: config,
      pkg: pkg,
      api: api
    })
  }
}

