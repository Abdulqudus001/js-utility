# js-utility
A lodash/underscore like implementation on a micro scale. 

This is a javascript utility package that abstract javascript methods (a lodash like implementation).


# New Features!

  - Added replaceAll and sortBy methods

### Usage

Get a local copy of the repo and add it to your node modules folder of your project

Example using the replaceAll method.
```sh
$ const js_utility = require ('js-utility');
$ let newString = js_utility.replaceAll('abdulqudus001', 'u', 'v');
$ console.log(newString); //abdvlqvdvs001;