// ****************************************************
'use strict';
import $ from "jquery";
import 'animate.css';
import 'dotenv/config';
import "@fontsource/ubuntu";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import "./style.css";
// import "./colors/blue-app.css";

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
// import mcswapConnector from "../plugin/mcswap-connector.js";
// import "mcswap-connector/src/colors/blue-connector.css";
const _wallets_ = process.env.WALLETS;
const wallets = _wallets_.split(",");
new mcswapConnector(wallets,emitter).init();

// ****************************************************
// app config
const config = {};
config.menu = [
  {
    text: "App",
    title: "McSwap App Repo",
    href: "https://github.com/SolDapper/mcswap-app",
  },
  {
    text: "Shop",
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
    view: "sdk",
  },
  {
    text: "Discord",
    title: "McSwap Discord",
    href: "https://discord.gg/Z9bUEf8gYb",
  },
  {
    text: "X",
    title: "McSwap on X",
    href: "https://x.com/mcswapshop",
  }
];

// ****************************************************
// apply intro text
$("#intro-1").html("Your Own");
$("#intro-2").html("Digital Asset Shop");
$("#intro-3").html("McSwap!");

// ****************************************************
// apply banner and menu
for(let i=0; i<config.menu.length; i++){
  const item = config.menu[i];
  $("#mcswap_menu_top").append("<a class='mcswap_menu_link' target='_blank' href='"+item.href+"' title='"+item.title+"'>"+item.text+"</a>");
  $("#mcswap_menu_drop").append("<a class='mcswap_menu_link' target='_blank' href='"+item.href+"' title='"+item.title+"'>"+item.text+"</a>");
}

// ****************************************************
// mobile menu open/close
$("#mcswap_menu_button").on("click", function(){
  if($(this).hasClass("mcswap_menu_active")){
    $(this).removeClass("mcswap_menu_active");
    $("#mcswap_menu_drop").hide();
  }
  else{
    $(this).addClass("mcswap_menu_active");
    $("#mcswap_menu_drop").show();
  }
});

// ****************************************************
// mobile menu button clicks
$("a.mcswap_menu_link, a#mcswap-solana-link").on("click", function(e){
  e.preventDefault();
  if(isMobile()){
    copy($(this).attr("href"));
  }
  else{
    window.open($(this).attr("href"),'_blank').focus();
  }
});

// ****************************************************
// mcswap shop
// import shop from "../plugin/mcswap-shop.js";
import shop from "mcswap-shop";
// import "mcswap-shop/src/colors/green-shop.css";
const myshop = new shop(process.env.RPC);
myshop.init({
  id: "mcswap-shop",
  name: "Demo Shop",
  default_priority: "Low",
  default_display: "All Listings",
  default_sort: "Newest First",
  text_intro: "Initializing Demo",
  text_buy: "Buy Me",
  logo: "./img/logo.png",
  logo_link: "https://x.com/SolDapper",
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
  // shop_styler: {
  //   shop:{
  //     "background": "#1a1a1a",
  //     "background-repeat": "no-repeat",
  //     "background-size": "cover",
  //     "background-position": "center"
  //   },
  //   wrapper:{
  //     // "background": "#000000eb"
  //   },
  //   header:{
  //     "color": "#fff"
  //   },
  //   titles:{
  //     "color": "#fff"
  //   },
  //   details:{
  //     "color": "#1367d4",
  //   },
  //   labels:{
  //     "color": "#1367d4",
  //   }
  // }
});

// *****************************************************
// clipboard
function copy(string){
  let textArea = document.createElement('textarea');
  textArea.setAttribute('style', 'width:1px;border:0;opacity:0;');
  textArea.setAttribute('id', 'temp_copy');
  document.body.appendChild(textArea);
  textArea.value = string;
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  toast("Copied to Clipboard", 2000);
  return;
}

// *****************************************************
// mobile check
function isMobile(){
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// *****************************************************
// toast
function toast(message,wait,error=false){
  let color = "#111";
  let background = "#fff";
  if(error===true){
      color = "#111";
      background = "#fff"
  }
  else{
      color = "#111";
      background = "#fff";
  }
  Toastify({
      text: message,
      duration: wait,
      newWindow: false,
      close: false,
      gravity: "bottom", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: false, // Prevents dismissing of toast on hover
      style: {
          "font-weight": "bold",
          "font-family": "Ubuntu",
          "border-radius": "10px",
          "color": color,
          "background": background,
      },
      onClick: function(){} // Callback after click
  }).showToast();
}

// *****************************************************
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