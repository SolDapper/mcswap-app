// ****************************************************
'use strict';
import $ from "jquery";
// import mcswapMarket from "mcswap-shop";
// import "mcswap-market/mcswap-shop.css";
import shop from "../plugin/mcswap-shop";
import "../plugin/mcswap-shop.css";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import 'animate.css';
import 'dotenv/config';
const rpc = process.env.RPC;
let provider = false;
// ****************************************************

// ****************************************************
(async()=>{
    const store = new shop();
    store.init({
      rpc: rpc,
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
      collections: "ACy3ZVXcch8mZXUtRVqsJfa2DhFHxnUJpBb4oeN9tZsX,BL8ocmGmaEiM73JYjAAhgAmHPbtuY3CThYem9g4N5PqQ,BTJPWLW7DLQWpm2TNNEByAM5a1E1AGJp4h43czo9YBLc,Cq2BNRoE5RqyqSmACDQLx4ivp3MgmePwd2mdroZ5hmom,H3mnaqNFFNwqRfEiWFsRTgprCvG4tYFfmNezGEVnaMuQ",
      sellers: "7Z3LJB2rxV4LiRBwgwTcufAWxnFTVJpcoCMiCo8Z5Ere,2jcih7dUFmEQfMUXQQnL2Fkq9zMqj4jwpHqvRVe3gGLL",
      enable_edit_sellers: true,
      enable_edit_collections: true,
      master_settings: true
    });
})();
// ****************************************************

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
//*****************************************************

//*****************************************************
// connector
async function mcswapConnected(){
  toast("Connected!", 2000);
}
async function mcswapDisconnected(){
  toast("Disconnected!", 2000);
  $(".mcswap-item").removeClass("active");
  $(".mcswap-details-buy").prop("disabled", false);
  $(".mcswap-details-delist").prop("disabled", false).hide();
}
function isInAppBrowser(_wallet_) {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if(_wallet_=="Phantom"){
    return /Phantom/i.test(userAgent);
  }
  else if(_wallet_=="Solflare"){
    return /Solflare/i.test(userAgent);
  }
  else if(_wallet_=="Backpack"){
    return /Backpack/i.test(userAgent);
  }
}
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
const wallet_provider = () => {
  const isBackpackInstalled = window.backpack && window.backpack.isBackpack;
  const isSolflareInstalled = window.solflare && window.solflare.isSolflare;
  const isPhantomInstalled = window.solana && window.solana.isPhantom;
  if (isBackpackInstalled && connect_3 == "backpack") {
    return window.backpack;
  }
  else if (isSolflareInstalled && connect_3 == "solflare") {
    return window.solflare;
  } 
  else if (isPhantomInstalled && connect_3 == "phantom") {
    return window.solana;
  }
}
$('.connect_3_button').on('click', function() {
    const isPhantomInstalled = window.solana && window.solana.isPhantom;
    const isSolflareInstalled = window.solflare && window.solflare.isSolflare;
    const isBackpackInstalled = window.backpack && window.backpack.isBackpack;
    $("#connect_3_cover, #connect_3_chooser").fadeIn(300);
    if(isInAppBrowser("Phantom")===true){
      $("#connect_3_phantom").attr("disabled", false);
    }
    else if(isInAppBrowser("Solflare")===true){
      $("#connect_3_solflare").attr("disabled", false);
    } 
    else if(isInAppBrowser("Backpack")===true){
      $("#connect_3_backpack").attr("disabled", false);
    }
    else if(isMobile()!=true){
      if(isPhantomInstalled===true){
        $("#connect_3_phantom").attr("disabled", false);
      }
      if(isSolflareInstalled===true){
        $("#connect_3_solflare").attr("disabled", false);
      } 
      if(isBackpackInstalled===true){
        $("#connect_3_backpack").attr("disabled", false);
      }
    }
    else{
      $("#connect_3_phantom").attr("disabled", false);
      $("#connect_3_solflare").attr("disabled", false);
      $("#connect_3_backpack").attr("disabled", false);
    }
});
$('.connect_3_choice').on('click', function() {
  const id = $(this).attr("id");
  if(id=="connect_3_cancel"){
    toast("Disconnected!", 2000);
    $("#connect_3_message").html("");
    $("#connect_3_cover, #connect_3_chooser").fadeOut(300);
    $("#connect_3_phantom, #connect_3_solflare, #connect_3_backpack").attr("disabled", true);
  }
  else{
    connect_3_connect(id.replace("connect_3_",""));
  } 
});
async function connect_3_connect(provider_name){
    connect_3 = provider_name;
    provider = await wallet_provider();
    if (typeof provider == "undefined") {
      var app_link;
      if(connect_3=="solflare"){
        app_link = "https://solflare.com/ul/v1/browse/"+encodeURIComponent("https://"+window.location.hostname+window.location.pathname+"#connect_3-solflare")+"?ref="+encodeURIComponent("https://"+window.location.hostname);
      }
      else if(connect_3=="phantom"){
        app_link = "https://phantom.app/ul/browse/"+encodeURIComponent("https://"+window.location.hostname+window.location.pathname+"#connect_3-phantom")+"?ref="+encodeURIComponent("https://"+window.location.hostname);
      }
      else if(connect_3=="backpack"){
        app_link = "https://backpack.app/ul/browse/"+encodeURIComponent("https://"+window.location.hostname+window.location.pathname+"#connect_3-backpack")+"?ref="+encodeURIComponent("https://"+window.location.hostname);
      }
      let a = document.createElement('a');
      a.id = "connect_3_deep";
      a.href = app_link;
      document.body.appendChild(a);
      a.click(); a.remove();
      $("#connect_3_cover, #connect_3_chooser").fadeOut(300);
      setTimeout(function(){$("#connect_3_message").html("");},500);
    }
    else {
      if (provider.isConnected === false) {
        $("#connect_3_message").html("Connecting Wallet...");
        await provider.connect()
        .catch(function(err) {
          $("#connect_3_cover, #connect_3_chooser").fadeOut(300);
          $("#connect_3_message").html("");
        });
      }
      if (provider.isConnected === true) {
        $(".connect_3_button").hide();
        $(".disconnect_3_button").hide().fadeIn(300);
        $("#connect_3_cover, #connect_3_chooser").fadeOut(300);
        setTimeout(function(){$("#connect_3_message").html("");},500);
        await mcswapConnected();
      }
    }
}
$('.disconnect_3_button').on('click', async function() {
    provider.disconnect();
    $(".disconnect_3_button").hide();
    $(".connect_3_button").hide().fadeIn(300);
    await mcswapDisconnected();
});
const connect_3_init = async () => {
  let connect_3_hash = window.location.hash;
  if(connect_3_hash.includes("#connect_3-")){
    history.replaceState(null, null, ' ');
    history.pushState("", "", "");
    setTimeout(() => {
      const connect_3_provider = connect_3_hash.replace("#connect_3-","");
      console.log("connect_3_provider", connect_3_provider);
      if(connect_3_provider=="phantom"){
        $("#connect_3_phantom").attr("disabled", false);
      }
      else if(connect_3_provider=="solflare"){
        $("#connect_3_solflare").attr("disabled", false);
      }
      else if(connect_3_provider=="backpack"){
        $("#connect_3_backpack").attr("disabled", false);
      }
      document.getElementById("connect_3_"+connect_3_provider).click();
    },400);
  }
}
connect_3_init();
//*****************************************************