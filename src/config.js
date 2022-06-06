const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.sol;

// General metadata for Ethereum
const namePrefix = "Innovation Nights 1st Edition";
const description = "Created by CBQA Solutions";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "CBQA",
  seller_fee_basis_points: 0, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://cbqasolutions.com",
  creators: [
    {
      address: "63SzTB5d9qm7gywMA6f6ETATYgkaqPy6ZvV67ZhJLED4",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    layersOrder: [
      {
        name: "Background",
        options: {
          displayName: "background",
        },
      },
      {
        name: "CloudSpecial",
        options: {
          displayName: "cloud",
        },
      },
      {
        name: "CBSpecial",
        options: {
          displayName: "cb",
        },
      },
      {
        name: "QASpecial",
        options: {
          displayName: "qa",
        },
      },
      {
        name: "Gift",
        options: {
          displayName: "gift",
        },
      },
    ],
  },
  {
    growEditionSizeTo: 100,
    layersOrder: [
      {
        name: "Background",
        options: {
          displayName: "background",
        },
      },
      {
        name: "Cloud",
        options: {
          displayName: "cloud",
        },
      },
      {
        name: "CB",
        options: {
          displayName: "cb",
        },
      },
      {
        name: "QA",
        options: {
          displayName: "qa",
        },
      },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 8269,
  height: 6249,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 1 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  collection: {
    name: "Innovation Nights 1st Edition",
    family: "CBQA Solutions Inc."
  },
  gift: false,
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
