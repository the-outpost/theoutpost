import queryString from "query-string";

export function getMapType(sceneId, _tileLayerId) {
    const query = queryString.parse(window.location.hash)
    let mapType = query.map
    if (!mapType) {
      if (sceneId) {
        mapType = '3d'
      } else {
        mapType = '2d'
      }
    }
    return mapType
}