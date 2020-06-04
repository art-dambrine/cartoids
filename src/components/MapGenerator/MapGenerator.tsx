import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";

import "./MapGenerator.css";

import * as _ from "lodash";

import MapGeneratorController from "../../controllers/MapGeneratorController";
import IEntity from "../../models/IEntity";

import PopupMarker from "./PopupMarker/PopupMarker";

interface IProps {}

interface IState {
  entities: IEntity[];
  zoom: number;
}

interface ICoordinates {
  coordinates: [number, number];
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

  getEntitiesGroups(entities: IEntity[]) {
    const coordinatesFound: ICoordinates[] = [];
    return _.map(entities, (entity: IEntity, key: string) => {
      if (
        this.checkIfCoordinatesExist(coordinatesFound, entity.location.value)
      ) {
        return;
      }
      coordinatesFound.push(entity.location.value);
      const newEntities: IEntity[] = _.filter(entities, (e) => {
        return this.compareEntityCoordinates(
          entity.location.value,
          e.location.value
        );
      }) as IEntity[];
      return <PopupMarker entities={newEntities} key={key} />;
    });
  }

  checkIfCoordinatesExist(
    coordinators: ICoordinates[],
    coordinates: ICoordinates
  ): boolean {
    for (let coordinator of coordinators) {
      if (this.compareEntityCoordinates(coordinator, coordinates)) {
        return true;
      }
    }
    return false;
  }

  compareEntityCoordinates(
    coordinates: ICoordinates,
    coordinator: ICoordinates
  ): boolean {
    const a = JSON.stringify(coordinates.coordinates);
    const b = JSON.stringify(coordinator.coordinates);
    return a === b;
  }

  render() {
    const { entities, zoom } = this.state;
    return (
      <Map center={[49.894067, 2.295753]} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.getEntitiesGroups(entities)}
      </Map>
    );
  }
}
