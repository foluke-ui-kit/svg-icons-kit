# svg-icons-kit 


ID# 33507761867763


A simple toolkit for loading SVG Icons in your react projects

## Installation

Installing via NPM
*note on mpn this is a private repo and requires access*

`npm i --save-dev @shawnsandy/svg-icons-kit`

## Usage

###Iconsets

Iconsets allow you to load complete iconsets like those created by the [Polymer team ](https://github.com/Polymer/core-icons)

```js

var Svg = require('@shawnsandy/svg-icons-kit');
React.render(<Svg.SvgIconsets 
iconID="directions" 
iconsetUrl="icon.xml" 
size="48" 
fill="red"  />, 
document.getElementById('iconset'));

```

###Icons

Import SVG icons

```js

var Svg = require('@shawnsandy/svg-icons-kit');
render(<Svg.SvgIcon 
classname="svg-icon" 
iconSrc="flashlight" 
pngSrc="some.png" />, 
document.getElementById('icon));

```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

###v0.0.4 
Public release

##Licence


The MIT License (MIT)

Copyright (c) 2014 Waybury

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
