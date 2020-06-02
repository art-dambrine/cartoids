import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";

import "./MapGenerator.css";
import MapGeneratorService from "../services/MapGeneratorService";

interface IProps {}

interface IState {
  lat: number;
  lng: number;
  zoom: number;
}

export default class MapGenerator extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    };
  }

  componentWillMount() {
    MapGeneratorService.getMissingEquipment();
  }

  render() {
    const position: LatLngTuple = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <p>
              A pretty CSS3 popup. <br /> Easily customizable.
            </p>
          </Popup>
        </Marker>
      </Map>
    );
  }
}
