import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";

import IEntity from "../../../models/IEntity";

import "./PopupMarker.css";

import * as _ from "lodash";

import Cards from "../Card/Card";

interface IProps {
  entities: IEntity[];
}

export default class PopupMarker extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { entities } = this.props;
    const position: LatLngTuple = [
      entities[0].location.value.coordinates[1],
      entities[0].location.value.coordinates[0],
    ];
    return (
      <Marker position={position}>
        <Popup className={"popupContainer"}>
          {_.map(entities, (entity: IEntity, key: string) => (
            <Cards entity={entity} key={key} />
          ))}
        </Popup>
      </Marker>
    );
  }
}
