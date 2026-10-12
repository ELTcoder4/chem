const molecules = [
  {
    id: 'water', name: 'Water', formula: 'H₂O', symbol: 'H₂O', geometry: 'Bent', polarity: 'Polar', hybridization: 'sp³', electronGeometry: 'Tetrahedral',
    domains: 4, bondingDomains: 2, lonePairs: 2, central: 'O', className: 'oxide', description: 'Two O–H bonds share electron density unevenly. Two lone pairs compress the tetrahedral electron geometry into a 104.5° bent shape.',
    facts: ['Hydrogen bonding donor + acceptor', 'Angular molecule with permanent dipole'], bondLength: '95.84 pm', bondAngle: '104.5°', atoms: [
      { id: 'o', element: 'O', name: 'Oxygen', x: 280, y: 177, r: 29, color: '#f5a36f', atomicNumber: 8, charge: 'neutral', role: 'central atom' },
      { id: 'h1', element: 'H', name: 'Hydrogen', x: 166, y: 113, r: 22, color: '#d8e4e4', atomicNumber: 1, charge: 'neutral', role: 'terminal atom' },
      { id: 'h2', element: 'H', name: 'Hydrogen', x: 393, y: 229, r: 22, color: '#d8e4e4', atomicNumber: 1, charge: 'neutral', role: 'terminal atom' }
    ], bonds: [{ id: 'oh1', a: 'o', b: 'h1', order: 'single', length: '95.84 pm', angle: '104.5°' }, { id: 'oh2', a: 'o', b: 'h2', order: 'single', length: '95.84 pm', angle: '104.5°' }], angles: [{ label: 'H–O–H', value: '104.5°', note: 'bond angle' }]
  },
  {
    id: 'co2', name: 'Carbon dioxide', formula: 'CO₂', symbol: 'CO₂', geometry: 'Linear', polarity: 'Non-polar', hybridization: 'sp', electronGeometry: 'Linear',
    domains: 2, bondingDomains: 2, lonePairs: 0, central: 'C', className: 'oxide', description: 'Two electron domains point in opposite directions around carbon. The bond dipoles cancel, leaving a linear and non-polar molecule.',
    facts: ['C=O bonds are strongly polar', 'Overall dipole cancels by symmetry'], bondLength: '116.3 pm', bondAngle: '180°', atoms: [
      { id: 'o1', element: 'O', name: 'Oxygen', x: 112, y: 180, r: 28, color: '#f5a36f', atomicNumber: 8, charge: 'neutral', role: 'terminal atom' },
      { id: 'c', element: 'C', name: 'Carbon', x: 280, y: 180, r: 27, color: '#7dc0ff', atomicNumber: 6, charge: 'neutral', role: 'central atom' },
      { id: 'o2', element: 'O', name: 'Oxygen', x: 448, y: 180, r: 28, color: '#f5a36f', atomicNumber: 8, charge: 'neutral', role: 'terminal atom' }
    ], bonds: [{ id: 'co1', a: 'c', b: 'o1', order: 'double', length: '116.3 pm', angle: '180°' }, { id: 'co2', a: 'c', b: 'o2', order: 'double', length: '116.3 pm', angle: '180°' }], angles: [{ label: 'O–C–O', value: '180°', note: 'bond angle' }]
  },
  {
    id: 'ammonia', name: 'Ammonia', formula: 'NH₃', symbol: 'NH₃', geometry: 'Trigonal pyramidal', polarity: 'Polar', hybridization: 'sp³', electronGeometry: 'Tetrahedral',
    domains: 4, bondingDomains: 3, lonePairs: 1, central: 'N', className: 'hydride', description: 'A lone pair occupies one tetrahedral domain around nitrogen, pushing the three N–H bonds into a trigonal pyramidal arrangement.',
    facts: ['Weak base in water', 'One nitrogen lone pair is stereochemically active'], bondLength: '101.7 pm', bondAngle: '107.0°', atoms: [
      { id: 'n', element: 'N', name: 'Nitrogen', x: 280, y: 176, r: 29, color: '#aa9bff', atomicNumber: 7, charge: 'neutral', role: 'central atom' },
      { id: 'h1', element: 'H', name: 'Hydrogen', x: 168, y: 117, r: 22, color: '#d8e4e4', atomicNumber: 1, charge: 'neutral', role: 'terminal atom' },
      { id: 'h2', element: 'H', name: 'Hydrogen', x: 398, y: 117, r: 22, color: '#d8e4e4', atomicNumber: 1, charge: 'neutral', role: 'terminal atom' },
      { id: 'h3', element: 'H', name: 'Hydrogen', x: 280, y: 292, r: 22, color: '#d8e4e4', atomicNumber: 1, charge: 'neutral', role: 'terminal atom' }
    ], bonds: [{ id: 'nh1', a: 'n', b: 'h1', order: 'single', length: '101.7 pm', angle: '107.0°' }, { id: 'nh2', a: 'n', b: 'h2', order: 'single', length: '101.7 pm', angle: '107.0°' }, { id: 'nh3', a: 'n', b: 'h3', order: 'single', length: '101.7 pm', angle: '107.0°' }], angles: [{ label: 'H–N–H', value: '107.0°', note: 'average bond angle' }]
  },
  {
    id: 'methane', name: 'Methane', formula: 'CH₄', symbol: 'CH₄', geometry: 'Tetrahedral', polarity: 'Non-polar', hybridization: 'sp³', electronGeometry: 'Tetrahedral',
    domains: 4, bondingDomains: 4, lonePairs: 0, central: 'C', className: 'hydrocarbon', description: 'Four equivalent C–H bonds point toward the corners of a tetrahedron. Symmetry cancels all individual bond dipoles.',
    facts: ['Simplest alkane', 'Ideal tetrahedral bond angle'], bondLength: '109 pm', bondAngle: '109.5°', atoms: [
      { id: 'c', element: 'C', name: 'Carbon', x: 280, y: 180, r: 28, color: '#7dc0ff', atomicNumber: 6, charge: 'neutral', role: 'central atom' },
      { id: 'h1', element: 'H', name: 'Hydrogen', x: 140, y: 102, r: 22, color: '#d8e4e4', atomicNumber: 1, charge: 'neutral', role: 'terminal atom' },
      { id: 'h2', element: 'H', name: 'Hydrogen', x: 420, y: 102, r: 22, color: '#d8e4e4', atomicNumber: 1, charge: 'neutral', role: 'terminal atom' },
      { id: 'h3', element: 'H', name: 'Hydrogen', x: 160, y: 283, r: 22, color: '#d8e4e4', atomicNumber: 1, charge: 'neutral', role: 'terminal atom' },
      { id: 'h4', element: 'H', name: 'Hydrogen', x: 400, y: 283, r: 22, color: '#d8e4e4', atomicNumber: 1, charge: 'neutral', role: 'terminal atom' }
    ], bonds: [{ id: 'ch1', a: 'c', b: 'h1', order: 'single', length: '109 pm', angle: '109.5°' }, { id: 'ch2', a: 'c', b: 'h2', order: 'single', length: '109 pm', angle: '109.5°' }, { id: 'ch3', a: 'c', b: 'h3', order: 'single', length: '109 pm', angle: '109.5°' }, { id: 'ch4', a: 'c', b: 'h4', order: 'single', length: '109 pm', angle: '109.5°' }], angles: [{ label: 'H–C–H', value: '109.5°', note: 'ideal bond angle' }]
  },
  {
    id: 'bf3', name: 'Boron trifluoride', formula: 'BF₃', symbol: 'BF₃', geometry: 'Trigonal planar', polarity: 'Non-polar', hybridization: 'sp²', electronGeometry: 'Trigonal planar',
    domains: 3, bondingDomains: 3, lonePairs: 0, central: 'B', className: 'halide', description: 'Boron forms three coplanar bonds separated by 120°. The symmetric arrangement cancels the three polar B–F bonds.',
    facts: ['Electron-deficient Lewis structure', 'Flat, three-fold symmetry'], bondLength: '130.6 pm', bondAngle: '120°', atoms: [
      { id: 'b', element: 'B', name: 'Boron', x: 280, y: 180, r: 28, color: '#f0d684', atomicNumber: 5, charge: 'neutral', role: 'central atom' },
      { id: 'f1', element: 'F', name: 'Fluorine', x: 280, y: 80, r: 25, color: '#82e6c6', atomicNumber: 9, charge: 'neutral', role: 'terminal atom' },
      { id: 'f2', element: 'F', name: 'Fluorine', x: 146, y: 265, r: 25, color: '#82e6c6', atomicNumber: 9, charge: 'neutral', role: 'terminal atom' },
      { id: 'f3', element: 'F', name: 'Fluorine', x: 414, y: 265, r: 25, color: '#82e6c6', atomicNumber: 9, charge: 'neutral', role: 'terminal atom' }
    ], bonds: [{ id: 'bf1', a: 'b', b: 'f1', order: 'single', length: '130.6 pm', angle: '120°' }, { id: 'bf2', a: 'b', b: 'f2', order: 'single', length: '130.6 pm', angle: '120°' }, { id: 'bf3', a: 'b', b: 'f3', order: 'single', length: '130.6 pm', angle: '120°' }], angles: [{ label: 'F–B–F', value: '120°', note: 'in-plane angle' }]
  },
  {
    id: 'ethene', name: 'Ethene', formula: 'C₂H₄', symbol: 'C₂H₄', geometry: 'Trigonal planar', polarity: 'Non-polar', hybridization: 'sp²', electronGeometry: 'Trigonal planar',
    domains: 3, bondingDomains: 3, lonePairs: 0, central: 'C', className: 'hydrocarbon', description: 'Each carbon is sp² hybridized. The C=C π bond locks the six atoms into one nearly planar arrangement.',
    facts: ['C=C double bond restricts rotation', 'π electron cloud sits above and below plane'], bondLength: '133.9 pm (C=C)', bondAngle: '117.4°', atoms: [
      { id: 'c1', element: 'C', name: 'Carbon', x: 225, y: 180, r: 28, color: '#7dc0ff', atomicNumber: 6, charge: 'neutral', role: 'sp² center' },
      { id: 'c2', element: 'C', name: 'Carbon', x: 335, y: 180, r: 28, color: '#7dc0ff', atomicNumber: 6, charge: 'neutral', role: 'sp² center' },
      { id: 'h1', element: 'H', name: 'Hydrogen', x: 104, y: 102, r: 21, color: '#d8e4e4', atomicNumber: 1, charge: 'neutral', role: 'terminal atom' },
      { id: 'h2', element: 'H', name: 'Hydrogen', x: 104, y: 258, r: 21, color: '#d8e4e4', atomicNumber: 1, charge: 'neutral', role: 'terminal atom' },
      { id: 'h3', element: 'H', name: 'Hydrogen', x: 456, y: 102, r: 21, color: '#d8e4e4', atomicNumber: 1, charge: 'neutral', role: 'terminal atom' },
      { id: 'h4', element: 'H', name: 'Hydrogen', x: 456, y: 258, r: 21, color: '#d8e4e4', atomicNumber: 1, charge: 'neutral', role: 'terminal atom' }
    ], bonds: [{ id: 'cc', a: 'c1', b: 'c2', order: 'double', length: '133.9 pm', angle: '117.4°' }, { id: 'ch1', a: 'c1', b: 'h1', order: 'single', length: '108.7 pm', angle: '117.4°' }, { id: 'ch2', a: 'c1', b: 'h2', order: 'single', length: '108.7 pm', angle: '117.4°' }, { id: 'ch3', a: 'c2', b: 'h3', order: 'single', length: '108.7 pm', angle: '117.4°' }, { id: 'ch4', a: 'c2', b: 'h4', order: 'single', length: '108.7 pm', angle: '117.4°' }], angles: [{ label: 'H–C–H', value: '117.4°', note: 'planar angle' }, { label: 'H–C=C', value: '121.3°', note: 'planar angle' }]
  },
  {
    id: 'ethanol', name: 'Ethanol', formula: 'C₂H₆O', symbol: 'C₂H₆O', geometry: 'Tetrahedral / bent', polarity: 'Polar', hybridization: 'sp³', electronGeometry: 'Tetrahedral',
    domains: 4, bondingDomains: 4, lonePairs: 2, central: 'C / O', className: 'alcohol', description: 'The carbon skeleton is tetrahedral while the hydroxyl oxygen is bent. The O–H group gives ethanol its permanent dipole.',
    facts: ['Hydroxyl group enables hydrogen bonding', 'Miscible with water at low proportions'], bondLength: '142 pm (C–O)', bondAngle: '108.9°', atoms: [
      { id: 'c1', element: 'C', name: 'Carbon', x: 172, y: 190, r: 28, color: '#7dc0ff', atomicNumber: 6, charge: 'neutral', role: 'sp³ center' },
      { id: 'c2', element: 'C', name: 'Carbon', x: 300, y: 190, r: 28, color: '#7dc0ff', atomicNumber: 6, charge: 'neutral', role: 'sp³ center' },
      { id: 'o', element: 'O', name: 'Oxygen', x: 414, y: 142, r: 28, color: '#f5a36f', atomicNumber: 8, charge: 'neutral', role: 'hydroxyl oxygen' },
      { id: 'h', element: 'H', name: 'Hydrogen', x: 472, y: 222, r: 21, color: '#d8e4e4', atomicNumber: 1, charge: 'neutral', role: 'hydroxyl hydrogen' },
      { id: 'h1', element: 'H', name: 'Hydrogen', x: 92, y: 108, r: 21, color: '#d8e4e4', atomicNumber: 1, charge: 'neutral', role: 'terminal atom' },
      { id: 'h2', element: 'H', name: 'Hydrogen', x: 92, y: 268, r: 21, color: '#d8e4e4', atomicNumber: 1, charge: 'neutral', role: 'terminal atom' },
      { id: 'h3', element: 'H', name: 'Hydrogen', x: 300, y: 300, r: 21, color: '#d8e4e4', atomicNumber: 1, charge: 'neutral', role: 'terminal atom' },
      { id: 'h4', element: 'H', name: 'Hydrogen', x: 176, y: 293, r: 21, color: '#d8e4e4', atomicNumber: 1, charge: 'neutral', role: 'terminal atom' },
      { id: 'h5', element: 'H', name: 'Hydrogen', x: 298, y: 77, r: 21, color: '#d8e4e4', atomicNumber: 1, charge: 'neutral', role: 'terminal atom' }
    ], bonds: [{ id: 'cc', a: 'c1', b: 'c2', order: 'single', length: '152 pm', angle: '109.5°' }, { id: 'co', a: 'c2', b: 'o', order: 'single', length: '142 pm', angle: '108.9°' }, { id: 'oh', a: 'o', b: 'h', order: 'single', length: '96 pm', angle: '104.5°' }, { id: 'ch1', a: 'c1', b: 'h1', order: 'single', length: '109 pm', angle: '109.5°' }, { id: 'ch2', a: 'c1', b: 'h2', order: 'single', length: '109 pm', angle: '109.5°' }, { id: 'ch3', a: 'c2', b: 'h3', order: 'single', length: '109 pm', angle: '109.5°' }, { id: 'ch4', a: 'c1', b: 'h4', order: 'single', length: '109 pm', angle: '109.5°' }, { id: 'ch5', a: 'c2', b: 'h5', order: 'single', length: '109 pm', angle: '109.5°' }], angles: [{ label: 'C–C–O', value: '109.5°', note: 'tetrahedral angle' }, { label: 'C–O–H', value: '104.5°', note: 'bent angle' }]
  },
  {
    id: 'sf6', name: 'Sulfur hexafluoride', formula: 'SF₆', symbol: 'SF₆', geometry: 'Octahedral', polarity: 'Non-polar', hybridization: 'sp³d²', electronGeometry: 'Octahedral',
    domains: 6, bondingDomains: 6, lonePairs: 0, central: 'S', className: 'halide', description: 'Six bonding domains arrange around sulfur at 90° intervals in an octahedron. The highly symmetric shape is non-polar.',
    facts: ['Six equivalent S–F bonds', 'Classic expanded-valence example'], bondLength: '156 pm', bondAngle: '90° / 180°', atoms: [
      { id: 's', element: 'S', name: 'Sulfur', x: 280, y: 180, r: 29, color: '#f0d684', atomicNumber: 16, charge: 'neutral', role: 'central atom' },
      { id: 'f1', element: 'F', name: 'Fluorine', x: 280, y: 62, r: 24, color: '#82e6c6', atomicNumber: 9, charge: 'neutral', role: 'axial atom' },
      { id: 'f2', element: 'F', name: 'Fluorine', x: 280, y: 298, r: 24, color: '#82e6c6', atomicNumber: 9, charge: 'neutral', role: 'axial atom' },
      { id: 'f3', element: 'F', name: 'Fluorine', x: 142, y: 180, r: 24, color: '#82e6c6', atomicNumber: 9, charge: 'neutral', role: 'equatorial atom' },
      { id: 'f4', element: 'F', name: 'Fluorine', x: 418, y: 180, r: 24, color: '#82e6c6', atomicNumber: 9, charge: 'neutral', role: 'equatorial atom' },
      { id: 'f5', element: 'F', name: 'Fluorine', x: 180, y: 88, r: 24, color: '#82e6c6', atomicNumber: 9, charge: 'neutral', role: 'perspective atom' },
      { id: 'f6', element: 'F', name: 'Fluorine', x: 380, y: 272, r: 24, color: '#82e6c6', atomicNumber: 9, charge: 'neutral', role: 'perspective atom' }
    ], bonds: [{ id: 'sf1', a: 's', b: 'f1', order: 'single', length: '156 pm', angle: '90°' }, { id: 'sf2', a: 's', b: 'f2', order: 'single', length: '156 pm', angle: '90°' }, { id: 'sf3', a: 's', b: 'f3', order: 'single', length: '156 pm', angle: '90°' }, { id: 'sf4', a: 's', b: 'f4', order: 'single', length: '156 pm', angle: '90°' }, { id: 'sf5', a: 's', b: 'f5', order: 'single', length: '156 pm', angle: '90°' }, { id: 'sf6', a: 's', b: 'f6', order: 'single', length: '156 pm', angle: '90°' }], angles: [{ label: 'F–S–F', value: '90°', note: 'adjacent angle' }, { label: 'F–S–F', value: '180°', note: 'opposite angle' }]
  },
  {
    id: 'benzene', name: 'Benzene', formula: 'C₆H₆', symbol: 'C₆H₆', geometry: 'Planar hexagon', polarity: 'Non-polar', hybridization: 'sp²', electronGeometry: 'Trigonal planar',
    domains: 3, bondingDomains: 3, lonePairs: 0, central: 'C ring', className: 'aromatic', description: 'Six sp² carbon atoms form a planar hexagonal ring. Delocalized π electrons spread above and below the ring, creating aromatic stability.',
    facts: ['Aromatic 6π electron system', 'All C–C bonds have equalized length'], bondLength: '139.9 pm (C–C)', bondAngle: '120°', atoms: [
      { id: 'c1', element: 'C', name: 'Carbon', x: 280, y: 76, r: 25, color: '#7dc0ff', atomicNumber: 6, charge: 'neutral', role: 'aromatic carbon' },
      { id: 'c2', element: 'C', name: 'Carbon', x: 406, y: 128, r: 25, color: '#7dc0ff', atomicNumber: 6, charge: 'neutral', role: 'aromatic carbon' },
      { id: 'c3', element: 'C', name: 'Carbon', x: 406, y: 244, r: 25, color: '#7dc0ff', atomicNumber: 6, charge: 'neutral', role: 'aromatic carbon' },
      { id: 'c4', element: 'C', name: 'Carbon', x: 280, y: 296, r: 25, color: '#7dc0ff', atomicNumber: 6, charge: 'neutral', role: 'aromatic carbon' },
      { id: 'c5', element: 'C', name: 'Carbon', x: 154, y: 244, r: 25, color: '#7dc0ff', atomicNumber: 6, charge: 'neutral', role: 'aromatic carbon' },
      { id: 'c6', element: 'C', name: 'Carbon', x: 154, y: 128, r: 25, color: '#7dc0ff', atomicNumber: 6, charge: 'neutral', role: 'aromatic carbon' }
    ], bonds: [{ id: 'c12', a: 'c1', b: 'c2', order: 'aromatic', length: '139.9 pm', angle: '120°' }, { id: 'c23', a: 'c2', b: 'c3', order: 'aromatic', length: '139.9 pm', angle: '120°' }, { id: 'c34', a: 'c3', b: 'c4', order: 'aromatic', length: '139.9 pm', angle: '120°' }, { id: 'c45', a: 'c4', b: 'c5', order: 'aromatic', length: '139.9 pm', angle: '120°' }, { id: 'c56', a: 'c5', b: 'c6', order: 'aromatic', length: '139.9 pm', angle: '120°' }, { id: 'c61', a: 'c6', b: 'c1', order: 'aromatic', length: '139.9 pm', angle: '120°' }], angles: [{ label: 'C–C–C', value: '120°', note: 'ring interior angle' }]
  }
];

const atomCanvas = document.getElementById('atomCanvas');
const ctx = atomCanvas.getContext('2d');
const pauseButton = document.getElementById('pauseButton');
const labelsButton = document.getElementById('labelsButton');
const speedRange = document.getElementById('speedRange');
const speedValue = document.getElementById('speedValue');
const particleReadout = document.getElementById('particleReadout');
const moleculeSvg = document.getElementById('moleculeSvg');
const moleculeList = document.getElementById('moleculeList');
const searchInput = document.getElementById('moleculeSearch');
const rotateButton = document.getElementById('rotateButton');
let selectedMolecule = molecules[0];
let selectedEntity = { type: 'molecule' };
let paused = false;
let showLabels = true;
let speed = 1;
let rotation = 0;
let frame = 0;

const cssEscape = (value) => value.replace(/[^a-z0-9_-]/gi, '');
const byId = (id) => selectedMolecule.atoms.find((atom) => atom.id === id);
const formatCount = (n) => String(n).padStart(2, '0');

function resizeCanvas() {
  const rect = atomCanvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  atomCanvas.width = Math.max(1, Math.floor(rect.width * ratio));
  atomCanvas.height = Math.max(1, Math.floor(rect.height * ratio));
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function drawAtom(timestamp = 0) {
  const width = atomCanvas.clientWidth;
  const height = atomCanvas.clientHeight;
  if (!width || !height) return;
  const centerX = width / 2;
  const centerY = height / 2 + 4;
  const base = Math.min(width, height);
  const orbitA = base * .235;
  const orbitB = base * .34;
  const orbitC = base * .445;
  ctx.clearRect(0, 0, width, height);
  ctx.save();
  ctx.translate(centerX, centerY);
  const t = timestamp * .001 * speed;
  const paintOrbit = (rx, ry, tilt, opacity = .3) => {
    ctx.save();
    ctx.rotate(tilt);
    ctx.beginPath();
    ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(130, 230, 198, ${opacity})`;
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 5]);
    ctx.stroke();
    ctx.restore();
  };
  paintOrbit(orbitA, orbitA * .42, -.3, .43);
  paintOrbit(orbitB, orbitB * .34, .58, .25);
  paintOrbit(orbitC, orbitC * .28, -.65, .16);
  const nucleusRadius = base * .11;
  const glow = ctx.createRadialGradient(0, 0, 1, 0, 0, nucleusRadius * 2.6);
  glow.addColorStop(0, 'rgba(245,163,111,.24)'); glow.addColorStop(.55, 'rgba(245,163,111,.06)'); glow.addColorStop(1, 'rgba(245,163,111,0)');
  ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(0, 0, nucleusRadius * 2.6, 0, Math.PI * 2); ctx.fill();
  const particles = [
    [-.36, -.28, '#f5a36f'], [-.05, -.38, '#d8e4e4'], [.28, -.29, '#f5a36f'], [.34, .1, '#d8e4e4'], [.05, .32, '#f5a36f'], [-.32, .2, '#d8e4e4']
  ];
  particles.forEach(([x, y, color], index) => {
    ctx.beginPath(); ctx.arc(x * nucleusRadius * 2.1, y * nucleusRadius * 2.1, nucleusRadius * .42, 0, Math.PI * 2); ctx.fillStyle = color; ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,.2)'; ctx.lineWidth = 1; ctx.stroke();
    if (showLabels && index === 0) { ctx.fillStyle = 'rgba(234,244,243,.65)'; ctx.font = '9px DM Mono, monospace'; ctx.fillText('nucleus', nucleusRadius * 1.5, nucleusRadius * 1.85); }
  });
  const electronColor = '#82e6c6';
  const electrons = [
    { r: orbitA, tilt: -.3, phase: 0, ry: .42 }, { r: orbitA, tilt: -.3, phase: Math.PI, ry: .42 },
    { r: orbitB, tilt: .58, phase: .8, ry: .34 }, { r: orbitB, tilt: .58, phase: Math.PI + .8, ry: .34 },
    { r: orbitC, tilt: -.65, phase: 1.8, ry: .28 }, { r: orbitC, tilt: -.65, phase: Math.PI + 1.8, ry: .28 }
  ];
  electrons.forEach((electron, index) => {
    const angle = electron.phase + t * (index % 2 ? .37 : -.48);
    const localX = Math.cos(angle) * electron.r;
    const localY = Math.sin(angle) * electron.r * electron.ry;
    const x = localX * Math.cos(electron.tilt) - localY * Math.sin(electron.tilt);
    const y = localX * Math.sin(electron.tilt) + localY * Math.cos(electron.tilt);
    ctx.beginPath(); ctx.arc(x, y, 3.1, 0, Math.PI * 2); ctx.shadowBlur = 14; ctx.shadowColor = electronColor; ctx.fillStyle = electronColor; ctx.fill(); ctx.shadowBlur = 0;
    if (showLabels && index === 0) { ctx.strokeStyle = 'rgba(130,230,198,.65)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x + 6, y - 5); ctx.lineTo(x + 37, y - 24); ctx.stroke(); ctx.fillStyle = 'rgba(130,230,198,.9)'; ctx.font = '9px DM Mono, monospace'; ctx.fillText('e⁻ / electron', x + 42, y - 26); }
  });
  ctx.restore();
  frame = requestAnimationFrame(drawAtom);
}

function updateParticleReadout() {
  const centralElement = selectedMolecule.central.split(' / ')[0].trim();
  const representative = selectedMolecule.atoms.find((atom) => atom.element === centralElement) || selectedMolecule.atoms.find((atom) => atom.role.includes('central')) || selectedMolecule.atoms[0];
  const p = representative.atomicNumber;
  const neutronByElement = { H: 0, B: 6, C: 6, N: 7, O: 8, F: 10, S: 16 };
  const n = neutronByElement[representative.element] ?? representative.atomicNumber;
  const e = representative.atomicNumber;
  particleReadout.innerHTML = `<div class="particle-cell"><small>PROTONS</small><strong>${formatCount(p)}<span>p⁺</span></strong></div><div class="particle-cell"><small>NEUTRONS</small><strong>${formatCount(n)}<span>n⁰</span></strong></div><div class="particle-cell"><small>ELECTRONS</small><strong>${formatCount(e)}<span>e⁻</span></strong></div>`;
}

function renderMoleculeList(query = '') {
  const needle = query.trim().toLowerCase();
  const visible = molecules.filter((molecule) => `${molecule.name} ${molecule.formula} ${molecule.geometry} ${molecule.className}`.toLowerCase().includes(needle));
  document.getElementById('indexCount').textContent = `${formatCount(visible.length)} / ${formatCount(molecules.length)}`;
  moleculeList.innerHTML = visible.length ? visible.map((molecule) => `<button class="molecule-card ${molecule.id === selectedMolecule.id ? 'active' : ''}" data-molecule="${molecule.id}" role="option" aria-selected="${molecule.id === selectedMolecule.id}"><span class="molecule-symbol">${molecule.symbol}</span><span class="molecule-card-copy"><span class="molecule-card-name">${molecule.name}</span><span class="molecule-card-meta">${molecule.formula} · ${molecule.polarity.toLowerCase()}</span></span><span class="molecule-card-geometry">${molecule.geometry}</span></button>`).join('') : '<div class="empty-state">No compounds match that search.</div>';
  moleculeList.querySelectorAll('[data-molecule]').forEach((button) => button.addEventListener('click', () => setMolecule(button.dataset.molecule)));
}

function createBondMarkup(bond) {
  const a = byId(bond.a); const b = byId(bond.b);
  if (!a || !b) return '';
  const dx = b.x - a.x; const dy = b.y - a.y; const length = Math.hypot(dx, dy); const nx = -dy / length; const ny = dx / length;
  const offsets = bond.order === 'double' ? [-3.2, 3.2] : bond.order === 'aromatic' ? [-2, 2] : [0];
  return `<g class="atom-bond ${selectedEntity.type === 'bond' && selectedEntity.id === bond.id ? 'selected' : ''}" data-bond="${bond.id}" tabindex="0" role="button" aria-label="${bond.order} bond, ${bond.length}">${offsets.map((offset) => `<line x1="${a.x + nx * offset}" y1="${a.y + ny * offset}" x2="${b.x + nx * offset}" y2="${b.y + ny * offset}" />`).join('')}${bond.order === 'aromatic' ? `<line x1="${a.x + (b.x-a.x)*.18}" y1="${a.y + (b.y-a.y)*.18}" x2="${b.x - (b.x-a.x)*.18}" y2="${b.y - (b.y-a.y)*.18}" stroke-dasharray="3 6" opacity=".45" />` : ''}</g>`;
}

function renderMolecule() {
  const molecule = selectedMolecule;
  document.getElementById('moleculeTitle').innerHTML = `${molecule.name} <small>${molecule.formula}</small>`;
  document.getElementById('geometryValue').textContent = molecule.geometry;
  document.getElementById('polarityValue').textContent = molecule.polarity;
  document.getElementById('hybridValue').textContent = molecule.hybridization;
  document.getElementById('atomCountLabel').textContent = `${molecule.atoms.length} ATOMS`;
  const defs = `<defs><filter id="atomGlow"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter><radialGradient id="centerAura"><stop offset="0" stop-color="#aa9bff" stop-opacity=".16"/><stop offset="1" stop-color="#aa9bff" stop-opacity="0"/></radialGradient></defs><circle cx="280" cy="180" r="118" fill="url(#centerAura)"/>`;
  const bondMarkup = molecule.bonds.map(createBondMarkup).join('');
  const atomMarkup = molecule.atoms.map((atom) => `<g class="atom-node ${selectedEntity.type === 'atom' && selectedEntity.id === atom.id ? 'selected' : ''}" data-atom="${atom.id}" tabindex="0" role="button" aria-label="${atom.name}, ${atom.role}"><circle class="atom-depth" cx="${atom.x + 5}" cy="${atom.y + 6}" r="${atom.r + 3}" fill="#02080d"/><circle cx="${atom.x}" cy="${atom.y}" r="${atom.r}" fill="${atom.color}"/><text x="${atom.x}" y="${atom.y}">${atom.element}</text>${showLabels ? `<text x="${atom.x}" y="${atom.y + atom.r + 17}" fill="#8da5ad" font-size="9" text-anchor="middle">${atom.role}</text>` : ''}</g>`).join('');
  moleculeSvg.innerHTML = defs + bondMarkup + atomMarkup;
  moleculeSvg.querySelectorAll('[data-atom]').forEach((node) => { node.addEventListener('click', () => inspectAtom(node.dataset.atom)); node.addEventListener('keydown', (event) => { if (event.key === 'Enter') inspectAtom(node.dataset.atom); }); });
  moleculeSvg.querySelectorAll('[data-bond]').forEach((node) => { node.addEventListener('click', () => inspectBond(node.dataset.bond)); node.addEventListener('keydown', (event) => { if (event.key === 'Enter') inspectBond(node.dataset.bond); }); });
  updateParticleReadout();
}

function renderMoleculeInspector() {
  const molecule = selectedMolecule;
  document.getElementById('selectionChip').textContent = selectedEntity.type === 'molecule' ? 'MOLECULE' : selectedEntity.type.toUpperCase();
  if (selectedEntity.type === 'molecule') {
    document.getElementById('inspectorDescription').textContent = molecule.description;
    document.getElementById('dataGrid').innerHTML = `<div class="data-cell"><label>ELECTRON DOMAINS</label><strong>${molecule.domains}</strong></div><div class="data-cell"><label>BONDING DOMAINS</label><strong>${molecule.bondingDomains}</strong></div><div class="data-cell"><label>LONE PAIRS</label><strong>${molecule.lonePairs}</strong></div><div class="data-cell"><label>CENTRAL ATOM</label><strong>${molecule.central}</strong></div>`;
    document.getElementById('measurementTable').innerHTML = `<div class="measurement-row head"><span>PROPERTY</span><span>VALUE</span><span>REFERENCE</span></div>${molecule.angles.map((angle) => `<div class="measurement-row"><span class="strong">${angle.label}</span><span class="accent">${angle.value}</span><span>${angle.note}</span></div>`).join('')}<div class="measurement-row"><span class="strong">Primary bond</span><span class="accent">${molecule.bondLength}</span><span>equilibrium</span></div>`;
    document.getElementById('domainFooter').innerHTML = `<strong>VSEPR readout:</strong> ${molecule.domains} electron domains around ${molecule.central} → ${molecule.electronGeometry} electron geometry. ${molecule.facts.join(' · ')}.`;
  } else if (selectedEntity.type === 'atom') {
    const atom = byId(selectedEntity.id); const connected = molecule.bonds.filter((bond) => bond.a === atom.id || bond.b === atom.id);
    document.getElementById('inspectorDescription').textContent = `${atom.name} is the ${atom.role} in ${molecule.name}. Select a bond to inspect its order and equilibrium length.`;
    document.getElementById('dataGrid').innerHTML = `<div class="data-cell"><label>ELEMENT</label><strong>${atom.element}</strong></div><div class="data-cell"><label>ATOMIC NUMBER</label><strong>${atom.atomicNumber}</strong></div><div class="data-cell"><label>FORMAL CHARGE</label><strong>${atom.charge}</strong></div><div class="data-cell"><label>CONNECTED BONDS</label><strong>${connected.length}</strong></div>`;
    document.getElementById('measurementTable').innerHTML = `<div class="measurement-row head"><span>CONNECTED BOND</span><span>LENGTH</span><span>ANGLE</span></div>${connected.map((bond) => { const other = byId(bond.a === atom.id ? bond.b : bond.a); return `<div class="measurement-row"><span class="strong">${atom.element}–${other.element} <small>(${bond.order})</small></span><span class="accent">${bond.length}</span><span>${bond.angle}</span></div>`; }).join('')}`;
    document.getElementById('domainFooter').innerHTML = `<strong>Local role:</strong> ${atom.role}. ${atom.element} contributes its valence electrons to the bonding domains shown in the molecule overview.`;
  } else {
    const bond = molecule.bonds.find((item) => item.id === selectedEntity.id); const a = byId(bond.a); const b = byId(bond.b);
    document.getElementById('inspectorDescription').textContent = `${a.name}–${b.name} connection in ${molecule.name}. Bond order describes how many electron pairs are shared between the two atoms.`;
    document.getElementById('dataGrid').innerHTML = `<div class="data-cell"><label>BOND ORDER</label><strong>${bond.order}</strong></div><div class="data-cell"><label>LENGTH</label><strong>${bond.length}</strong></div><div class="data-cell"><label>ANGLE CONTEXT</label><strong>${bond.angle}</strong></div><div class="data-cell"><label>ENDPOINTS</label><strong>${a.element} · ${b.element}</strong></div>`;
    document.getElementById('measurementTable').innerHTML = `<div class="measurement-row head"><span>MEASUREMENT</span><span>VALUE</span><span>MODEL</span></div><div class="measurement-row"><span class="strong">${a.element}–${b.element} length</span><span class="accent">${bond.length}</span><span>equilibrium</span></div><div class="measurement-row"><span class="strong">Local angle context</span><span class="accent">${bond.angle}</span><span>VSEPR</span></div>`;
    document.getElementById('domainFooter').innerHTML = `<strong>Bond lens:</strong> ${bond.order === 'double' ? 'Two shared electron pairs create a double bond.' : bond.order === 'aromatic' ? 'Electron density is delocalized across the aromatic ring.' : 'One shared electron pair creates a sigma bond.'}`;
  }
}

function setMolecule(id) {
  selectedMolecule = molecules.find((molecule) => molecule.id === id) || molecules[0];
  selectedEntity = { type: 'molecule' };
  renderMoleculeList(searchInput.value);
  renderMolecule();
  renderMoleculeInspector();
}
function inspectAtom(id) { selectedEntity = { type: 'atom', id }; renderMolecule(); renderMoleculeInspector(); }
function inspectBond(id) { selectedEntity = { type: 'bond', id }; renderMolecule(); renderMoleculeInspector(); }

pauseButton.addEventListener('click', () => { paused = !paused; pauseButton.querySelector('span:last-child').textContent = paused ? 'Resume' : 'Pause'; pauseButton.querySelector('.pause-icon').classList.toggle('play', paused); if (paused) cancelAnimationFrame(frame); else frame = requestAnimationFrame(drawAtom); });
labelsButton.addEventListener('click', () => { showLabels = !showLabels; labelsButton.style.color = showLabels ? 'var(--muted)' : 'var(--lavender)'; renderMolecule(); });
speedRange.addEventListener('input', () => { speed = Number(speedRange.value); speedValue.textContent = `${speed.toFixed(1)}×`; });
searchInput.addEventListener('input', () => renderMoleculeList(searchInput.value));
window.addEventListener('keydown', (event) => { if (event.key === '/' && document.activeElement !== searchInput) { event.preventDefault(); searchInput.focus(); } });
rotateButton.addEventListener('click', () => { rotation = rotation ? 0 : 180; moleculeSvg.style.transform = `rotateY(${rotation}deg)`; });
window.addEventListener('resize', resizeCanvas);
document.querySelectorAll('[data-scroll]').forEach((button) => button.addEventListener('click', () => { document.getElementById(button.dataset.scroll).scrollIntoView({ behavior: 'smooth', block: 'start' }); document.querySelectorAll('.nav-item').forEach((item) => item.classList.toggle('active', item === button)); }));

resizeCanvas();
renderMoleculeList();
renderMolecule();
renderMoleculeInspector();
frame = requestAnimationFrame(drawAtom);
