# Example i18n App

![app](https://user-images.githubusercontent.com/2968519/57331754-61147e00-70e7-11e9-9682-e11d2ef96565.png)

## Install

Create an environment file:
```
cp dev.env .env
```
Ensure the correct version of Node is installed:
```
nvm install
```
Install dependencies:
```
npm install
```

## Run Demo

```
npm start
```

## Translate

Generate files for translation:
```
npm run i18n:generate
```

Translate generated files:
```
npm run i18n:translate
```
##### *Requires a Google API key (see `.env` file)

https://cloud.google.com/docs/authentication/api-keys

https://cloud.google.com/translate/docs

Run both commands:
```
npm run i18n
```

## Adding a new key/string pair:

in [`src/components/SidebarItem.js`](src/components/SidebarItem.js)

```diff
 const messages = defineMessages({
   pear: 'Pear',
   strawberry: 'Strawberry',
   watermelon: 'Watermelon',
+  grape: 'Grape',
 });
```
```diff
 const getFruit = (id) => {
       return '🍓';
     case 'watermelon':
       return '🍉';
+    case 'grape':
+      return '🍇';
     default:
       return '❔';
   }
```

in [`src/App.js`](src/App.js)

```diff
 function App() {
         <SidebarItem id="pear" />
         <SidebarItem id="strawberry" />
         <SidebarItem id="watermelon" />
+        <SidebarItem id="grape" />
       </Sidebar>
       <Main />
     </div>
```

Re-localize:
```
npm run i18n
```

## Adding another language

in [`i18n/locales.js`](i18n/locales.js)
```diff
 module.exports = [
   'en-US',
   'fr-FR',
   'es-MX',
+  'de-DE', // German
 ];
```

Re-localize:
```
npm run i18n
```
