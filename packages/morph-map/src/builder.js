
import { parties } from './parties'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import   am4themes_animated   from '@amcharts/amcharts4/themes/animated'
import am4geodata_worldHigh from "@amcharts/amcharts4-geodata/worldHigh";

am4core.useTheme(am4themes_animated)

export class MapBuilder {
  constructor(mapElement, hiddenMapElement){

    this.ready()
    this.chart = am4core.create(mapElement, am4maps.MapChart)

    try {
      this.chart.geodata = am4geodata_worldHigh;
    }
    catch (e) {
      this.chart.raiseCriticalError(new Error("Map geodata could not be loaded. Please download the latest <a href=\"https://www.amcharts.com/download/download-v4/\">amcharts geodata</a> and extract its contents into the same directory as your amCharts files."));
    }

    this.chart.projection = new am4maps.projections.Mercator();
    this.chart.padding(10, 20, 10, 20);
    this.chart.minZoomLevel = 0.9;
    this.chart.zoomLevel = 0.9;
    this.chart.maxZoomLevel = 1;

    this.polygonSeries = this.chart.series.push(new am4maps.MapPolygonSeries());
    this.polygonSeries.useGeodata = true;
    this.polygonSeries.include = ["AD"];

    this.chart1 = am4core.create(hiddenMapElement, am4maps.MapChart);
    this.chart1.padding(10, 20, 10, 20);
    this.chart1.geodata = am4geodata_worldHigh;
    this.chart1.projection = new am4maps.projections.Mercator();

    this.polygonSeries1 = this.chart1.series.push(new am4maps.MapPolygonSeries());
    this.polygonSeries1.useGeodata = true;
    this.polygonSeries1.include = ["AD"];

    this.label = this.chart.chartContainer.createChild(am4core.Label);
    this.label.x = 100;
    this.label.y = 100;
    this.label.fill = am4core.color("#000000");
    this.label.fontSize = 35;
    this.label.fontWeight = "bold";
    this.label.text = "Afghanistan";
    this.label.fillOpacity = 0.2;

    this.slider = this.chart.createChild(am4core.Slider);
    this.slider.padding(0, 15, 0, 60);
    this.slider.background.padding(0, 15, 0, 60);
    this.slider.marginBottom = 15;
    this.slider.valign = "bottom";


    setInterval(()  =>{
      let next = this.slider.start + 1 / this.parties.length;
      if (next >= 1) {
        next = 0;
      }
      this.slider.animate({ property: "start", to: next }, 300);
    }, 2000)
    
    this.slider.events.on("rangechanged", () => this.changeCountry())


   // this.mapSeries.toFront()
   // this.events.on('ready', () => this.ready())

  }
  ready(){
    this.parties = parties
    this.state ={ index: -1, morphToPolygon: ''}
    //this.colorSet = ColorSet()
    // this.createLabel()
    // this.createSlider()
    // this.status.ready = true
    // this.start()
  }
  changeCountry(){
      let totalCountries = this.parties.length - 1;
      let countryIndex = Math.round(totalCountries * this.slider.start);
    
      let morphToPolygon;
    
      if (this.state.index != countryIndex) {
        this.polygonSeries1.data = [];
        this.polygonSeries1.include = [this.parties[countryIndex]];
    
        this.currentIndex = countryIndex;
    
        this.polygonSeries1.events.once("validated",  () => {
    
          morphToPolygon = this.polygonSeries1.mapPolygons.getIndex(0);
          if(morphToPolygon){
            let countryPolygon = this.polygonSeries.mapPolygons.getIndex(0);
    
            let morpher = countryPolygon.polygon.morpher;
            let morphAnimation = morpher.morphToPolygon(morphToPolygon.polygon.points);
    
            let colorAnimation = countryPolygon.animate({ "property": "fill", "to": (new am4core.ColorSet()).getIndex(Math.round(Math.random() * 20)) }, 1000);
    
            let animation = this.label.animate({ property: "y", to: 1000 }, 300);
    
            animation.events.once("animationended", ()  => {
              this.label.text = morphToPolygon.dataItem.dataContext["name"];
              this.label.y = -50;
              this.label.animate({ property: "y", to: 200 }, 300, am4core.ease.quadOut);
            })
          }
        })
      }
    
  }
  // start(){
  //   const { slider } = this
  //   setInterval(() => {
  //     let next = slider.start + 1 / parties.length
  //     if (next >= 1) next =0
  //     slider.animate({ property: 'start', to: next }, 500);
  //   }, 3000)
  //   slider.events.on('rangechanged',() => this.changeCountry())
  // }

  // changeCountry() {
  //   const {  state }  = this
  //   let totalCountries = parties.length - 1;
  //   let countryIndex = Math.round(totalCountries * this.slider.start);
  
  //   let morphToPolygon;
  
  //   if (state.index != countryIndex) {
  //     this.mapSeries2.data = [];
  //     this.mapSeries2.include = [parties[countryIndex]];
  
  //     state.index = countryIndex;
  
  //     this.mapSeries2.events.once("validated", ()=> {
  
  //       morphToPolygon = this.mapSeries2.mapPolygons.getIndex(0);
  //       if(morphToPolygon){
  //         let countryPolygon = this.mapSeries2.mapPolygons.getIndex(0);
  
  //         let morpher = countryPolygon.polygon.morpher;
  //         let morphAnimation = morpher.morphToPolygon(morphToPolygon.polygon.points);
  
  //         let colorAnimation = countryPolygon.animate({ "property": "fill", "to": (new ColorSet()).getIndex(Math.round(Math.random() * 20)) }, 1000);
  
  //         let animation = this.label.animate({ property: "y", to: 1000 }, 300);
  
  //         animation.events.once("animationended",  () => {
  //           this.label.text = morphToPolygon.dataItem.dataContext["name"];
  //           this.label.y = -50;
  //           this.label.animate({ property: "y", to: 200 }, 300, ease.quadOut);
  //         })
  //       }
  //     })
  //   }
  // }
  // changeCountry1(){
  //   const { slider, state, mapSeries2 } = this
  //   const { length } = parties
  //   const totalCountries = length - 1;

  //   let countryIndex = Math.round(totalCountries * slider.start);
  
  //   if (state.index === countryIndex) return

  //   mapSeries2.data    = []
  //   mapSeries2.include = [parties[countryIndex]]
  //   state.index        = countryIndex

  //   mapSeries2.events.once('validated',() => this.onValidated() )
    
  // }
  // onValidated () {
  //   const { state, mapSeries2 } = this

  //   state.morphToPolygon = mapSeries2.mapPolygons.getIndex(0)
  //   if(state.morphToPolygon){
  //     const countryPolygon = mapSeries2.mapPolygons.getIndex(0)
  //     const morpher        = countryPolygon.polygon.morpher

  //     state.morphAnimation = morpher.morphToPolygon(state.morphToPolygon.polygon.points)

  //     state.colorAnimation = countryPolygon.animate({ "property": "fill", "to": new ColorSet().getIndex(Math.round(Math.random() * 20)) }, 1000)

  //     const animation = this.label.animate({ property: "y", to: 1000 }, 300);

  //     animation.events.once("animationended", () => this.labelAnimationEnded() )
  //   }
  // }

  // labelAnimationEnded(){
  //   const { morphToPolygon } = this.state

  //   this.label.text = morphToPolygon.dataItem.dataContext["name"];
  //   this.label.y = -50;
  //   this.label.animate({ property: "y", to: 200 }, 300, ease.quadOut);
  
  // }
  // createLabel(){

  //   const label = this.map.chartContainer.createChild(Label);
  //   label.x = 100
  //   label.y = 100
  //   label.fill = color('#000000')
  //   label.fontSize = 35;
  //   label.fontWeight = 'bold'
  //   label.text = 'Russia'
  //   label.fillOpacity = 0.2

  //   this.label = label
  // }
  // createSlider(){
  //   const slider = this.map.createChild(Slider)
  //   slider.padding(0, 15, 0, 60)
  //   slider.background.padding(0, 15, 0, 60)
  //   slider.marginBottom = 15
  //   slider.valign = 'bottom'
  //   this.slider = slider
  // }
  // get mapSeries2 (){ return this.getSeriesById('mapSeries2') }
}
