'use strict'

const FabrixApp = require('@fabrix/fabrix').FabrixApp

before(() => {
  global.app = new FabrixApp(require('./fixtures/app'))
return global.app.start().catch(global.app.stop)
})

after(() => {
  return global.app.stop()
})
