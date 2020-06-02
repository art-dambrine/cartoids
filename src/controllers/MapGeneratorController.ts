import MapGeneratorService from "../services/MapGeneratorService";
import IEntity from "../models/IEntity";

export default class MapGeneratorController {
  static getMissingEquipment(): IEntity[] {
    const url =
      "http://docker.art-dambrine.ovh:1026/v2/entities?type=equipement&q=etat==M";
    const entities: IEntity[] = [];

    MapGeneratorService.FetchHeadlines(url).then((response) => {
      entities.push(...(JSON.parse(response) as IEntity[]));
    });
    return entities;
  }
}
