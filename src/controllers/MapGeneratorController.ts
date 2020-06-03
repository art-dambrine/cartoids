import MapGeneratorService from "../services/MapGeneratorService";
import IEntity from "../models/IEntity";

export default class MapGeneratorController {
  static async getMissingEquipment(): Promise<IEntity[]> {
    const url =
      "http://docker.art-dambrine.ovh:1026/v2/entities?type=equipement&q=etat==M";
    const entities: IEntity[] = JSON.parse(
      await MapGeneratorService.FetchHeadlines(url)
    ) as IEntity[];

    return entities;
  }
}
