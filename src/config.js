'use strict';
import 'dotenv/config';
const config = {};
config.kiosk = false;
// config.kiosk = {
//   touch: false,
//   refresh: 60000
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
config.id= "mcswap-shop";
config.name= "Module Demo";
config.default_priority= "Low";
config.default_display= "All Listings";
config.default_sort= "Newest First";
config.text_intro= "Initializing Demo";
config.text_buy= "Buy Me";
config.logo= "./img/logo.png";
config.logo_link= "https://x.com/SolDapper";
config.enable_new_listings= true;
config.enable_edit_sort= true;
config.enable_edit_display= true;
config.enable_edit_core= true;
config.core_display= true;
config.enable_edit_nft= true;
config.nft_display= true;
config.enable_edit_pnft= true;
config.pnft_display= true;
config.enable_edit_cnft= true;
config.cnft_display= true;
config.fee_create= 0;
config.fee_execute= 0;
config.treasury= "ACgZcmgmAnMDxXxZUo9Zwg2PS6WQLXy63JnnLmJFYxZZ";
config.collections= "6Gfz6beNCcP8P7vrMyN2AFtsuv8rkVszSJ8xoP4zQyaR,ACy3ZVXcch8mZXUtRVqsJfa2DhFHxnUJpBb4oeN9tZsX,BL8ocmGmaEiM73JYjAAhgAmHPbtuY3CThYem9g4N5PqQ,BTJPWLW7DLQWpm2TNNEByAM5a1E1AGJp4h43czo9YBLc,Cq2BNRoE5RqyqSmACDQLx4ivp3MgmePwd2mdroZ5hmom,H3mnaqNFFNwqRfEiWFsRTgprCvG4tYFfmNezGEVnaMuQ";
config.sellers= "7Z3LJB2rxV4LiRBwgwTcufAWxnFTVJpcoCMiCo8Z5Ere,2jcih7dUFmEQfMUXQQnL2Fkq9zMqj4jwpHqvRVe3gGLL";
config.enable_edit_sellers= true;
config.enable_edit_collections= true;
config.master_settings= true;
config.collections_display= true;
config.sellers_display= true;
config.solana_pay=process.env.PAY;
export default config;