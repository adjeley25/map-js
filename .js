
const mapYrange = [-39.570713, -43.714499];
const mapXrange = [143.815934, 148.545732];

const map = document.querySelector('.png-map');

const points = [
  { 
    name: "Hobart",
    loc: [-42.8823402,147.3285564],
  },
  { 
    name: "Launceston",
    loc: [-41.4346564,146.9929413],
  }
];

const pinIcon = (name, coords) => {
  return `
    <span class="pinIcon" style=" top:${coords[0]}%; left:${coords[1]}%; ">
      <img src="https://assets.codepen.io/335059/pin.png" alt="" />
      <span>${name}</span>
    </span>
  `;
}

function getMapLocation(y, x, d) {
  // ((d[1] - x[0]) * 100) / (x[1] - x[0])
  
  const xStart = (d[1] - x[0]) * 100;
  const xRange = x[1] - x[0];
  
  // ((d[0] - y[0]) * 100) / (y[1] - y[0])

  // d = 6
  // y = 0 to 10
  // 6 - 0 * 100 = 600
  // 10 - 0 = 10
  // 600 / 10 = 60
  
  const yStart = (d[0] - y[0]) * 100;
  const yRange = y[1] - y[0];
   
  return [yStart / yRange, xStart / xRange];
}

console.log( getMapLocation(mapYrange, mapXrange, points[0].loc ) );

for(let i = 0; i < points.length; i += 1) {
  
  // Get coords as X Y 
  const mapCoords = getMapLocation(mapYrange, mapXrange, points[i].loc );
  
  // Create pin to draw and pass the Name and X Y Coords
  const pinToDraw = pinIcon( points[i].name, mapCoords );
  
  // Draw pin to map
  map.innerHTML += pinToDraw;
} 