// ****************************************************
import 'dotenv/config';
const rpc = process.env.RPC;
import mcswapMarket from "mcswap-market";
import "mcswap-market/mcswap-market.css";
(async()=>{
    // start a new mcswapMarket instance
    const marketplace = new mcswapMarket({
        rpc: process.env.RPC,
        logo: "https://pbs.twimg.com/profile_images/1861054417828560896/KderzjmK_400x400.jpg",
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
        name: "Dapper's Market",
        id: "mcswap-market",
        styles:[{

        }]
    });
})();
// ****************************************************