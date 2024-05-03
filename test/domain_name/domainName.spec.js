const { assert } = require('chai')

const domainName = require('../../src/domain_name/domainName')

describe('Sample test', () => {
  it('Should pass sample tests', () => {
    assert.equal(domainName('http://google.com'), 'google')
    assert.equal(domainName('http://google.co.jp'), 'google')
    assert.equal(domainName('www.xakep.ru'), 'xakep')
    assert.equal(domainName('https://youtube.com'), 'youtube')
    assert.equal(
      domainName('https://rnz-klqigr6p6-uannh.tv/index.php'),
      'rnz-klqigr6p6-uannh',
    )
  })
})
