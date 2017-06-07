'use strict'

const fetch = require('.')

fetch({
  repo: ['maxogden', 'rabin'],
  sha: 'ee998aaeff8e5677eed7a4de97f8c3aabca51694'
}).then(build => console.log({ build }))
