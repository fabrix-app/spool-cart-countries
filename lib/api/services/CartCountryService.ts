import { FabrixService as Service } from '@fabrix/fabrix/dist/common'
import { forEach, transform, deburr, find, omit } from 'lodash'
import { countryList } from '../../countries/index'


/**
 * @module CartCountryService
 * @description Country Service
 */
export class CartCountryService extends Service {

  /**
   *
   * @param country
   * @param type
   * @returns {*}
   * @private
   */
  _returnCountry(country, type) {
    const normalizeName = (name) => {
      return deburr(name)
        .toLowerCase()
        .replace(/\-/g, ' ')
        .replace(/(\.|\b(the|and|of|de|des|du|di|del|y|da|und|die) \b)/g, '')
        .trim()
    }
    const findIndex = transform(countryList, function (index, _country: {[key: string]: any}, _key) {
      const addToIndex = (name) => {
        if (name) {
          index[normalizeName(name)] = _key
        }
      }
      addToIndex(_country.name)
      forEach(_country.altSpellings, addToIndex)
    })

    let key
    if (type === 'name') {
      key = findIndex[normalizeName(country)]
      return countryList[key]
    }
    else if (type === 'states' || type === 'provinces') {
      key = findIndex[normalizeName(country)]
      return countryList[key].states
    }
    else if (type === 'ISO3' || type === 'IS03') {
      return find(countryList, function (thiscountry) {
        return thiscountry.ISO.alpha3 === country
      })
    }
    else if (type === 'ISO2' || type === 'IS02') {
      return find(countryList, function (thiscountry) {
        return thiscountry.ISO.alpha2 === country
      })
    }
    else if (typeof type === 'undefined') {
      return find(countryList, function (thiscountry) {
        return thiscountry.ISO.alpha2 === country
      })
    }
    else if (typeof type === 'string') {
      key = findIndex[normalizeName(country)]
      let stateKey
      const statesList = countryList[key].states
      const findStateIndex = transform(statesList, function (index, _state: {[key: string]: any}, _key) {
        const addToStateIndex = function (name) {
          if (name) {
            index[normalizeName(name)] = _key
          }
        }
        addToStateIndex(_state.name)
        addToStateIndex(_state.code)
        forEach(_state.altSpellings, addToStateIndex)
      })
      stateKey = findStateIndex[normalizeName(type)]
      const state = statesList[stateKey]
      state.country = omit(countryList[key], 'states')
      return state
    }
    else {
      return find(countryList, function (thisCountry) {
        return thisCountry.ISO.alpha2 === country
      })
    }
  }

  /**
   *
   */
  all() {
    return countryList
  }

  /**
   *
   * @param country
   * @param type
   * @returns {*}
   */
  info(country, type) {
    const ret = this._returnCountry(country, type || 'name')
    if (ret) {
      return ret
    }
  }
  /**
   *
   * @param country
   * @param type
   */
  name(country, type) {
    const ret = this._returnCountry(country, type || 'name')
    if (ret) {
      return ret.name
    }
  }

  /**
   *
   * @param country
   * @param type
   * @returns {CountryService.states}
   */
  states(country, type) {
    const ret = this._returnCountry(country, type)
    if (ret) {
      return ret.states
    }
  }

  /**
   *
   * @param country
   * @param type
   * @returns {CountryService.states}
   */
  provinces(country, type) {
    return this.states(country, type)
  }

  /**
   *
   * @param country
   * @param type
   * @returns {CountryService.altSpellings}
   */
  altSpellings(country, type) {
    const ret = this._returnCountry(country, type)
    if (ret) {
      return ret.altSpellings
    }
  }

  /**
   *
   * @param country
   * @param type
   * @returns {*}
   */
  state(country, type) {
    return this._returnCountry(country, type)
  }

  /**
   *
   * @param country
   * @param type
   * @returns {*}
   */
  province(country, type) {
    return this._returnCountry(country, type)
  }
}
