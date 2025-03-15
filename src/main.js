// ****************************************************
'use strict';
import $ from "jquery";
// import shop from "mcswap-shop";
import mcswapConnector from "../plugin/mcswap-connector.js";
import shop from "../plugin/mcswap-shop";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import 'animate.css';
import 'dotenv/config';
const rpc = process.env.RPC;
const wallets = ["phantom","solflare","backpack"];
const connector = new mcswapConnector(wallets);
connector.init();
// ****************************************************
// mcswap shop
(async()=>{
    const store = new shop();
    store.init({
      rpc: rpc,
      wallets: ["phantom","solflare","backpack"], // phantom, solflare, backpack
      id: "demo-market",
      name: "McSwap Shop",
      default_priority: "Low",
      default_display: "Collections Only",
      default_sort: "Newest First",
      text_intro: "Initializing Demo",
      text_buy: "Buy Me",
      logo: "https://pbs.twimg.com/profile_images/1827444138700054528/esOO7O4K_400x400.png",
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
      master_settings: true
    });
})();

//*****************************************************
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