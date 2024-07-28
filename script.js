// script.js
let money = 0;
let gold = 0;
let gems = 0;
let earningRate = 1;
let products = [
  { name: 'Moisturizer', price: 10, effect: 1 },
  { name: 'Cleanser', price: 15, effect: 2 },
  { name: 'Toner', price: 20, effect: 3 },
  { name: 'Serum', price: 30, effect: 4 },
  { name: 'Eye Cream', price: 40, effect: 5 },
  { name: 'Face Mask', price: 50, effect: 6 },
  { name: 'Sunscreen', price: 60, effect: 7 },
  { name: 'Night Cream', price: 75, effect: 8 },
  { name: 'Exfoliator', price: 90, effect: 9 },
  { name: 'Facial Oil', price: 100, effect: 10 },
  { name: 'Anti-Aging Cream', price: 120, effect: 11 },
  { name: 'Brightening Cream', price: 140, effect: 12 },
  { name: 'Hydrating Gel', price: 160, effect: 13 },
  { name: 'Collagen Serum', price: 180, effect: 14 },
  { name: 'Vitamin C Serum', price: 200, effect: 15 },
  { name: 'Retinol Cream', price: 220, effect: 16 },
  { name: 'Pore Minimizer', price: 240, effect: 17 },
  { name: 'Whitening Cream', price: 260, effect: 18 },
  { name: 'Eye Gel', price: 280, effect: 19 },
  { name: 'Face Scrub', price: 300, effect: 20 },
  { name: 'Aloe Vera Gel', price: 320, effect: 21 },
  { name: 'Shea Butter Cream', price: 340, effect: 22 },
  { name: 'Cucumber Mask', price: 360, effect: 23 },
  { name: 'Rose Water', price: 380, effect: 24 },
  { name: 'Tea Tree Oil', price: 400, effect: 25 },
  { name: 'Peptide Serum', price: 420, effect: 26 },
  { name: 'Ceramide Cream', price: 440, effect: 27 },
  { name: 'Squalane Oil', price: 460, effect: 28 },
  { name: 'Glycolic Acid', price: 480, effect: 29 },
  { name: 'Hyaluronic Acid', price: 500, effect: 30 },
  { name: 'Lactic Acid', price: 520, effect: 31 },
  { name: 'Niacinamide', price: 540, effect: 32 },
  { name: 'Ferulic Acid', price: 560, effect: 33 },
  { name: 'Bakuchiol', price: 580, effect: 34 },
  { name: 'AHA Serum', price: 600, effect: 35 },
  { name: 'BHA Serum', price: 620, effect: 36 },
  { name: 'PHA Serum', price: 640, effect: 37 },
  { name: 'Azelaic Acid', price: 660, effect: 38 },
  { name: 'Centella Cream', price: 680, effect: 39 },
  { name: 'Snail Mucin', price: 700, effect: 40 },
  { name: 'Propolis Serum', price: 720, effect: 41 },
  { name: 'Green Tea Cream', price: 740, effect: 42 },
  { name: 'Rice Bran Oil', price: 760, effect: 43 },
  { name: 'Kojic Acid', price: 780, effect: 44 },
  { name: 'Mandelic Acid', price: 800, effect: 45 },
  { name: 'Tranexamic Acid', price: 820, effect: 46 },
  { name: 'Mulberry Extract', price: 840, effect: 47 },
  { name: 'Licorice Extract', price: 860, effect: 48 },
  { name: 'Arbutin Serum', price: 880, effect: 49 },
  { name: 'Aloe Vera Cream', price: 900, effect: 50 },
  { name: 'Luxury Serum', price: 920, effect: 51 },
  { name: 'Ultimate Skincare Set', price: 950, effect: 52 }
];
let upgrades = [
  { name: 'Upgrade 1', cost: 100, effect: 5 },
  { name: 'Upgrade 2', cost: 200, effect: 10 },
  { name: 'Upgrade 3', cost: 400, effect: 20 },
  { name: 'Upgrade 4', cost: 800, effect: 40 },
  { name: 'Upgrade 5', cost: 1600, effect: 80 },
  { name: 'Upgrade 6', cost: 3200, effect: 160 },
  { name: 'Upgrade 7', cost: 6400, effect: 320 },
  { name: 'Upgrade 8', cost: 12800, effect: 640 },
  { name: 'Upgrade 9', cost: 25600, effect: 1280 },
  { name: 'Upgrade 10', cost: 51200, effect: 2560 },
  { name: 'Upgrade 11', cost: 102400, effect: 5120 },
  { name: 'Upgrade 12', cost: 204800, effect: 10240 }
];
let youtubeStarted = false;

function updateCurrencies() {
  document.getElementById('money').textContent = money;
  document.getElementById('gold').textContent = gold;
  document.getElementById('gems').textContent = gems;
}

function earnMoney() {
  money += earningRate;
  updateCurrencies();
}

function buyProduct(productName) {
  const product = products.find(p => p.name === productName);
  if (money >= product.price) {
    money -= product.price;
    earningRate += product.effect;
    updateCurrencies();
    alert(`Bought ${product.name}!`);
  } else {
    alert(`Not enough money to buy ${product.name}!`);
  }
}

function buyUpgrade(upgradeName) {
  const upgrade = upgrades.find(u => u.name === upgradeName);
  if (money >= upgrade.cost) {
    money -= upgrade.cost;
    earningRate += upgrade.effect;
    updateCurrencies();
    alert(`Bought ${upgrade.name}!`);
  } else {
    alert(`Not enough money to buy ${upgrade.name}!`);
  }
}

function startYouTubeChannel() {
  if (!youtubeStarted) {
    youtubeStarted = true;
    alert('YouTube channel started!');
   
