'use strict'
/* global describe, it */
const assert = require('assert')

describe('CountryService', () => {
  let CountryService
  before((done) => {
    CountryService = global.app.services.CartCountryService
    done()
  })

  it('should exist', () => {
    assert(global.app.api.services['CartCountryService'])
  })
  it('should get name using approximate string matching', (done) => {
    const searches = {
      'CA': 'Canada',
      'U.S.A.': 'United States',
      'THE GREAT BRITAIN': 'United Kingdom'
    }
    Object.keys(searches).forEach(function (search) {
      const tester = CountryService.name(search)
      // console.log('term:', search, searches[search])
      // console.log('result:', tester)
      assert(typeof tester === 'string')
      assert.equal(tester, searches[search])
    })
    done()
  })
  it('should get all available info using approximate string matching', (done) => {
    const searches = {
      'CA': 'Canada',
      'U.S.A.': 'United States',
      'THE GREAT BRITAIN': 'United Kingdom'
    }
    Object.keys(searches).forEach(function (search) {
      const tester = CountryService.info(searches[search])
      // console.log('term:', search, searches[search])
      // console.log('result:', tester)
      assert(typeof tester === 'object')
      assert.equal(tester.name, searches[search])
    })
    done()
  })
  it('should get all available info using IS02 matching', (done) => {
    const searches = {
      'CA': 'Canada',
      'US': 'United States',
      'GB': 'United Kingdom'
    }
    Object.keys(searches).forEach(function (search) {
      const tester = CountryService.name(search, 'IS02')
      // console.log('term:', search, searches[search])
      // console.log('result:', tester)
      assert(typeof tester === 'string')
      assert.equal(tester, searches[search])
    })
    done()
  })
  it('should get all available info using IS03 matching', (done) => {
    const searches = {
      'CAN': 'Canada',
      'USA': 'United States',
      'GBR': 'United Kingdom'
    }
    Object.keys(searches).forEach(function (search) {
      const tester = CountryService.name(search, 'IS03')
      // console.log('term:', search, searches[search])
      // console.log('result:', tester)
      assert(typeof tester === 'string')
      assert.equal(tester, searches[search])
    })
    done()
  })
  it('should get list of states for United States', (done) => {
    const tester = CountryService.states('US')
    assert(typeof tester === 'object') // Array
    assert.equal(tester.length, 57)
    assert(typeof tester[0] === 'object')
    done()
  })
  it('should get list of states for United States', (done) => {
    const tester = CountryService.provinces('US')
    assert(typeof tester === 'object') // Array
    assert.equal(tester.length, 57)
    assert(typeof tester[0] === 'object')
    done()
  })
  it('should get name for United States', function (done) {
    const tester = CountryService.name('US')
    assert(typeof tester === 'string')
    assert.equal(tester, 'United States')
    done()
  })
  it('should get alternate spellings for United States', function (done) {
    const tester = CountryService.altSpellings('US')
    assert(typeof tester === 'object') // Array
    assert.equal(tester.length, 3)
    assert(typeof tester[0] === 'string')
    done()
  })
  it('should get state object for Indiana United States', function (done) {
    const tester = CountryService.name('US', 'IN')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Indiana')
    done()
  })
  it('should get state object for Indiana United States', function (done) {
    const tester = CountryService.state('USA', 'Indiana')
    assert(typeof tester === 'object')
    assert.equal(tester.code, 'IN')
    assert.equal(tester.name, 'Indiana')
    done()
  })
  it('should get state object for IN US', function (done) {
    const tester = CountryService.state('US', 'IN')
    // console.log(tester)
    assert(typeof tester === 'object')
    assert.equal(tester.code, 'IN')
    assert.equal(tester.name, 'Indiana')
    assert(typeof tester.country === 'object')
    assert.equal(tester.country.name, 'United States')
    done()
  })
  it('should be undefined for a mismatched country identifier', function (done) {
    const tester = CountryService.states('UX')
    assert(typeof tester == 'undefined')
    done()
  })
  it('should be undefined for a mismatched country identifier (other methods)', function (done) {
    const methods = [
      'states',
      'provinces',
      'name',
      'altSpellings'
    ]
    methods.forEach(function (method) {
      const tester = CountryService[method]('UX')
      assert(typeof tester === 'undefined')
    })
    done()
  })

  // Argentia
  it('should get name for Argentina', function (done) {
    const tester = CountryService.name('AR')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Argentina')
    done()
  })
  // Australia
  it('should get name for Australia', function (done) {
    const tester = CountryService.name('AU')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Australia')
    done()
  })
  // Austria
  it('should get name for Austria', function (done) {
    const tester = CountryService.name('AT')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Austria')
    done()
  })
  // Bangladesh
  it('should get name for Argentina', function (done) {
    const tester = CountryService.name('BD')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Bangladesh')
    done()
  })
  // Belgium
  it('should get name for Belgium', function (done) {
    const tester = CountryService.name('BE')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Belgium')
    done()
  })
  // Bolivia
  it('should get name for Bolivia', function (done) {
    const tester = CountryService.name('BO')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Bolivia')
    done()
  })
  // Brazil
  it('should get name for Brazil', function (done) {
    const tester = CountryService.name('BR')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Brazil')
    done()
  })
  // Cambodia
  it('should get name for Cambodia', function (done) {
    const tester = CountryService.name('KH')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Cambodia')
    done()
  })
  // Canada
  it('should get name for Canada', function (done) {
    const tester = CountryService.name('CA')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Canada')
    done()
  })
  // Chile
  it('should get name for Chile', function (done) {
    const tester = CountryService.name('CL')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Chile')
    done()
  })
  // China
  it('should get name for China', function (done) {
    const tester = CountryService.name('CN')
    assert(typeof tester === 'string')
    assert.equal(tester, 'China')
    done()
  })
  // Colombia
  it('should get name for Colombia', function (done) {
    const tester = CountryService.name('CO')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Colombia')
    done()
  })
  // Cuba
  it('should get name for Cuba', function (done) {
    const tester = CountryService.name('CU')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Cuba')
    done()
  })
  // Denmark
  it('should get name for Denmark', function (done) {
    const tester = CountryService.name('DK')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Denmark')
    done()
  })
  // Ethiopia
  it('should get name for Ethiopia', function (done) {
    const tester = CountryService.name('ET')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Ethiopia')
    done()
  })
  // Finland
  it('should get name for Finland', function (done) {
    const tester = CountryService.name('FI')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Finland')
    done()
  })
  // France
  it('should get name for France', function (done) {
    const tester = CountryService.name('FR')
    assert(typeof tester === 'string')
    assert.equal(tester, 'France')
    done()
  })
  // Germany
  it('should get name for Germany', function (done) {
    const tester = CountryService.name('DE')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Germany')
    done()
  })
  // India
  it('should get name for India', function (done) {
    const tester = CountryService.name('IN')
    assert(typeof tester === 'string')
    assert.equal(tester, 'India')
    done()
  })
  // Indonesia
  it('should get name for Indonesia', function (done) {
    const tester = CountryService.name('ID')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Indonesia')
    done()
  })
  // Italy
  it('should get name for Italy', function (done) {
    const tester = CountryService.name('IT')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Italy')
    done()
  })
  // Japan
  it('should get name for Japan', function (done) {
    const tester = CountryService.name('JP')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Japan')
    done()
  })
  // Jordan
  it('should get name for Jordan', function (done) {
    const tester = CountryService.name('JO')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Jordan')
    done()
  })
  // Mexico
  it('should get name for Mexico', function (done) {
    const tester = CountryService.name('MX')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Mexico')
    done()
  })
  // Netherlands
  it('should get name for Netherlands', function (done) {
    const tester = CountryService.name('NL')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Netherlands')
    done()
  })
  // Nigeria
  it('should get name for Nigeria', function (done) {
    const tester = CountryService.name('NG')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Nigeria')
    done()
  })
  // Pakistan
  it('should get name for Pakistan', function (done) {
    const tester = CountryService.name('PK')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Pakistan')
    done()
  })
  // Panama
  it('should get name for Panama', function (done) {
    const tester = CountryService.name('PA')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Panama')
    done()
  })
  // Peru
  it('should get name for Peru', function (done) {
    const tester = CountryService.name('PE')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Peru')
    done()
  })
  // Philippines
  it('should get name for Philippines', function (done) {
    const tester = CountryService.name('PH')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Philippines')
    done()
  })
  // Russia
  it('should get name for Russia', function (done) {
    const tester = CountryService.name('RU')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Russia')
    done()
  })
  // South Korea
  it('should get name for South Korea', function (done) {
    const tester = CountryService.name('KR')
    assert(typeof tester === 'string')
    assert.equal(tester, 'South Korea')
    done()
  })
  // Spain
  it('should get name for Span', function (done) {
    const tester = CountryService.name('ES')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Spain')
    done()
  })
  // Sweden
  it('should get name for Sweden', function (done) {
    const tester = CountryService.name('SE')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Sweden')
    done()
  })
  // Turkey
  it('should get name for Turkey', function (done) {
    const tester = CountryService.name('TR')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Turkey')
    done()
  })
  // United Kingdom
  it('should get name for United Kingdom', function (done) {
    const tester = CountryService.name('UK')
    assert(typeof tester === 'string')
    assert.equal(tester, 'United Kingdom')
    done()
  })
  // United States
  it('should get name for United States', function (done) {
    const tester = CountryService.name('US')
    assert(typeof tester === 'string')
    assert.equal(tester, 'United States')
    done()
  })
  // Vietnam
  it('should get name for Vietnam', function (done) {
    const tester = CountryService.name('VN')
    assert(typeof tester === 'string')
    assert.equal(tester, 'Vietnam')
    done()
  })
})
