# Base Verify Node.js Library

The Base verify Node library provides convenient access to the Base Verify API from
applications written in server-side JavaScript.

For verifying customer and payment information in the browser, use [Web App][bv-js].

## Documentation

See the [`BaseVerify` API docs](https://baseverify.com/docs/api?lang=node) for Node.js.

<!-- See [video demonstrations][youtube-playlist] covering how to use the library. -->

## Requirements

Node 10 or higher.

## Installation

Install the package with:

```sh
npm i @baseverify/sdk-js
# or
yarn add @baseverify/sdk-js
```

## Usage

The package needs to be configured with your account's secret key, which is
available in the [Developer settings][api-keys]. Require it with the key's
value:

<!-- prettier-ignore -->
```js
const baseVerify = require('@baseverify/sdk-js')('test_...');

baseVerify.email.create({
  email: 'customer@example.com',
})
  .then(email => console.log(email))
  .catch(error => console.error(error));
```

Or using ES modules and `async`/`await`:

```js
import { BaseVerify } from '@baseverify/sdk-js';

const bv = new BaseVerify('test_...');

(async () => {
  const email = await bv.email.create({
    email: 'customer@example.com',
  });

  console.log(email);
})();
```

### Usage with TypeScript

Import BaseVerify as a default import (not `* as BaseVerify`, unlike the DefinitelyTyped version)
and instantiate it as `new BaseVerify()`.

```ts
import { BaseVerify } from '@baseverify/sdk-js';

const bv = new BaseVerify('test_...');

const email = async () => {
  const params: CreateEmail = {
    email: 'john.doe@gmail.com',
    redirectUri: 'http://my-website.com/verify',
  };

  const createEmail: Email = await bv.email.create(params);

  console.log(customer);
};
createEmail();
```

Every method returns a chainable promise which can be used instead of a regular
callback:

## Configuration

### Class based initialization

```ts
import { BaseVerify, STATUS } from '@baseverify/sdk-js';

export class AppService {
  constructor(private readonly bv: BaseVerify = new BaseVerify('test_...')) {}
}
```

## Support

New features and bug fixes are released on the latest major version of the `BaseVerify` package. If you are on an older major version, we recommend that you upgrade to the latest in order to use the new features and bug fixes including those for security vulnerabilities. Older major versions of the package will continue to be available for use, but will not be receiving any updates.

## More Information

- [REST API Version](https://github.com/baseverify)

[api-keys]: https://dashboard.baseverify.com/account/apikeys
[api-versions]: https://baseverify.com/docs/api/versioning
[bv-js]: https://baseverify.com/docs/js
