import React, { Component } from "react";

import IEntity from "../../../models/IEntity";

import "./Card.css";

import * as _ from "lodash";

interface IProps {
  entity: IEntity;
}

interface ICard {
  title: string;
  value: any;
}

export default class Cards extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  getCardImg(entity: IEntity): string {
    return "img/" + entity.code.value + "_ico.png";
  }

  parseToCardDatas(entity: IEntity) {
    const cardDatas: ICard[] = [
      {
        title: "Résidence:",
        value: entity.adresse.value.residence,
      },
      {
        title: "Adresse:",
        value: entity.adresse.value.adresse,
      },
      {
        title: "Nombre d'étages:",
        value: entity.nbetages.value,
      },
      {
        title: "Nom du gardien:",
        value: entity.nomgardien.value,
      },
      {
        title: "Type d'équipments concernés:",
        value: entity.name.value,
      },
    ];
    return cardDatas;
  }

  render() {
    const { entity } = this.props;
    const cardDatas = this.parseToCardDatas(entity);
    return (
      <div className={"cardContainer"}>
        <img className={"cardImg"} src={this.getCardImg(entity)} />
        {_.map(cardDatas, (card: ICard, key: string) => (
          <p key={key}>
            <em className={"cardTitle"}>{card.title}</em>
            <br />
            {card.value}
          </p>
        ))}
      </div>
    );
  }
}