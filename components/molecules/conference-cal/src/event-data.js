import {DateTime} from 'luxon'

const start   = DateTime.fromISO('2018-11-13T05:00:00.000Z')
const end     = DateTime.fromISO('2018-11-29T11:59:00.000Z')
const streams = ['official','meeting','rio','cepa','side-events','inno']

const events = [
  {
    start:DateTime.fromISO('2018-11-13T05:00:00.000Z'),
    end:DateTime.fromISO('2018-11-13T05:00:00.000Z'),
    title:'Afr.',
    color:'#9e0404',
    stream:'official'
  },
  {
    start:DateTime.fromISO('2018-11-14T05:00:00.000Z'),
    end:DateTime.fromISO('2018-11-15T05:00:00.000Z'),
    title:'HLS',
    color:"#04229e",
    stream:'official'
  },
  {
    start:DateTime.fromISO('2018-11-17T05:00:00.000Z'),
    end:DateTime.fromISO('2018-11-22T05:00:00.000Z'),
    title:'COP-14 & CP/NP MOPs',
    color:"#049e1d",
    stream:'official'
  },
  {
    start:DateTime.fromISO('2018-11-25T05:00:00.000Z'),
    end:DateTime.fromISO('2018-11-29T05:00:00.000Z'),
    title:'COP-14 & CP/NP MOPs',
    color:"#049e1d",
    stream:'official'
  },
  {
    start:DateTime.fromISO('2018-11-14T05:00:00.000Z'),
    end:DateTime.fromISO('2018-11-15T05:00:00.000Z'),
    title:'Business',
    color:"#56049e",
    stream:'meeting'
  },
  {
    start:DateTime.fromISO('2018-11-18T05:00:00.000Z'),
    end:DateTime.fromISO('2018-11-19T05:00:00.000Z'),
    title:'Science',
    color:"#56049e",
    stream:'meeting'
  },
  {
    start:DateTime.fromISO('2018-11-21T05:00:00.000Z'),
    end:DateTime.fromISO('2018-11-21T05:00:00.000Z'),
    title:'Wild',
    color:"#56049e",
    stream:'meeting'
  },
  {
    start:DateTime.fromISO('2018-11-23T05:00:00.000Z'),
    end:DateTime.fromISO('2018-11-24T05:00:00.000Z'),
    title:'IPLCs',
    color:"#56049e",
    stream:'meeting'
  },
  {
    start:DateTime.fromISO('2018-11-23T05:00:00.000Z'),
    end:DateTime.fromISO('2018-11-24T05:00:00.000Z'),
    title:'CITES',
    color:"#56049e",
    stream:'meeting'
  },
  {
    start:DateTime.fromISO('2018-11-23T05:00:00.000Z'),
    end:DateTime.fromISO('2018-11-23T05:00:00.000Z'),
    title:'Law',
    color:"#56049e",
    stream:'meeting'
  },
  {
    start:DateTime.fromISO('2018-11-24T05:00:00.000Z'),
    end:DateTime.fromISO('2018-11-24T05:00:00.000Z'),
    title:'Gti',
    color:"#56049e",
    stream:'meeting'
  },
  {
    start:DateTime.fromISO('2018-11-17T05:00:00.000Z'),
    end:DateTime.fromISO('2018-11-21T05:00:00.000Z'),
    title:'Rio Conventions Pavilion',
    color:"#d3cc04",
    stream:'rio'
  },
  {
    start:DateTime.fromISO('2018-11-25T05:00:00.000Z'),
    end:DateTime.fromISO('2018-11-28T05:00:00.000Z'),
    title:'Rio Conventions Pavilion',
    color:"#d3cc04",
    stream:'rio'
  },
  {
    start:DateTime.fromISO('2018-11-25T05:00:00.000Z'),
    end:DateTime.fromISO('2018-11-28T05:00:00.000Z'),
    title:'Cepa Pavilion',
    color:"#d26e03",
    stream:'cepa'
  },
  {
    start:DateTime.fromISO('2018-11-18T05:00:00.000Z'),
    end:DateTime.fromISO('2018-11-21T05:00:00.000Z'),
    title:'Cepa Pavilion',
    color:"#d26e03",
    stream:'cepa'
  },
  {
    start:DateTime.fromISO('2018-11-17T05:00:00.000Z'),
    end:DateTime.fromISO('2018-11-22T05:00:00.000Z'),
    title:'Side-events',
    color:"#95A5A6",
    stream:'side-events'
  },
  {
    start:DateTime.fromISO('2018-11-25T05:00:00.000Z'),
    end:DateTime.fromISO('2018-11-29T05:00:00.000Z'),
    title:'Side-events',
    color:"#95A5A6",
    stream:'side-events'
  },
  {
    start:DateTime.fromISO('2018-11-18T05:00:00.000Z').startOf('day'),
    end:DateTime.fromISO('2018-11-28T05:00:00.000Z').endOf('day'),
    title:'Innovation Fair',
    color:"#757D75",
    stream:'inno'
  }
]

export default {events, start, end, streams}
