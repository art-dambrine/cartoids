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
  timestampToDate(utcDate: string): string {
    const date: Date = new Date(utcDate);
    return (
      date.getDay() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear() +
      " à " +
      date.getHours() +
      "h" +
      date.getMinutes()
    );
  }

  parseToCardDatas(entity: IEntity) {
    const cardDatas: ICard[] = [
      {
        title: "Type d'équipments concernés:",
        value: entity.name.value,
      },
      {
        title: "Commentaire:",
        value: entity.commentaire.value,
      },
      {
        title: "Heure d'enregistrement",
        value: this.timestampToDate(entity.date.value),
      },
      {
        title: "Résidence:",
        value: entity.adresse.value.residence,
      },
      {
        title: "Adresse:",
        value: entity.adresse.value.adresse,
      },
      {
        title: "Secteur:",
        value: entity.adresse.value.ucun,
      },
      {
        title: "Entrée:",
        value: entity.adresse.value.entree,
      },
      {
        title: "Étage d'intervention:",
        value:
          parseInt(entity.numeroetage.value) === 0
            ? "RDC"
            : entity.numeroetage.value,
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
        title: "Numéro de téléphone du gardien:",
        value: "+33" + entity.telgardien.value,
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
