import React, { Component } from "react";
import IEntity from "../../models/IEntity";

interface IProps {
  entity: IEntity;
}

export default class Cards extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  parseToCardDatas(entity: IEntity) {
    const cardDatas = {
      title: entity.id,
    };
    return cardDatas;
  }

  render() {
    const { entity } = this.props;
    const cardDatas = this.parseToCardDatas(entity);
    return (
      <div>
        <h1></h1>
        <p></p>
      </div>
    );
  }
}
