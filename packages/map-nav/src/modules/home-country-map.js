import { color } from '@amcharts/amcharts4/core'

export class HomeCountryMap{
  constructor(code, { map, related }){
    this.map     = map
    this.related = related
  }
  set(){

  }

  style(){
    this.country.fill                      = color('#9a5917')
    this.country.tooltip.getFillFromObject = false
    this.country.tooltip.background.fill   = color('#01463a')
  }
}