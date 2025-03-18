// ****************************************************
'use strict';
import $ from "jquery";
import 'animate.css';
import 'dotenv/config';
// ****************************************************
// mcswap connector
import EventEmitter from 'events';
const emitter = new EventEmitter();
emitter.on('mcswap_connected',async()=>{
  $("#mcswap_cover, #mcswap_chooser").fadeOut(300);
  $("#mcswap_message").html("");
});
emitter.on('mcswap_disconnected',async()=>{
  $(".mcswap-item").removeClass("active");
  $(".mcswap-details-buy").prop("disabled", false);
  $(".mcswap-details-delist").prop("disabled", false).hide();
});
import mcswapConnector from "mcswap-connector";
import "mcswap-connector/src/colors/green-connector.css";
// import mcswapConnector from "../plugin/mcswap-connector.js";
// import "../plugin/green-connector.css";
const _wallets_ = process.env.WALLETS;
const wallets = _wallets_.split(",");
new mcswapConnector(wallets,emitter).init();

// ****************************************************
// styler
const styler = {
  shop:{
    "background": "#1a1a1a",
    "background-repeat": "no-repeat",
    "background-size": "cover",
    "background-position": "center"
  },
  wrapper:{
    // "background": "#000000eb"
  },
  header:{
    "color": "#fff"
  },
  titles:{
    "color": "#fff"
  },
  details:{
    "color": "#1367d4",
  },
  labels:{
    "color": "#1367d4",
  }
};

// ****************************************************
// mcswap shop
// import shop from "../plugin/mcswap-shop.js";
import shop from "mcswap-shop";
import "mcswap-shop/src/colors/green-shop.css";
(async()=>{
    const myshop = new shop(process.env.RPC);
    myshop.init({
      id: "demo-market",
      name: "McSwap Shop",
      default_priority: "Low",
      default_display: "All Listings",
      default_sort: "Newest First",
      text_intro: "Initializing Demo",
      text_buy: "Buy Me",
      logo: "https://pbs.twimg.com/profile_images/1827444138700054528/esOO7O4K_400x400.png",
      logo_link: "https://x.com/SolDapper",
      app_logo: "https://pbs.twimg.com/profile_images/1827444138700054528/esOO7O4K_400x400.png",
      enable_new_listings: true,
      enable_edit_sort: true,
      enable_edit_display: true,
      enable_edit_core: true,
      core_display: true,
      enable_edit_nft: true,
      nft_display: true,
      enable_edit_pnft: true,
      pnft_display: true,
      enable_edit_cnft: true,
      cnft_display: true,
      fee_create: 0,
      fee_execute: 0,
      treasury: "ACgZcmgmAnMDxXxZUo9Zwg2PS6WQLXy63JnnLmJFYxZZ",
      collections: "6Gfz6beNCcP8P7vrMyN2AFtsuv8rkVszSJ8xoP4zQyaR,ACy3ZVXcch8mZXUtRVqsJfa2DhFHxnUJpBb4oeN9tZsX,BL8ocmGmaEiM73JYjAAhgAmHPbtuY3CThYem9g4N5PqQ,BTJPWLW7DLQWpm2TNNEByAM5a1E1AGJp4h43czo9YBLc,Cq2BNRoE5RqyqSmACDQLx4ivp3MgmePwd2mdroZ5hmom,H3mnaqNFFNwqRfEiWFsRTgprCvG4tYFfmNezGEVnaMuQ",
      sellers: "7Z3LJB2rxV4LiRBwgwTcufAWxnFTVJpcoCMiCo8Z5Ere,2jcih7dUFmEQfMUXQQnL2Fkq9zMqj4jwpHqvRVe3gGLL",
      enable_edit_sellers: true,
      enable_edit_collections: true,
      master_settings: true,
      collections_display: true,
      sellers_display: true,
      shop_styler: styler
    });
})();

//*****************************************************
// intro
setTimeout(function(){
  $("#intro-1").removeClass("animate__flipInY").addClass("animate__zoomOut");
  $("#intro-2").show();
  setTimeout(function(){
    $("#intro-2").removeClass("animate__flipInY").addClass("animate__zoomOut");
    $("#intro-3").show();
    setTimeout(function(){
      $("#intro-3").removeClass("animate__flipInY").addClass("animate__zoomOut");
      $("#intro").fadeOut(800);
      $("body").css({"overflow":"auto"});
    },2400);
  },1800);
},1800);