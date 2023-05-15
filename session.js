const { createHash } = require('crypto');

// Generate a unique session ID
const generateSessionId = () => {
  const timestamp = Date.now().toString();
  const randomBytes = Math.random().toString().slice(2);
  const hash = createHash('md5').update(timestamp + randomBytes).digest('hex');
  return hash;
};

const sessionId = generateSessionId();
console.log('Session ID:', sessionId);
