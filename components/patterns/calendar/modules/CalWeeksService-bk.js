
import {DateTime} from 'Luxon'
import Vue        from 'Vue'
import VueI18n    from 'vue-i18n'
Vue.use(VueI18n)

export default class {

    constructor(weekDateTime,locale='en'){


        Vue.set(this,'iterations',[])
        this.weekIterations(weekDateTime)

    }

    get selected(){
      return this.iterations[7]
    }

    weekIterations(weekDateTime){
        weekDateTime.setLocale(this.locale)

        this.weekDateTime  = weekDateTime.startOf('week') || DateTime.local().startOf('week')

        this.startWeek   = weekDateTime.minus({weeks:7}).startOf('week')
        this.endWeek     = weekDateTime.plus({weeks:7}).startOf('week')

        for (let i = 0; i < 15; i++)
          this.iterations[i] = this._getWeek(this.startWeek.plus({weeks:i}))

    }

    add(number){
      if(number<0) this._fromRight(number)
      if(number>0) this._fromLeft(number)
    }

    setLocale(locale){
      this._initI18n(locale)
      for (var i = 0; i < this.iterations.length; i++) {
          for (let prop in this.iterations[i])
            if(typeof this.iterations[i][prop] === 'object')
              if(this.iterations[i][prop].constructor.name==='DateTime')
                this.iterations[i][prop].setLocale(locale)

      }
    }



    _fromLeft(number){
      for (var i = 0; i < number; i++) {
        let newWeek = this._getWeek(this.iterations[0].startDateTime.minus({weeks:1}).startOf('week'))

        setTimeout(() =>{
          Vue.nextTick(()=>this.iterations.pop())
        }, 400);
        this.iterations.unshift(newWeek)

      }
    }

    _fromRight(number){
      number = number*-1
      for (var i = 0; i < number; i++) {
        let newWeek = this._getWeek(this.iterations[14].startDateTime.plus({weeks:1}).startOf('week'))
        this.iterations.push(newWeek)
        setTimeout(() =>{
          Vue.nextTick(()=>this.iterations.shift())
        },400)
      }
    }
    _generateTitle(aWeek){
      return `${aWeek.startMon} ${aWeek.startDay} - ${aWeek.endMon} ${aWeek.endDay}`
    }
    _generateSubTitle(aWeek){
      return `${aWeek.year} (${this.$i18n.t('week')} ${aWeek.weekNumber})`
    }
    _getWeek(aDateTime){
        aDateTime.setLocale(this.locale)

        let type            = 'week'

        let weekNumber      = aDateTime.weekNumber
        let year            = aDateTime.toFormat('yyyy')

        let startDateTime   = aDateTime.startOf('week')
        let startMon        = aDateTime.toFormat('MMM')
        let startMonth      = aDateTime.toFormat('MMMM')
        let startDay        = startDateTime.day

        let endDateTime   = aDateTime.endOf('week')
        let endMon        = ''
        let endMonth      = ''

        if(startMon!==endDateTime.toFormat('MMM')){
          endMon        = endDateTime.toFormat('MMM')
          endMonth      = endDateTime.toFormat('MMMM')
        }
        let endDay        = endDateTime.day

        let thisWeek = {type,year,weekNumber,startDateTime,startMon,startMonth,startDay,endDateTime,endMon,endMonth,endDay}
        thisWeek.title    = this._generateTitle(thisWeek)
        thisWeek.subTitle = this._generateSubTitle(thisWeek)

        return thisWeek
    }
}

class Week{
  constructor(aDateTime,locale){

      this.type            = 'week'
      this.aDateTime       = aDateTime
      this._initI18n(locale)
  }

  _initI18n(locale){
    this.locale=locale

    let options = {
      locale: locale,
      fallbackLocale: 'en',
      silentTranslationWarn: true,
      sync:true,
      messages: {
        en: require(`../locales/en.json`),
        fr: require(`../locales/fr.json`)
      }
    }

    this.$i18n = new VueI18n(options)
  }
  get weekNumber(){
    return this.aDateTime.setLocale(this.locale).weekNumber
  }
  get year(){
    return this.aDateTime.setLocale(this.locale).toFormat('yyyy')
  }
  get startDateTime(){
    return this.aDateTime.setLocale(this.locale).startOf('week')
  }
  get startMon (){
    return this.startDateTime.setLocale(this.locale).toFormat('MMM')
  }
  get startMonth (){
    return this.startDateTime.setLocale(this.locale).toFormat('MMMM')
  }
  get startDay (){
    return this.startDateTime.setLocale(this.locale).day
  }
  get endDateTime (){
    return this.startDateTime.setLocale(this.locale).endOf('week')
  }
  get endMon (){
    if(this.startMon === this.endDateTime.setLocale(this.locale).toFormat('MMM'))
      return ''
    return this.endDateTime.setLocale(this.locale).toFormat('MMM')
  }
  get endMonth (){
    if(this.startMonth === this.endDateTime.setLocale(this.locale).toFormat('MMMM'))
      return ''
    return this.endDateTime.setLocale(this.locale).toFormat('MMMM')
  }
  get endDay (){
    return this.endDateTime.setLocale(this.locale).day
  }
  get title (){
    return `${this.startMon} ${this.startDay} - ${this.endMon} ${this.endDay}`
  }
  get subTitle (){
    return `${this.year} (${this.$i18n.t('week')} ${this.weekNumber})`
  }

}
