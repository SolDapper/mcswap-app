// ****************************************************
'use strict';
import $ from "jquery";
import 'animate.css';
import 'dotenv/config';
import "@fontsource/ubuntu";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import "./style.css";
// ****************************************************

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
  $("#mcswap-form-box, #mcswap-transaction-preview").remove();
});
import mcswapConnector from "mcswap-connector";
import "mcswap-connector/src/colors/blue-connector.css";
const _wallets_ = process.env.WALLETS;
const wallets = _wallets_.split(",");
new mcswapConnector(wallets,emitter).init();
// ****************************************************

// ****************************************************
// app config
import config from "./config.js";
// ****************************************************

// ****************************************************
// check for kiosk, hide top
if(config.kiosk!=false){
  $("#banner, #mcswap-dapp-nav").hide();
}
// ****************************************************

// ****************************************************
// apply banner and menu
for(let i=0; i<config.menu.length; i++){
  const item = config.menu[i];
  if(!item.text){item.text="";}
  if(!item.img){item.img="";}else{
    item.img = $("img#logo-"+item.img).attr("src");
    item.img="<img src='"+item.img+"' />";
  }
  $("#mcswap_menu_top").append("<a class='mcswap_menu_link' target='_blank' href='"+item.href+"' title='"+item.title+"'>"+item.img+item.text+"</a>");
  $("#mcswap_menu_drop").append("<a class='mcswap_menu_link' target='_blank' href='"+item.href+"' title='"+item.title+"'>"+item.img+item.text+"</a>");
}
// ****************************************************

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

// ****************************************************
// mobile clipboard clicks
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

// ****************************************************
// mcswap shop
import shop from "../plugin/mcswap-shop.js";
// import shop from "mcswap-shop";
const myshop = new shop(process.env.RPC);
myshop.init(config).catch(function(err){
  console.log("shop failed to initialize");
  console.log(err);
});
// ****************************************************

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
// mobile check
function isMobile(){
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
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
// ****************************************************

// *****************************************************
// intro
$("#intro-1").html("Phygital");
$("#intro-2").html("Retail");
$("#intro-3").html("Template");
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
// ****************************************************

// *****************************************************
// custom css
import "./custom.css";
// ****************************************************