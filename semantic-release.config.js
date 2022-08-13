module.exports = {
  branches: ['master', 'next'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Changelog',
        changelogHeader: '',
        changelogFooter: '',
        changelogReleaseCount: 0,
        changelogBodyParser: (body) => {
          return body.replace(/\n/g, '\n\n');
        },
      },
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
        pkgRoot: 'dist',
        tag: 'latest',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: ['CHANGELOG.md', 'package.json', 'yarn.lock', 'dist/**/*'],
        successComment: false,
        failComment: false,
        labels: ['release'],
        release: true,
        releaseName: 'v${nextRelease.version}',
        tagFormat: 'v${nextRelease.version}',
        tagName: 'v${nextRelease.version}',
        assets: ['dist/**/*'],
      },
    ],
  ],
};
