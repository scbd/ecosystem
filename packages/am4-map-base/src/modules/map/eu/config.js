import { MouseCursorStyle } from '@amcharts/amcharts4/core'

export const euFlag           = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgODEwIDU0MCI+CjxkZXNjPkV1cm9wZWFuIGZsYWc8L2Rlc2M+CjxkZWZzPgo8ZyBpZD0icyI+CjxnIGlkPSJjIj4KPHBhdGggaWQ9InQiIGQ9Ik0wLDB2MWgwLjV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0xKXJvdGF0ZSgxOCkiLz4KPHVzZSB4bGluazpocmVmPSIjdCIgdHJhbnNmb3JtPSJzY2FsZSgtMSwxKSIvPgo8L2c+CjxnIGlkPSJhIj4KPHVzZSB4bGluazpocmVmPSIjYyIgdHJhbnNmb3JtPSJyb3RhdGUoNzIpIi8+Cjx1c2UgeGxpbms6aHJlZj0iI2MiIHRyYW5zZm9ybT0icm90YXRlKDE0NCkiLz4KPC9nPgo8dXNlIHhsaW5rOmhyZWY9IiNhIiB0cmFuc2Zvcm09InNjYWxlKC0xLDEpIi8+CjwvZz4KPC9kZWZzPgo8cmVjdCBmaWxsPSIjMDM5IiB3aWR0aD0iODEwIiBoZWlnaHQ9IjU0MCIvPgo8ZyBmaWxsPSIjZmMwIiB0cmFuc2Zvcm09InNjYWxlKDMwKXRyYW5zbGF0ZSgxMy41LDkpIj4KPHVzZSB4bGluazpocmVmPSIjcyIgeT0iLTYiLz4KPHVzZSB4bGluazpocmVmPSIjcyIgeT0iNiIvPgo8ZyBpZD0ibCI+Cjx1c2UgeGxpbms6aHJlZj0iI3MiIHg9Ii02Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3MiIHRyYW5zZm9ybT0icm90YXRlKDE1MCl0cmFuc2xhdGUoMCw2KXJvdGF0ZSg2NikiLz4KPHVzZSB4bGluazpocmVmPSIjcyIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwKXRyYW5zbGF0ZSgwLDYpcm90YXRlKDI0KSIvPgo8dXNlIHhsaW5rOmhyZWY9IiNzIiB0cmFuc2Zvcm09InJvdGF0ZSg2MCl0cmFuc2xhdGUoMCw2KXJvdGF0ZSgxMikiLz4KPHVzZSB4bGluazpocmVmPSIjcyIgdHJhbnNmb3JtPSJyb3RhdGUoMzApdHJhbnNsYXRlKDAsNilyb3RhdGUoNDIpIi8+CjwvZz4KPHVzZSB4bGluazpocmVmPSIjbCIgdHJhbnNmb3JtPSJzY2FsZSgtMSwxKSIvPgo8L2c+Cjwvc3ZnPgo='
export const name             = { en: 'European Union',  fr: 'Union Européenne', es: 'Unión Europea', ru: 'Европейский союз', zh: '欧盟', ar: 'الاتحاد الأوروبي' }
export const euCountries      = [ 'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE' ]

export const euToolTipTemplate = ({ countryToolTip, euActionToolTip, locale }) => `<div style="text-align:center; color:#ffffff;">
                                          <a ${countryToolTip} style="display:block;color:#ffffff;">{name}</a>
                                          <a ${euActionToolTip} style="display:block;margin-bottom:-10px;"> 
                                            <img src="${euFlag}" style="max-width:20px;" />
                                          </a>
                                          <br>
                                          <a ${euActionToolTip} style="display:block;color:#ffffff; font-size:.75em;margin-top:-15px;" > ${name[locale]} </a>
                                        </div>`

export const euButtonSeries = ({ propertyFields }) => ({
  type     : 'MapImageSeries',
  id       : 'euButtonSeries',
  mapImages: { propertyFields,
               children: [
                 {
                   type            : 'Image',
                   cursorOverStyle : MouseCursorStyle.pointer,
                   maxWidth        : 25,
                   width           : 25,
                   nonScaling      : true,
                   visible         : true,
                   tooltipText     : '{name}',
                   horizontalCenter: 'middle',
                   verticalCenter  : 'middle',
                   href            : 'https://cdn.cbd.int/svg-country-flags@1.2.6/svg/eu.svg'//euFlag
                 }
               ] }
})

export const euSeries = ({ getStyle, propertyFields, worldLow }) => ({
  type       : 'MapPolygonSeries',
  id         : 'euMapSeries',
  exclude    : (worldLow.features.map(({ id }) => id)).filter((id  => !euCountries.includes(id))),
  useGeodata : true,
  tooltip    : { background: { fill: getStyle().country }, getFillFromObject: false, fontFamily: getStyle().fontFamily, keepTargetHover: true, label: { interactionsEnabled: true } }, //keepTargetHover: true, label: { interactionsEnabled: true }
  mapPolygons: {
    template: {
      tooltipPosition: 'fixed', //'fixed',
      tooltipText    : '{name}',
      fill           : getStyle().country,
      stroke         : getStyle().hover,
      strokeWidth    : 0.5,
      states         : { hover: { properties: { fill: getStyle().hover } }, active: { properties: { fill: getStyle().hover } }  }
    }
  },
  propertyFields
})