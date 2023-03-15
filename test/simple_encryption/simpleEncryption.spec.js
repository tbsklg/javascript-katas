const chai = require('chai')

const Test = {
  assertEquals: (current, expected) => chai.assert.equal(current, expected)
}

const { encrypt, decrypt } = require('../../src/simple_encryption/simpleEncryption')

describe('Solution', function () {
  it('EncryptExampleTests', function () {
    Test.assertEquals(encrypt('This is a test!', 0), 'This is a test!')
    Test.assertEquals(encrypt('This is a test!', 1), 'hsi  etTi sats!')
    Test.assertEquals(encrypt('This is a test!', 2), 's eT ashi tist!')
    Test.assertEquals(encrypt('This is a test!', 3), ' Tah itse sits!')
    Test.assertEquals(encrypt('This is a test!', 4), 'This is a test!')
    Test.assertEquals(encrypt('This is a test!', -1), 'This is a test!')
    Test.assertEquals(encrypt('This kata is very interesting!', 1), 'hskt svr neetn!Ti aai eyitrsig')
  })
})

describe('Solution', function () {
  it('DecryptExampleTests', function () {
    Test.assertEquals(decrypt('This is a test!', 0), 'This is a test!')
    Test.assertEquals(decrypt('hsi  etTi sats!', 1), 'This is a test!')
    Test.assertEquals(decrypt('s eT ashi tist!', 2), 'This is a test!')
    Test.assertEquals(decrypt(' Tah itse sits!', 3), 'This is a test!')
    Test.assertEquals(decrypt('This is a test!', 4), 'This is a test!')
    Test.assertEquals(decrypt('This is a test!', -1), 'This is a test!')
    Test.assertEquals(decrypt('hskt svr neetn!Ti aai eyitrsig', 1), 'This kata is very interesting!')
  })
})

describe('Solution', function () {
  it('Null or Empty', function () {
    Test.assertEquals(encrypt('', 0), '')
    Test.assertEquals(decrypt('', 0), '')
    Test.assertEquals(encrypt(null, 0), null)
    Test.assertEquals(decrypt(null, 0), null)
  })
})
