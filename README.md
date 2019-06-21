# wait

**wait** is a tiny utility for forcing your code to be patient. That is, it lets you wait an arbitrary amount of time in an expressive way.

> **NOTE**: This project is still in pre-release (before v1.0.0). This means API changes may happen between minor versions, so check the Changelog when updating. API will be considered stable at v1.0.0.

```js
import wait from '@auroratide/wait';

const operation = async () => {
  // do something
  await wait.milliseconds(100);
  // do more things
};
```

## How to use

To see how to use this library, check out the `examples` folder for sample usages!

_But Timothy... why not put the usages in the README?_

Glad you asked! The goal is to use tests as documentation by shifting our paradigm into thinking of tests more as **example usages**. In doing so, we can achieve the following:

* All documented usages are _guaranteed_ to work, because they are also tests that must pass before publishing
* Well-written, expressive tests that provide full confidence the code works as it was intended to be used
* Less written documentation in the README which can be prone to becoming out-of-date

If you like how that sounds, give it a try! Start thinking of your tests as **examples**, and see if it changes the way you approach testing in general.