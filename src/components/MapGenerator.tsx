import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

import "./MapGenerator.css";

import * as _ from "lodash";

import MapGeneratorController from "../controllers/MapGeneratorController";
import IEntity from "../models/IEntity";

import PopupMarker from "./PopupMarker";

interface IProps {}

interface IState {
  entities: IEntity[];
  zoom: number;
}

export default class MapGenerator extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      entities: MapGeneratorController.getMissingEquipment(),
      zoom: 13,
    };
  }

  componentDidUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>,
    snapshot?: any
  ): void {
    this.setState({
      entities: MapGeneratorController.getMissingEquipment(),
      zoom: 13,
    });
  }

  render() {
    const { entities, zoom } = this.state;
    return (
      <Map center={[49.894067, 2.295753]} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[49.894067, 2.295753]}>
          <Popup>
            <p>
              A pretty CSS3 popup. <br /> Easily customizable.
            </p>
          </Popup>
        </Marker>
        );
      </Map>
    );
  }
}
