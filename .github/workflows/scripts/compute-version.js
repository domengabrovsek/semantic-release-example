/**
 * This script computes the next semantic version based on conventional commit messages.
 * It analyzes the commit messages since the latest Git tag and determines the type of version bump required:
 * - 'patch' for fixes and other patch-level changes
 * - 'minor' for new features without breaking changes
 * - 'major' for breaking changes or features with an exclamation mark (feat!)
 *
 * The computed next version is printed to the console.
 */

const { execSync } = require('child_process');
const semver = require('semver');

// Get the latest tag in the Git history
const latestTag = execSync('git describe --tags --abbrev=0').toString().trim();

// Get the commits since the latest tag
const commitsSinceLastTag = execSync(`git log ${latestTag}..HEAD --pretty=format:"%s"`).toString().split('\n');

// Analyze the commits to determine the type of version bump
let versionBump = 'patch';
for (const commit of commitsSinceLastTag) {
  if (commit.startsWith('feat:')) {
    versionBump = 'minor';
  }
  if (commit.startsWith('feat!:') || commit.includes('BREAKING CHANGE:')) {
    versionBump = 'major';
    break;
  }
}

// Compute the next version based on the determined bump type
const nextVersion = semver.inc(latestTag, versionBump);
console.log(nextVersion);
