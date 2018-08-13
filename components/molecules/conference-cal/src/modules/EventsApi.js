import axios      from 'axios'
import {DateTime} from 'luxon'
const categories = [
                    '5b6b122ba37d960001e7d332', //special event
                    '5aff32171a0ff600010c28a8', // hls
                    '570fd1ac2e3fa5cfa61d90f5', // plenary
                    '5afae4515c6968000113d612', //meetings
                    '5a1db2bb10c9620001d21a97', //cbd meetings
                    '570fd1be2e3fa5cfa61d90f6', //press
                    'Rio Conventions Pavilion', //rio
                    '5b6a0666b37312000197c94b', //cepa
                    '570fd0a52e3fa5cfa61d90ee', //side-events
                    '5b6b13e4a37d960001e7d335'  //ino
                  ]
const streamsMap = {
                    'main'        :[categories[0],categories[1],categories[2]],
                    'parallel'    :[categories[3],categories[4]],
                    'press'       :[categories[5]],
                    'rio'         :[categories[6]],
                    'cepa'        :[categories[7]],
                    'side-events' :[categories[8]],
                    'inno'        :[categories[9]]
                  }

const streams    = Object.keys(streamsMap)

let events     = []
let conference = undefined
let series     = []

class EventsApi {
  static async getSeries(code){
    await EventsApi.getConference(code)

    await EventsApi.getEventsByCategories(code)

    EventsApi.tagEventsByStream()
    return EventsApi.createSeries()
  }

  static getEventsByCategories(code){
    let path = `/api/v2016/reservations/`
    let params = {
      q:{ 'location.conference':code,
          'type':{$in:categories},
          'start':{$exists:true},
          'meta.status':{'$nin':['archived','deleted']}
        },
      f:{'open':1,'confirmed':1,'title':1,'start':1,'end':1,'location':1,'sideEvent.title':1,'sideEvent.hostOrgs':1,'sideEvent.id':1,'type':1,'agenda':1,'seriesId':1},
      s:{'start':1}
    }
    return axios.get(path,{params:params})
            .then(EventsApi.loadEvents)
  }

  static tagEventsByStream(){
    for (var i = 0; i < events.length; i++){
      events[i].stream = EventsApi.getStream(events[i].type)
      events[i].start = DateTime.fromISO(events[i].start,{zone:conference.timezone})
      events[i].end = DateTime.fromISO(events[i].end,{zone:conference.timezone})
    }
  }

  static getStream(type){
    for (var i = 0; i < streams.length; i++)
      if(streamsMap[streams[i]].includes(type))
        return streams[i]
    throw new Error('EventsApi.getStream: stream not found')
  }
  static getStreams(){
    return streams
  }
  static createSeries(){
    if(series.length) return series
    let tempEvents = JSON.parse(JSON.stringify(events))
    for (var i = 0; i < tempEvents.length; i++){
      tempEvents[i].start = DateTime.fromISO(tempEvents[i].start)
      tempEvents[i].end = DateTime.fromISO(tempEvents[i].end)
    }

    series.push(new Series(tempEvents.splice(0,1)[0]))

    while (tempEvents.length){
      let newSeriesFlag = true
      let currentSeries = series[series.length-1]
      for (let i = 0; i < tempEvents.length; i++)
        if(currentSeries.isInSeries(tempEvents[i])){
          currentSeries.addEvent(tempEvents.splice(i,1)[0])
          newSeriesFlag = false
          break;
        }
      if(newSeriesFlag)
        series.push(new Series(tempEvents.splice(0,1)[0]))
    }
    console.log(series)
    return series
  }

  static loadConference({data}){
    return conference = data
  }
  static loadEvents({data}){
    return events = data
  }
  static getConference(code){
    // eslint-disable-next-line

    if(conference) return conference

    let path = `/api/v2016/conferences/${code}`
    let params = {
      f:{'Title':1,'MajorEventIDs':1,'StartDate':1,'EndDate':1,'timezone':1,'schedule':1,'venueId':1,'seTiers':1}
    }
    return axios.get(path,{params:params})
            .then(EventsApi.loadConference)
  }
}



class Series {
  constructor(event){
    this.start = event.start
    this.end   = event.end
    this.events = []
    this.events.push(event)
    this.stream = event.stream
    this.title = event.title
    this.color = 'blue'
    this.seriesId = event.seriesId
    this.testStart = event.start.toUTC().toISODate()
    this.testEnd = event.end.toUTC().toISODate()
  }
  addEvent(event){
    this.events.push(event)
    this.end   = event.end
  }
  isInSeries(event){
//     || !this.seriesId
// && this.seriesId === event.seriesId
    if(event.stream !== this.stream ) return false
    if(event.start.day>=this.start.day && event.start.day<=this.start.day+1 )
      return true
    return false
  }

  plenaryConditions(){
    if(event.stream !== this.stream) return false
    if( startsSameOrConsecutiveDay() && this.seriesId === event.seriesId)
      return true

    return false
  }
  //
  // parallelConditions(){
  //   if(event.stream !== this.stream || !this.seriesId) return false
  //   if(event.start.day>=this.start.day && event.start.day<=this.start.day+1 && this.seriesId === event.seriesId)
  //     return true
  //   return false
  // }

  get length (){
    return (this.end.diff(this.start,'days' ).toObject().days || 0)+1
  }
}

function startsSameOrConsecutiveDay(){
  return (event.start.day>=this.start.day && event.start.day<=this.start.day+1)
}
export default EventsApi
