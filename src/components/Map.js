/* eslint-disable */
import React from 'react'
import ReactMapGL, {GeolocateControl, Source, Layer, Popup, NavigationControl} from 'react-map-gl'

export class Map extends React.Component {
  constructor(props) {
    super(props)
    this.setViewport = this.setViewport.bind(this)
    this.hoverHandler = this.hoverHandler.bind(this)
    
    this.state = {
      mapData: {
        width: '100vw',
        height: '100vh',
        latitude: 54.247,
        longitude: 21.117,
        zoom: 1,
        mapStyle: "https://maps.seeker.info/styles/positron/style.json",
        mapOptions: {hash: false},
        onHover: this.hoverHandler,
        onViewportChange: this.setViewport
      },
      geolocateControlData: {
        style: {
          position: 'absolute',
          top: 0, 
          left: 0, 
          margin: 12
        }
      },
      popupData: {
        latitude: null,
        longitude: null,
        closeButton: false
      },
      hoveredFeature: null,
      loaded: false,
      sourceData: {},
      layerData: {
        id: "points",
        type: 'circle',
        filter: ['>', ['get', 'value'], 0],
        paint: {
          'circle-color': [
            'step',
            ['get', 'value'],
            'rgb(29, 168, 10)',
            100,
            'rgb(222, 198, 13)',
            750,
            'rgb(222, 41, 9)'
          ],
          'circle-radius': [
            'interpolate', ['linear'], ['zoom'],
            1, ['min', ['max', ['/', ['number', ['get', 'value']], 50], 4], 30],
            13, ['min', ['max', ['/', ['number', ['get', 'value']], 100], 8], 400],
          ]
        }
      }
    }
  }
  setViewport(viewport) {
    const {latitude, longitude, zoom, bearing, pitch} = viewport

    this.setState({
      mapData: {...this.state.mapData, latitude, longitude, zoom, bearing, pitch}
    })
  }
  renderSource() {
    return (
      this.state.loaded &&
      <Source {...this.state.sourceData}> 
        <Layer {...this.state.layerData}/>
      </Source>
    )
  }
  renderTooltip() {
    const {hoveredFeature} = this.state;

    return (
      hoveredFeature && (
        <Popup {...this.state.popupData} >
            <div>Confirmed cases: <b>{hoveredFeature.properties.value}</b></div>
            <div>Country: <b>{hoveredFeature.properties.country}</b></div>
            {hoveredFeature.properties.province && <div>State: <b>{hoveredFeature.properties.province}</b></div>}
        </Popup>
      )
    )
  }
  hoverHandler(event) {
    const {
        features,
        lngLat: [longitude, latitude]
      } = event,
      hoveredFeature = features && features.find(f => f.layer.id === 'points')
    
    this.setState({hoveredFeature, popupData: {...this.state.popupData, longitude, latitude}})
  }
  async loadData() {
    const res = await fetch('https://coronavirus-tracker-api.herokuapp.com/confirmed')
    let json

    if (res.ok) json = await res.json()

    const features = json.locations.map(item => ({type: 'Feature', properties: {value: +item.latest, country: item.country, province: item.province}, geometry: {type: 'Point', coordinates: [item.coordinates.long, item.coordinates.lat]}})),
          geojson = {
            type: 'FeatureCollection',
            features
          }
          
    this.setState({
      sourceData: {
        type: 'geojson',
        data: geojson
      },
      loaded: true
    })
  }
  componentDidMount() {
    this.loadData()
  }
  render() {
    return (
      <ReactMapGL {...this.state.mapData}>
        <GeolocateControl trackUserLocation={false} {...this.state.geolocateControlData}/>
        {this.renderSource()}
        {this.renderTooltip()}
      </ReactMapGL>
    )
  }
}