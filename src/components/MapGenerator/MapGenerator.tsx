import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";

import "./MapGenerator.css";

import * as _ from "lodash";

import MapGeneratorController from "../../controllers/MapGeneratorController";
import IEntity from "../../models/IEntity";

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
      entities: [],
      zoom: 13,
    };
  }

  componentDidMount(): void {
    MapGeneratorController.getMissingEquipment().then((entities) => {
      this.setState({
        entities: entities,
        zoom: 13,
      });
    });
  }

  componentDidUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>,
    snapshot?: any
  ): void {
    console.log("******");
  }

  render() {
    const { entities, zoom } = this.state;
    console.log("---", entities);
    return (
      <Map center={[49.894067, 2.295753]} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {_.map(entities, (entity: IEntity, key: string) => (
          <PopupMarker entity={entity} key={key} />
        ))}
      </Map>
    );
  }
}
