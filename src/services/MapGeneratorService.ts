export default class MapGeneratorService {
  static get(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open("GET", url);

      req.onload = () => {
        if (req.status === 200) {
          resolve(req.response);
        } else {
          reject(Error(req.statusText));
        }
      };

      req.onerror = () => {
        reject(Error("Network Error"));
      };

      req.send();
    });
  }

  static async FetchHeadlines(url: string): Promise<any> {
    console.log("Entered FetchHeadlines");

    return await this.get(url)
      .then()
      .catch((error) => {
        console.log("getJSON failed for", url, error);
        throw error;
      });
  }
}
