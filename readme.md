100 Day React Challenge 

Day 1 - (05/10/2023)

-  We can use react using CDN also just go to react website and get CDN link and added to html page so we can able to use react
- The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. (e.g. style sheets, iframes, images, fonts, or scripts) from another domain. 


To create root use -  const root = ReactDOM.createRoot(document.getElementById("root"));

And for create element - const heading = React.createElement("h1", {}, "Hello World from react");

{} this use for give attributes to the tag

React create element creates the object and its return only object when we use render then its convert code to html.

For use - root.render(heading);


Day 2 - (06/10/2023)

We can create multiple elements just using below code 



const heading = React.createElement("div", { id: "hello" },[ React.createElement("h2",{id:"pika"},"Pikachu"), React.createElement("h2",{id:"raichu"},"Raichu")]);


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(heading);

If we add anything in root folder its replace the whole code with react code 


Day 3 - (17/11/2023)

Package .js is a configuration for npm 
Bundler: Bunder help to package the app. (Optimize the code, Minified the code)
Two type of dependency in the project dev dependency and normal dependency (If you want to use as a dev package use  npm i -D parcel)
If we use Carte ^ in the package.json file then its auto updates the file else if we use tilde ~ it will install the major update only.
Transitive dependency means one package is dependent on another package.


Day 4 - (18/11/2023)

// Igniting our App
NPX Means executing the package and we use npm for install the package
To Run Parcel Application Use command npx parcel index.html
Using word module as a type in script tag then it does not render the normal js file it converts that file to the module. ( Advance js file ) where we can use the advanced js function. 
```
  <script type="module" src="./main.js"></script>
```
Parcel Creates dev builds for us and also parcel creates a local server for us. Parcel is HMR = Hot Module Replacement. Parcel uses File watching algorithm - written in the c++. It takes all the records for the file code. Faster Builds due to cache. Minification, Bundling, Compressing, Code Splitting, Differential Bundling also provided by parcel so code works across the browsers.Error Handling
To create production level application use command npx parcel build index.html
Browserlist helps to run the application across the browser version also region and state
—-----------------------------------------------------------------------------------------------
// Laying the foundation

index
