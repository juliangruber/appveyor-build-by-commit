
# appveyor-build-by-sha

Fetch the appveyor build for given commit sha.

## Usage

```js
const fetch = require('appveyor-build-by-sha')

fetch({
  repo: ['maxogden', 'rabin'],
  sha: 'ee998aaeff8e5677eed7a4de97f8c3aabca51694'
}).then(build => console.log({ build }))
```

```bash
$ node example.js
{ build:
   { buildId: 6919973,
     jobs:
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ],
     buildNumber: 37,
     version: '1.0.37',
     message: 'docs: fix appveyor badge link',
     branch: 'master',
     isTag: false,
     commitId: 'ee998aaeff8e5677eed7a4de97f8c3aabca51694',
     authorName: 'Julian Gruber',
     authorUsername: 'juliangruber',
     committerName: 'Julian Gruber',
     committerUsername: 'juliangruber',
     committed: '2017-02-09T11:12:13+00:00',
     messages: [],
     status: 'success',
     started: '2017-02-09T11:40:29.0844761+00:00',
     finished: '2017-02-09T11:50:11.095915+00:00',
     created: '2017-02-09T11:12:20.7889189+00:00',
     updated: '2017-02-09T11:50:11.095915+00:00' } }
```

## Installation

```bash
$ npm install appveyor-build-by-commit
```

## API

### fetch({ repo, sha })

## License

MIT
