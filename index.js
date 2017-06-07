'use strict'

const got = require('got')

module.exports = ({ repo, sha }) => {
  const getBuilds = () => {
    const url = `https://ci.appveyor.com/api/projects/${repo[0]}/${repo[1]}/history?recordsNumber=50`
    return got(url, { json: true })
      .then(res => res.body.builds)
  }

  const resolveBuild = build => {
   const url = `https://ci.appveyor.com/api/projects/${repo[0]}/${repo[1]}/build/${build.version}`
   return got(url, { json: true })
     .then(res => res.body.build)
  }

  return getBuilds()
    .then(builds => {
      if (!builds.length) throw Error('no builds found')
      const build = builds.find(b => b.commitId === sha)
      if (!build) throw Error('commit not found')
      return build
    })
    .then(build => resolveBuild(build))
}
