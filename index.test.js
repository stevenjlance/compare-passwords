const {comparePassword} = require('./index.js');
const bcrypt = require('bcrypt');

test('returns a boolean', async () => {
    const password = 'nobody ever knew';
    const hashed = await bcrypt.hash(password, 1);
    const isMatch = await comparePassword(password, hashed);
    expect(typeof isMatch).toBe('boolean');
});


test('returns false if the password is not a match', async () => {
    const password = 'nobody ever knew';
    const hashed = await bcrypt.hash('i thought i knew', 1);
    const isMatch = await comparePassword(password, hashed);
    expect(isMatch).toBe(false);
});

test('eturns true if the password is a match', async () => {
    const password = 'nobody ever knew';
    const hashed = await bcrypt.hash(password, 1);
    const isMatch = await comparePassword(password, hashed);
    expect(isMatch).toBe(true);
});
