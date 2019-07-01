const fs = require('fs');

describe('package.json', () => {
  it('exists', () => {
    const fileExists = fs.existsSync(__dirname + '/../package.json');
    expect(fileExists).toEqual(true);
  });
  it('has formidable dependency', () => {
    const packageJson = require(__dirname + '/../package.json');
    expect(packageJson.dependencies.formidable).toBeDefined();
  });
});
