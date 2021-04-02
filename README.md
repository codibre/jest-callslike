[![Actions Status](https://github.com/Codibre/jest-callslike/workflows/build/badge.svg)](https://github.com/Codibre/jest-callslike/actions)
[![Actions Status](https://github.com/Codibre/jest-callslike/workflows/test/badge.svg)](https://github.com/Codibre/jest-callslike/actions)
[![Actions Status](https://github.com/Codibre/jest-callslike/workflows/lint/badge.svg)](https://github.com/Codibre/jest-callslike/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/0e7a3b501f66d428a54a/test_coverage)](https://codeclimate.com/github/Codibre/jest-callslike/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/0e7a3b501f66d428a54a/maintainability)](https://codeclimate.com/github/Codibre/jest-callslike/maintainability)
[![Packages](https://david-dm.org/Codibre/jest-callslike.svg)](https://david-dm.org/Codibre/jest-callslike)
[![npm version](https://badge.fury.io/js/jest-callslike.svg)](https://badge.fury.io/js/jest-callslike)

A jest assertion that checks calls for count, order and informed parameters, all at once.

# How to install

```
npm i jest-callslike
```

# How to use it

Import this module in your test

```ts
import 'jest-callslike';
```

Then, just use the assertion informing each group of arguments as an array

```ts
expect(spy).toHaveCallsLike(
  ['a', 1, false],
  ['b', 2, true],
);
```

If you want to check if the function was never called, use the assertion with no arguments:

```ts
expect(spy).toHaveCallsLike();
```

## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
