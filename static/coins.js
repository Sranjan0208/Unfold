import btcLogo from "../assets/btc.png";
import maticLogo from "../assets/matic.png";
import dogeLogo from "../assets/doge.png";
import ethLogo from "../assets/eth.png";
import lunaLogo from "../assets/luna.png";
import solLogo from "../assets/sol.png";

export const coins = [
  {
    id: 1,
    name: "Bitcoin",
    sign: "BTC",
    logo: btcLogo,
    balanceINR: 18388,
    balanceCoin: 6.35667736,
    priceINR: 424.74,
    change: -4.74,
    allocation: 41.89,
  },
  {
    id: 2,
    name: "Solana",
    sign: "CRV",
    logo: solLogo,
    balanceINR: 9596.59,
    balanceCoin: 6.35667736,
    priceINR: 424.74,
    change: 4.74,
    allocation: 41.89,
  },
  {
    id: 3,
    name: "Polygon",
    sign: "MATIC",
    logo: maticLogo,
    balanceINR: 95.81,
    balanceCoin: 3.35664236,
    priceINR: 424.74,
    change: -5.24,
    allocation: 17.89,
  },
  {
    id: 4,
    name: "Ethereum",
    sign: "ETH",
    logo: ethLogo,
    balanceINR: 95.81,
    balanceCoin: 3.35664236,
    priceINR: 416.76,
    change: 6.24,
    allocation: 17.89,
  },
  {
    id: 5,
    name: "Terra",
    sign: "LUNA",
    logo: lunaLogo,
    balanceINR: 95.81,
    balanceCoin: 3.35664236,
    priceINR: 416.76,
    change: -5.24,
    allocation: 17.89,
  },
  {
    id: 6,
    name: "Dogecoin 🌙",
    sign: "DOGE",
    logo: dogeLogo,
    balanceINR: 1.2,
    balanceCoin: 3.35664236,
    priceINR: 5.22,
    change: 2.51,
    allocation: 17.89,
  },
];
