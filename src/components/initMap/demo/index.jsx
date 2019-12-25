import React from 'react'
import NjHTMap from "../../../webMap/NjHTMap"

class InitMap extends React.Component {
  componentDidMount() {
    const {dataSource} = this.props
    new NjHTMap(dataSource)
  }


  render() {
    const style = {
      width: "100%",
      height: "100%",
      position: "relative"
    };
    return (
      <div className="htht-initMap">
        <div id="mapContainer" style={style}/>
      </div>
    )
  }
}

export default InitMap
