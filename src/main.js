// ****************************************************
'use strict';
import $ from "jquery";
import mcswapMarket from "mcswap-market";
import "mcswap-market/mcswap-market.css";
import 'dotenv/config';
const rpc = process.env.RPC;
let provider = false;
// ****************************************************



// ****************************************************
(async()=>{
    // start a new mcswapMarket instance
    const marketplace = new mcswapMarket({
        rpc: process.env.RPC,
        logo: "https://pbs.twimg.com/profile_images/1827444138700054528/esOO7O4K_400x400.png",
        // logo: "https://pbs.twimg.com/profile_images/1861054417828560896/KderzjmK_400x400.jpg",
        enable_new_listings: false,
        enable_edit_theme: false,
        default_theme: "Dark",
        enable_edit_sort: false,
        default_sort: "Name A > Z",
        enable_edit_display: false,
        default_display: "My Listings",
        enable_edit_core: false,
        core_display: false,
        enable_edit_nft: false,
        nft_display: false,
        enable_edit_pnft: false,
        pnft_display: false,
        enable_edit_cnft: false,
        cnft_display: true,
        fee_create: 0.0009,
        fee_execute: 0.0009,
        default_priority: "Low",
        treasury: "ACgZcmgmAnMDxXxZUo9Zwg2PS6WQLXy63JnnLmJFYxZZ",
        collections: "ACy3ZVXcch8mZXUtRVqsJfa2DhFHxnUJpBb4oeN9tZsX",
        sellers: "7Z3LJB2rxV4LiRBwgwTcufAWxnFTVJpcoCMiCo8Z5Ere,2jcih7dUFmEQfMUXQQnL2Fkq9zMqj4jwpHqvRVe3gGLL",
        enable_edit_sellers: false,
        enable_edit_collections: false,
    });
    // initialize the marketplace
    await marketplace.init({
        name: "McSwap Market",
        id: "mcswap-market",
        styles:[{

        }]
    });
})();
// ****************************************************



// ****************************************************
async function connected(){
    console.log("connected");
}
async function disconnected(){
    console.log("disconnected");
}
// ****************************************************

//*****************************************************
function connect_3_cover_fadeIn(el, time) {
    el.style.opacity = 0;
    var last = +new Date();
    var tik = function() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / time;
      last = +new Date();
      if (+el.style.opacity < 0.75) {
        (window.requestAnimationFrame && requestAnimationFrame(tik)) || setTimeout(tik, 16);
      }
    };
    tik();
  }
  function connect_3_fadeIn(el, time) {
    el.style.opacity = 0;
    var last = +new Date();
    var tik = function() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / time;
      last = +new Date();
      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tik)) || setTimeout(tik, 16);
      }
    };
    tik();
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
  document.querySelectorAll('.connect_3_button').forEach(function(el){
    el.addEventListener('click', function() {
      const connect_3_cover = document.getElementById("connect_3_cover");
      const connect_3_chooser = document.getElementById("connect_3_chooser");  
      connect_3_cover.style.display = "block";
      connect_3_chooser.style.display = "block";
      const isPhantomInstalled = window.solana && window.solana.isPhantom;
      const isSolflareInstalled = window.solflare && window.solflare.isSolflare;
      const isBackpackInstalled = window.backpack && window.backpack.isBackpack;
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
      connect_3_cover_fadeIn(connect_3_cover, 400);
      connect_3_fadeIn(connect_3_chooser, 400);
    });
  });
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
  document.querySelectorAll('.connect_3_choice').forEach(function(el){
    el.addEventListener('click', function() {
    if(this.id == "connect_3_cancel"){
      let connect_3_cover = document.getElementById("connect_3_cover");
      let connect_3_chooser = document.getElementById("connect_3_chooser");  
      connect_3_cover.style.display = "none";
      connect_3_chooser.style.display = "none";
      connect_3_cover.style.opacity = 0;
      connect_3_chooser.style.opacity = 0;
      $("#connect_3_phantom, #connect_3_solflare, #connect_3_backpack").attr("disabled", true);
    }
    else{
      connect_3_connect(this.id.replace("connect_3_",""));
    } 
    });
  });
  async function connect_3_connect(provider_name){
      connect_3 = provider_name;
      provider = await wallet_provider();
      let connect_3_cover = document.getElementById("connect_3_cover");
      let connect_3_chooser = document.getElementById("connect_3_chooser");
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
        connect_3_cover.style.display = "none";
        connect_3_cover.style.opacity = 0;
        connect_3_chooser.style.display = "none";
        connect_3_chooser.style.opacity = 0;
        document.getElementById("connect_3_message").innerHTML = "";
      }
      else {
        if (provider.isConnected === false) {
          connect_3_chooser.style.display = "none";
          connect_3_chooser.style.opacity = 0;
          document.getElementById("connect_3_message").innerHTML = "Connecting Wallet...";
          await provider.connect()
          .catch(function(err) {
            connect_3_cover.style.display = "none";
            connect_3_cover.style.opacity = 0;
            document.getElementById("connect_3_message").innerHTML = "";
          });
        }
        if (provider.isConnected === true) {
          document.querySelectorAll(".connect_3_button").forEach(function(el){
            el.style.display = "none";
          });
          document.querySelectorAll(".disconnect_3_button").forEach(function(el){
            el.style.display = "block";
          });
          connect_3_cover.style.display = "none";
          connect_3_cover.style.opacity = 0;
          connect_3_chooser.style.display = "none";
          connect_3_chooser.style.opacity = 0;
          document.getElementById("connect_3_message").innerHTML = "";
          await connected();
        }
      }
  }
  document.querySelectorAll('.disconnect_3_button').forEach(function(el){
    el.addEventListener('click', async function() {
      provider.disconnect();
      document.querySelectorAll(".disconnect_3_button").forEach(function(el){
        el.style.display = "none";
      });
      document.querySelectorAll(".connect_3_button").forEach(function(el){
        el.style.display = "block";
      });
      await disconnected();
    });
  });
  const connect_3_init = async () => {
    let connect_3_hash = window.location.hash;
    if(connect_3_hash.includes("#connect_3-")){
      history.replaceState(null, null, ' ');
      history.pushState("", "", "");
  //     document.querySelector(".connect_3_button").click();
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