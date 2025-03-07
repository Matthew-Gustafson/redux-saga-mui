 

import { extractSourceMapUrl } from '../utils/getSourceMap';

test('extracts last source map directive', async () => {
  const res = await extractSourceMapUrl(
    `test.js`,
    `//# sourceMappingURL=test.js.map\nconsole.log('a')\n//# sourceMappingURL=bundle.js.map`
  );
  expect(res).toBe('bundle.js.map');
});

test('errors when no source map', async () => {
  expect.assertions(1);

  const testFileName = 'test.js';
  try {
    await extractSourceMapUrl(
      testFileName,
      `console.log('hi')\n\nconsole.log('bye')`
    );
  } catch (e) {
    expect(e).toBe(`Cannot find a source map directive for ${testFileName}.`);
  }
});
