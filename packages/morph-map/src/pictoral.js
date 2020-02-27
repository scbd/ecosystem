
import { SlicedChart, PictorialStackedSeries } from '@amcharts/amcharts4/charts'
import { create, useTheme                    } from '@amcharts/amcharts4/core'
import   am4themes_animated                    from '@amcharts/amcharts4/themes/animated' // eslint-disable-line

useTheme(am4themes_animated)

let chart
let series
let element

const iconPath = 'M41.7491041,27.7892172 L49.1434638,27.3970842 C62.081773,26.6835477 62.3397279,16.8469378 62.3428483,16.759566 L62.3428483,-5.74387638 L61.2621422,-5.84893058 L61.1993158,-5.57548705 C60.7992582,-3.9614868 58.351729,4.25817285 49.9755763,4.68041292 L41.4963499,5.07878682 C34.3360218,5.43243462 30.7236134,9.82806892 28.9366518,14.0635215 C27.1590515,18.2750509 27.1372086,22.3867268 27.1372086,22.4137704 L27.1372086,38.2062255 C26.9312607,37.5114116 26.7045101,36.8571632 26.4423946,36.2403598 C24.655433,32.0017867 21.0419845,27.610313 13.8837367,27.2504243 L5.40347025,26.856211 C-0.163362372,26.5743329 -3.73104471,22.750776 -5.42855421,17.8974798 L-5.54814295,17.5361556 C-5.78543801,16.7940617 -5.88309566,16.3268675 -5.88309566,16.3268675 L-6.96068135,16.4329618 L-6.95968158,38.9728289 C-6.95426484,39.1155073 -6.92067061,39.7059003 -6.72144901,40.5361405 C-5.26837255,46.6136822 0.239172058,49.2431577 6.23246235,49.5760027 L13.6289023,49.9681357 C24.5243753,50.5734976 26.9697459,62.6505704 27.1372086,64.6518009 L27.1372086,82.4683697 L28.2335168,82.4683697 L28.2416371,82.3007472 C28.3958654,80.3620751 30.8205977,68.2050648 41.7491041,67.5974792 L49.1434638,67.2053462 C62.081773,66.4886893 62.3397279,56.65624 62.3428483,56.5699083 L62.3428483,34.0623053 L61.2621422,33.9582912 L61.1993158,34.2304062 C60.7992582,35.8407434 58.351729,44.0614336 49.9755763,44.4855545 L41.4963499,44.8797678 C34.3360218,45.2417367 30.7236134,49.6363309 28.9366518,53.8717835 C28.6682956,54.5021087 28.4394646,55.1365945 28.2459985,55.7513176 L28.2553597,42.588338 C28.1045393,41.6189269 31.2124795,27.7892172 41.7491041,27.7892172 Z'

export const pictoral = (elm) => {
  if(!element) element = elm

  chart   = create(element, SlicedChart)
  chart.responsive  = { enabled: true }
  createSeries(chart)
}

export const createSeries = (chart) => {
  series = chart.series.push(new PictorialStackedSeries());

  series.dataFields.value = 'value';
  series.dataFields.category = 'name';
  series.alignLabels = true;
  series.labelsOpposite = false
  series.maskSprite.path = iconPath;
  series.ticks.template.locationX = .5;
  series.ticks.template.locationY = 0.5;

  series.labelsContainer.width = 230;
}


export const getPictoralData = () => {
  chart.dispose()
  chart.hiddenState.properties.opacity = 0 // this makes initial fade in effect
  chart   = create(element, SlicedChart)
  createSeries(chart)

  chart.data = [ { name: 'TSC', value: Math.floor(Math.random() * 1000) },
                 { name: 'Workshops', value: Math.floor(Math.random() * 1000) },
                 { name: 'Trainings', value: Math.floor(Math.random() * 1000) },
                 { name: 'Research/analysis', value: Math.floor(Math.random() * 1000) },
                 { name: 'Legal/technical support', value: Math.floor(Math.random() * 1000) },
                 { name: 'Matchmaking/fundraising', value: Math.floor(Math.random() * 1000) },
                 { name: 'Institutional', value: Math.floor(Math.random() * 1000) },
                 { name: 'Tools and resources', value: Math.floor(Math.random() * 1000) },
                 { name: 'Experiential learning', value: Math.floor(Math.random() * 1000) }
  ]
}