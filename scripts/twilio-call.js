#!/usr/bin/env node

/**
 * Twilio Voice Call Script
 * Allows Jarvis to call Michael via phone
 * 
 * Usage:
 *   node twilio-call.js "Your message here"
 *   node twilio-call.js --file message.txt
 */

const twilio = require('twilio');

// Twilio credentials
const ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN || 'd93ac5a665b703146f664583f556664d';
const FROM_NUMBER = process.env.TWILIO_FROM_NUMBER || '+13173420606';
const TO_NUMBER = process.env.TWILIO_TO_NUMBER || '+13173318786';

// Initialize Twilio client
const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

async function makeCall(message) {
  try {
    console.log('📞 Initiating call...');
    console.log(`From: ${FROM_NUMBER}`);
    console.log(`To: ${TO_NUMBER}`);
    console.log(`Message: ${message}`);

    const call = await client.calls.create({
      twiml: `<Response><Say voice="Polly.Matthew">${escapeXml(message)}</Say></Response>`,
      to: TO_NUMBER,
      from: FROM_NUMBER
    });

    console.log('✅ Call initiated!');
    console.log(`Call SID: ${call.sid}`);
    console.log(`Status: ${call.status}`);
    
    return call;
  } catch (error) {
    console.error('❌ Call failed:', error.message);
    throw error;
  }
}

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

// Command-line usage
if (require.main === module) {
  const fs = require('fs');
  const args = process.argv.slice(2);
  
  let message;
  
  if (args[0] === '--file' && args[1]) {
    // Read message from file
    message = fs.readFileSync(args[1], 'utf8').trim();
  } else if (args.length > 0) {
    // Use command-line argument
    message = args.join(' ');
  } else {
    console.error('Usage: node twilio-call.js "Your message" OR node twilio-call.js --file message.txt');
    process.exit(1);
  }
  
  makeCall(message)
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}

module.exports = { makeCall };
