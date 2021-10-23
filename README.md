
# ls-shorthand

"ls" stands for "localStorage" which is a simple shorthand function for manipulating localStorage API.

## Usage

First, install the package:
```bash
npm install ls-shorthand
```

```javascript
const lS = require("ls-shorthand");

lS(ACTION, KEY, VALUE);
```

* `ACTION` can be either `SET` (setItem) or `GET` (getItem) - ***Required***
* `KEY` is key parameter of the methods above - ***Required***
* `VALUE` is value of the key parameter above - ***Optional*** (getItem) / ***Required*** (setItem)

## License

[MIT](https://choosealicense.com/licenses/mit/)
