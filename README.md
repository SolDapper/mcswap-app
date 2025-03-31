# mcswap-app
A copy of the mcswap.xyz website as a turn-key package integrated with everything mcswap. 

![powered by solana](https://repository-images.githubusercontent.com/944753274/1145e6b0-4ad7-4887-acf9-21b9d673a8fd)

## clone it
```html
git clone https://github.com/SolDapper/mcswap-app.git
```

## .env
Create a .env file in your project directory with the following details
```html
PORT = 4400
RPC = https://staked.helius-rpc.com?api-key=YOUR_KEY_HERE
WALLETS = phantom,solflare,backpack
PAY = false
```

If you're running the optional [mcswap-api](https://github.com/SolDapper/mcswap-api) to supply solana-pay endpoints, replace false with your api entry point:
```html
PAY = https://your-mcswap-api.xyz
```

## config 
Open src/config.js

**kiosk** 

Default Web Settings
```javascript
config.kiosk = false;
```
Enable Kiosk Mode
```javascript
config.kiosk = {
    touch: true, // is touch screen display
    refresh: 60000 // refresh display every n miliseconds if touchless display (ignored if touch is true)
};
```
*using kiosk requires you spin up a [mcswap-api](https://github.com/SolDapper/mcswap-api) to provide solana pay endpoints for your mcswap powered listings*

**menu**

Add, Edit, Remove menu items:
```javascript
{
    text: "Module", // button text
    title: "McSwap API Repo", // tooltip
    href: "https://github.com/SolDapper/mcswap-api", // remote page
}
```

**shop module config**
For the rest of the config settings please refer to the [config docs for the integrated mcswap-shop npm module](https://github.com/SolDapper/mcswap-shop?tab=readme-ov-file#config-options).

## run locally
```html
npm start
```
Open your browser to: http://localhost:4400

## styling
You can add custom css rules in src/custom.css to overide styling for your app.