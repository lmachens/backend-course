describe('app.js', () => {
  it('console log "neuefische Restaurant"', () => {
    let outputData = '';
    const storeLog = inputs => (outputData += inputs);

    console['log'] = jest.fn(storeLog);
    require(__dirname + '/../app.js');
    expect(outputData).toEqual(expect.stringContaining('neuefische Restaurant'));
  });
});
