import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import IEntity from "../../models/IEntity";

interface IProps {
  entity: IEntity;
}

export default class PopupMarker extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { entity } = this.props;
    const position: LatLngTuple = [
      entity.location.value.coordinates[1],
      entity.location.value.coordinates[0],
    ];
    return (
      <Marker position={position}>
        <Popup>
          <p>
            A pretty CSS3 popup. <br /> Easily customizable.
          </p>
        </Popup>
      </Marker>
    );
  }
}
