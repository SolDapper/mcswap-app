'use strict';
import 'dotenv/config';
const config = {};
config.kiosk = false;
// config.kiosk = {
//   touch:true,
//   refresh:60000
// };
config.menu = [
  // {
  //   text: "App",
  //   title: "McSwap App Repo",
  //   href: "https://github.com/SolDapper/mcswap-app",
  // },
  {
    text: "Module",
    title: "McSwap Shop Repo",
    href: "https://github.com/SolDapper/mcswap-shop",
  },
  {
    text: "Connector",
    title: "McSwap Connector Repo",
    href: "https://github.com/SolDapper/mcswap-connector",
  },
  {
    text: "SDK",
    title: "McSwap SDK Repo",
    href: "https://github.com/SolDapper/mcswap-sdk",
  },
  {
    text: "API",
    title: "McSwap API Repo",
    href: "https://github.com/SolDapper/mcswap-api",
  },
  {
    title: "McSwap Discord",
    href: "https://discord.gg/Z9bUEf8gYb",
    img: "discord"
  },
  {
    title: "McSwap X",
    href: "https://x.com/mcswapshop",
    img: "x"
  }
];
config.solana_pay=process.env.PAY;
export default config;