# crown-memory-store [![Circle CI](https://circleci.com/gh/vdemedes/crown-memory-store.svg?style=svg)](https://circleci.com/gh/vdemedes/crown-memory-store)

Memory store for [Crown](https://github.com/vdemedes/crown).


### Installation

```
$ npm install crown-memory-store --save
```


### Usage

```js
const MemoryStore = require('crown-memory-store');

let store = new MemoryStore();

store.get('some-key').then(function (value) {
  // done
});

store.set('some-key', 'some-value').then(function () {
  // done
});

store.destroy('some-key').then(function () {
  // done
});
```


### Tests

[![Circle CI](https://circleci.com/gh/vdemedes/crown-memory-store.svg?style=svg)](https://circleci.com/gh/vdemedes/crown-memory-store)

```
$ make test
```


### License

MIT © [vdemedes](https://github.com/vdemedes)
