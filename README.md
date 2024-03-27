# LottiePlayOnScroll

LottiePlayOnScroll could help you to play lottie animation forward/backward base on user scroll the mouse wheel on PC or touch/drag on mobile screen.

## Demo

![Mar-27-2024 22-07-18](https://github.com/NorthBei/lottie-play-on-scroll/assets/15665709/b7224711-9e27-4802-8542-50d0ff290e8f)


### Demo Links:
1. [React.js demo](https://northbei.github.io/lottie-play-on-scroll/examples/react/demo/)
2. [Vanilla.js demo](https://northbei.github.io/lottie-play-on-scroll/examples/vanilla/demo/)

### Example Project
1. [React.js example](https://northbei.github.io/lottie-play-on-scroll/examples/react/)
2. [Vanilla.js example](https://northbei.github.io/lottie-play-on-scroll/examples/vanilla/)

## Installation

Install through npm:

```
npm install lottie-play-on-scroll
```

## Usage

### React.js

You should install [`@lottiefiles/react-lottie-player`](https://github.com/LottieFiles/lottie-react) yourself, then integration with `lottie-play-on-scroll`

```javascript
import { useRef } from 'react'
import { attachScroll } from 'lottie-play-on-scroll'
import { Player } from '@lottiefiles/react-lottie-player'

function App() {
  const lottieWrapper = useRef<HTMLDivElement>(null)

  return (
    <div ref={lottieWrapper}>
      <Player
        autoplay={false} // suggest turn off autoplay
        loop={true}
        controls={false}
        src="https://lottie.host/7401522f-2d8b-4049-ad18-eb0edb6af224/CE9lFrNlEH.json"
        lottieRef={(animation) => {
          if(lottieWrapper.current) attachScroll(animation, lottieWrapper.current)
        }}
      />
    </div>
  )
}

export default App
```

### Vanilla.js

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>lottie play on scroll vanilla example</title>
  </head>
  <body>
    <div id="lottie"></div>
    <script type="module" src="/your/path/main.js"></script>
  </body>
</html>
```

```javascript
# main.js
import { loadLottie } from 'lottie-play-on-scroll'

loadLottie({
  container: document.getElementById('lottie'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'https://lottie.host/7401522f-2d8b-4049-ad18-eb0edb6af224/CE9lFrNlEH.json' // or '/lottie/data.json'
})
```

## Document

**loadLottie**

```
loadLottie(parameters, config);
```

|name|optional|note|
|-|-|-|
|parameters|must| The parameters as same as what you pass into [`lottie.loadAnimation`](https://github.com/airbnb/lottie-web?tab=readme-ov-file#html), the only different is the type of `container` must be kind of `HTMLElement` |
|container|must|The container which wrapper the lottie animation,  must be kind of `HTMLElement`, the `wheel/touchmove` event listener will be bind on it |
|config|optional|like below defaultConfig|


**attachScroll**

```
attachScroll(animation, container, config);
```

|name|optional|note|
|-|-|-|
|animation|must|lottie instance|
|container|must|The container which wrapper the lottie animation,  must be kind of `HTMLElement`, the `wheel/touchmove` event listener will be bind on it |
|config|optional|like below defaultConfig|

**config**

Due to when user scroll the mouse wheel or drag on screen, the `wheel` or `touchmove` will be fire much times, for performace optimization and speed adjustment, we could use `pcEventRate` and `mobileEventRate` config to adjust the play speed of animation

```javascript
const defaultConfig = {
  speed: 50, // backward/forward 50 milliseconds every animation play
  pcEventRate: 1, // every 1 event will play 50 (config.speed) milliseconds animation 
  mobileEventRate: 3, // every 4 event will play 50 (config.speed) milliseconds animation
};
```


## Related Projects
- [ScrollLottie](https://github.com/chrisgannon/ScrollLottie)
- [Lottie Interactivity](https://www.npmjs.com/package/@lottiefiles/lottie-interactivity?activeTab=readme)


## Development

### Getting Start

Follow below commands to start development

```bash
npm install # install lottie-play-on-scroll project package
npm run build:watch # build lottie-play-on-scroll to js when code change
npm link # set lottie-play-on-scroll as local npm package
cd ./examples/react # or ./examples/vanilla
npm install # install lottie-play-on-scroll/vanilla project packages
npm run link # load local lottie-play-on-scroll npm package
npm run dev # run dev server
```

### Build

```
npm run build
npm run build:watch
```

### Publish

```bash
npm login
npm publish --dry-run
npm publish
```

## Reference
- npm package development
  - [How to build, test, and publish a TypeScript npm package in 2022](https://www.typescriptbites.io/articles/build-test-and-publish-typescript-npm-package-2022)
  - [NPM developer - Keeping files out of your Package](https://docs.npmjs.com/cli/v10/using-npm/developers#keeping-files-out-of-your-package)
  - [TypeScript NPM Package Publishing: A Beginner’s Guide](https://pauloe-me.medium.com/typescript-npm-package-publishing-a-beginners-guide-40b95908e69c)
  - [Creating an npm package with TypeScript](https://medium.com/@the_nick_morgan/creating-an-npm-package-with-typescript-c38b97a793cf)
  - [Test local npm packages with ease](https://urre.me/writings/test-local-npm-packages/)
- lottie files & player
  - [Lottie Generate Code](https://lottiefiles.com/web-player)
