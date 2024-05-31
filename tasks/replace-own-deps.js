#!/usr/bin/env node
 
'use strict';

// Replaces internal dependencies in package.json with local package paths.

const fs = require('fs');
const path = require('path');

const packagesDir = path.join(__dirname, '../packages');
const pkgFilename = path.join(packagesDir, 'react-scripts/package.json');
const data = require(pkgFilename);

fs.readdirSync(packagesDir).forEach(name => {
  if (data.dependencies[name]) {
    data.dependencies[name] = 'file:' + path.join(packagesDir, name);
  }
});

fs.writeFile(pkgFilename, JSON.stringify(data, null, 2), 'utf8', err => {
  if (err) throw err;
  console.log('Replaced local dependencies.');
});
