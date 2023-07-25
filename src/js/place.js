import queryString from "query-string";

export function getMapType(scene_id, tile_layer_id) {
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