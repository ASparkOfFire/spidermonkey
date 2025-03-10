// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Shavian`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v16.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x010450, 0x01047F]
  ]
});
testPropertyEscapes(
  /^\p{Script=Shavian}+$/u,
  matchSymbols,
  "\\p{Script=Shavian}"
);
testPropertyEscapes(
  /^\p{Script=Shaw}+$/u,
  matchSymbols,
  "\\p{Script=Shaw}"
);
testPropertyEscapes(
  /^\p{sc=Shavian}+$/u,
  matchSymbols,
  "\\p{sc=Shavian}"
);
testPropertyEscapes(
  /^\p{sc=Shaw}+$/u,
  matchSymbols,
  "\\p{sc=Shaw}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01044F],
    [0x010480, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Shavian}+$/u,
  nonMatchSymbols,
  "\\P{Script=Shavian}"
);
testPropertyEscapes(
  /^\P{Script=Shaw}+$/u,
  nonMatchSymbols,
  "\\P{Script=Shaw}"
);
testPropertyEscapes(
  /^\P{sc=Shavian}+$/u,
  nonMatchSymbols,
  "\\P{sc=Shavian}"
);
testPropertyEscapes(
  /^\P{sc=Shaw}+$/u,
  nonMatchSymbols,
  "\\P{sc=Shaw}"
);

reportCompare(0, 0);
