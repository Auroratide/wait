# wait

**wait** is a tiny utility for forcing your code to be patient. That is, it lets you wait an arbitrary amount of time in an expressive way.

```js
import wait from '@auroratide/wait';

const operation = async () => {
  // do something
  await wait.for(100).milliseconds();
  // do more things
};
```

## How to use

To see how to use this library, check out the `examples` folder for sample usages! The goal is to _actually_ use tests as documentation by reframing the paradigm into thinking of our tests as "example usages". This means you can learn how to use the library directly from the code, and this means less written documentation that's prone to becoming out-of-date.