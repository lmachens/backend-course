describe('app.js', () => {
  it('console log "Neue Fische Restaurant"', () => {
    let outputData = '';
    const storeLog = inputs => (outputData += inputs);

    console['log'] = jest.fn(storeLog);
    require('../app.js');
    expect(outputData).toEqual(expect.stringContaining('Neue Fische Restaurant'));
  });
});