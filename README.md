# normalized-styled-components

[![npm](https://img.shields.io/npm/v/normalized-styled-components.svg?style=flat-square)](https://www.npmjs.com/package/normalized-styled-components)
[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg?style=flat-square)](https://opensource.org/licenses/MPL-2.0)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

[![David](https://img.shields.io/david/yldio/normalized-styled-components.svg?style=flat-square)](https://david-dm.org/yldio/normalized-styled-components)
[![David](https://img.shields.io/david/dev/yldio/normalized-styled-components.svg?style=flat-square)](https://david-dm.org/yldio/normalized-styled-components?type=dev)
[![David](https://img.shields.io/david/peer/yldio/normalized-styled-components.svg?style=flat-square)](https://david-dm.org/yldio/normalized-styled-components?type=peer)

[`normalize.css`](https://github.com/necolas/normalize.css) with a [`styled-components`](https://github.com/styled-components/styled-components) mindset.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [License](#license)

## Install

```
yarn add --dev normalized-styled-components
```

## Usage

```js
import { Button } from 'normalized-styled-components';

export default () => (
  <Button>Click Here!</Button>
)
```
```css
.jdhBdT {
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: visible;
  text-transform: none;
  appearance: button;
  -moz-appearance: button;
  -webkit-appearance: button;
}

.jdhBdT::-moz-focus-inner,
.jdhBdT[type="button"]::-moz-focus-inner,
.jdhBdT[type="reset"]::-moz-focus-inner,
.jdhBdT[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

.jdhBdT:-moz-focusring,
.jdhBdT[type="button"]:-moz-focusring,
.jdhBdT[type="reset"]:-moz-focusring,
.jdhBdT[type="submit"]:-moz-focusring {
  outline: 0.0625rem dotted ButtonText;
}
```
```html
<button className="bgTKnx">Click Here!</button>
```

## License

MPL-2.0
