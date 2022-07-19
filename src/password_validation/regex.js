/*
Regex for validating a password which meets the following criteria:
- at least six characters long
- contains a lowercase letter
- contains an uppercase letter
- contains a digit
- contains only alphanumeric characters (note that '_' is not alphanumeric)
 */
const REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/

module.exports.REGEXP = REGEXP
