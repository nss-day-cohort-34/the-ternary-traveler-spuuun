const message = "here's a map"

document.querySelector("#container").innerHTML = `<h1>${message}</h1>`

//base url for mapbox:
//https://api.mapbox.com

//my default public token:
const myAccessToken = "pk.eyJ1Ijoic3B1dXVuIiwiYSI6ImNqemxvbjN4cjBjZjMzaW15Y2F1NDFvdG4ifQ.Hxdza6WvPNtNIzMuVizeDg"
mapboxgl.accessToken = myAccessToken;

const map = new mapboxgl.Map({
    container: "map-container", // HTML container id
    style: "mapbox://styles/mapbox/dark-v9", // style URL
    center: [-76.54, 39.18], // starting position as [lng, lat]
    zoom: 10
});
// center: [10.905200, 63.445200], // starting position as [lng, lat]

// setInterval(moveCenter, 3000)

// const moveCenter = () => {
//     return map.center = [30.5, 50.5]
// }

//ADDS MARKER
const marker = new mapboxgl.Marker()
    .setLngLat([30.5, 50.5])
    .addTo(map);

map.on("click", function (e) {
    const clickedLng = e.lngLat.lng;
    const clickedLat = e.lngLat.lat;
    const newMarker = new mapboxgl.Marker()
        .setLngLat([clickedLng, clickedLat])
        .addTo(map);
})
map.addSource('some id', {
    type: 'video',
    url: [
        'https://www.mapbox.com/blog/assets/baltimore-smoke.mp4',
        'https://www.mapbox.com/blog/assets/baltimore-smoke.webm'
    ],
    coordinates: [
        [-76.54, 39.18],
        [-76.52, 39.18],
        [-76.52, 39.17],
        [-76.54, 39.17]
    ]
});
// /**
//  * The `Map` object represents the map on your page. It exposes methods
//  * and properties that enable you to programmatically change the map,
//  * and fires events as users interact with it.
//  *
//  * You create a `Map` by specifying a `container` and other options.
//  * Then Mapbox GL JS initializes the map on the page and returns your `Map`
//  * object.
//  *
//  * @extends Evented
//  * @param {Object} options
//  * @param {HTMLElement|string} options.container The HTML element in which Mapbox GL JS will render the map, or the element's string `id`. The specified element must have no children.
//  * @param {number} [options.minZoom=0] The minimum zoom level of the map (0-24).
//  * @param {number} [options.maxZoom=22] The maximum zoom level of the map (0-24).
//  * @param {Object|string} [options.style] The map's Mapbox style. This must be an a JSON object conforming to
//  * the schema described in the [Mapbox Style Specification](https://mapbox.com/mapbox-gl-style-spec/), or a URL to
//  * such JSON.
//  *
//  * To load a style from the Mapbox API, you can use a URL of the form `mapbox://styles/:owner/:style`,
//  * where `:owner` is your Mapbox account name and `:style` is the style ID. Or you can use one of the following
//  * [the predefined Mapbox styles](https://www.mapbox.com/maps/):
//  *
//  *  * `mapbox://styles/mapbox/streets-v9`
//  *  * `mapbox://styles/mapbox/outdoors-v9`
//  *  * `mapbox://styles/mapbox/light-v9`
//  *  * `mapbox://styles/mapbox/dark-v9`
//  *  * `mapbox://styles/mapbox/satellite-v9`
//  *  * `mapbox://styles/mapbox/satellite-streets-v9`
//  *
//  * Tilesets hosted with Mapbox can be style-optimized if you append `?optimize=true` to the end of your style URL, like `mapbox://styles/mapbox/streets-v9?optimize=true`.
//  * Learn more about style-optimized vector tiles in our [API documentation](https://www.mapbox.com/api-documentation/#retrieve-tiles).
//  *
//  * @param {boolean} [options.hash=false] If `true`, the map's position (zoom, center latitude, center longitude, bearing, and pitch) will be synced with the hash fragment of the page's URL.
//  *   For example, `http://path/to/my/page.html#2.59/39.26/53.07/-24.1/60`.
//  * @param {boolean} [options.interactive=true] If `false`, no mouse, touch, or keyboard listeners will be attached to the map, so it will not respond to interaction.
//  * @param {number} [options.bearingSnap=7] The threshold, measured in degrees, that determines when the map's
//  *   bearing will snap to north. For example, with a `bearingSnap` of 7, if the user rotates
//  *   the map within 7 degrees of north, the map will automatically snap to exact north.
//  * @param {boolean} [options.pitchWithRotate=true] If `false`, the map's pitch (tilt) control with "drag to rotate" interaction will be disabled.
//  * @param {boolean} [options.attributionControl=true] If `true`, an {@link AttributionControl} will be added to the map.
//  * @param {string} [options.logoPosition='bottom-left'] A string representing the position of the Mapbox wordmark on the map. Valid options are `top-left`,`top-right`, `bottom-left`, `bottom-right`.
//  * @param {boolean} [options.failIfMajorPerformanceCaveat=false] If `true`, map creation will fail if the performance of Mapbox
//  *   GL JS would be dramatically worse than expected (i.e. a software renderer would be used).
//  * @param {boolean} [options.preserveDrawingBuffer=false] If `true`, the map's canvas can be exported to a PNG using `map.getCanvas().toDataURL()`. This is `false` by default as a performance optimization.
//  * @param {boolean} [options.refreshExpiredTiles=true] If `false`, the map won't attempt to re-request tiles once they expire per their HTTP `cacheControl`/`expires` headers.
//  * @param {LngLatBoundsLike} [options.maxBounds] If set, the map will be constrained to the given bounds.
//  * @param {boolean|Object} [options.scrollZoom=true] If `true`, the "scroll to zoom" interaction is enabled. An `Object` value is passed as options to {@link ScrollZoomHandler#enable}.
//  * @param {boolean} [options.boxZoom=true] If `true`, the "box zoom" interaction is enabled (see {@link BoxZoomHandler}).
//  * @param {boolean} [options.dragRotate=true] If `true`, the "drag to rotate" interaction is enabled (see {@link DragRotateHandler}).
//  * @param {boolean} [options.dragPan=true] If `true`, the "drag to pan" interaction is enabled (see {@link DragPanHandler}).
//  * @param {boolean} [options.keyboard=true] If `true`, keyboard shortcuts are enabled (see {@link KeyboardHandler}).
//  * @param {boolean} [options.doubleClickZoom=true] If `true`, the "double click to zoom" interaction is enabled (see {@link DoubleClickZoomHandler}).
//  * @param {boolean|Object} [options.touchZoomRotate=true] If `true`, the "pinch to rotate and zoom" interaction is enabled. An `Object` value is passed as options to {@link TouchZoomRotateHandler#enable}.
//  * @param {boolean} [options.trackResize=true]  If `true`, the map will automatically resize when the browser window resizes.
//  * @param {LngLatLike} [options.center=[0, 0]] The inital geographical centerpoint of the map. If `center` is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to `[0, 0]` Note: Mapbox GL uses longitude, latitude coordinate order (as opposed to latitude, longitude) to match GeoJSON.
//  * @param {number} [options.zoom=0] The initial zoom level of the map. If `zoom` is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to `0`.
//  * @param {number} [options.bearing=0] The initial bearing (rotation) of the map, measured in degrees counter-clockwise from north. If `bearing` is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to `0`.
//  * @param {number} [options.pitch=0] The initial pitch (tilt) of the map, measured in degrees away from the plane of the screen (0-60). If `pitch` is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to `0`.
//  * @param {boolean} [options.renderWorldCopies=true]  If `true`, multiple copies of the world will be rendered, when zoomed out.
//  * @param {number} [options.maxTileCacheSize=null]  The maximum number of tiles stored in the tile cache for a given source. If omitted, the cache will be dynamically sized based on the current viewport.
//  * @param {string} [options.localIdeographFontFamily=null] If specified, defines a CSS font-family
//  *   for locally overriding generation of glyphs in the 'CJK Unified Ideographs' and 'Hangul Syllables' ranges.
//  *   In these ranges, font settings from the map's style will be ignored, except for font-weight keywords (light/regular/medium/bold).
//  *   The purpose of this option is to avoid bandwidth-intensive glyph server requests. (see [Use locally generated ideographs](https://www.mapbox.com/mapbox-gl-js/example/local-ideographs))
//  * @param {RequestTransformFunction} [options.transformRequest=null] A callback run before the Map makes a request for an external URL. The callback can be used to modify the url, set headers, or set the credentials property for cross-origin requests.
//  *   Expected to return an object with a `url` property and optionally `headers` and `credentials` properties.
//  * @param {boolean} [options.collectResourceTiming=false] If `true`, Resource Timing API information will be collected for requests made by GeoJSON and Vector Tile web workers (this information is normally inaccessible from the main Javascript thread). Information will be returned in a `resourceTiming` property of relevant `data` events.
//  * @example
//  * var map = new mapboxgl.Map({
//     *   container: 'map',
//     *   center: [-122.420679, 37.772537],
//     *   zoom: 13,
//     *   style: style_object,
//     *   hash: true,
//     *   transformRequest: (url, resourceType)=> {
//     *     if(resourceType == 'Source' && url.startsWith('http://myHost')) {
//     *       return {
//     *        url: url.replace('http', 'https'),
//     *        headers: { 'my-custom-header': true},
//     *        credentials: 'include'  // Include cookies for cross-origin requests
//     *      }
//     *     }
//     *   }
//     * });
//     * @see [Display a map](https://www.mapbox.com/mapbox-gl-js/examples/)
//     */