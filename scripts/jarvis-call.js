#!/usr/bin/env node

/**
 * Jarvis Voice Call System
 * Best-of-both-worlds approach:
 * - Phone call notification via Twilio (basic voice)
 * - High-quality voice message via Signal (ElevenLabs)
 * 
 * Usage: node jarvis-call.js "Your message"
 */

const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);
const twilio = require('twilio');
const fs = require('fs');
const path = require('path');

// Config
const ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN || 'd93ac5a665b703146f664583f556664d';
const FROM_NUMBER = '+13173420606';
const TO_NUMBER = '+13173318786';

const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

async function callMichael(message) {
  try {
    console.log('📞 Jarvis calling Michael...');
    console.log(`Message: ${message}\n`);
    
    // Step 1: Generate high-quality audio with ElevenLabs
    console.log('🎙️ Generating voice with ElevenLabs (FutureNTech voice)...');
    const timestamp = Date.now();
    const audioPath = `/tmp/jarvis-call-${timestamp}.mp3`;
    
    // Generate with faster speaking rate (1.2x speed = more natural)
    const sagCommand = `sag speak --voice "FutureNTech" --speed 1.2 --output "${audioPath}" --play=false "${message.replace(/"/g, '\\"')}"`;
    
    try {
      await execPromise(sagCommand);
      console.log(`✅ Audio generated: ${audioPath}\n`);
    } catch (error) {
      console.error('⚠️ ElevenLabs generation failed, will use basic voice');
      console.error(error.message);
    }
    
    // Step 2: Make phone call (notification)
    console.log('📞 Making phone call...');
    const call = await client.calls.create({
      twiml: `<Response><Say voice="Polly.Matthew">You have a voice message from Jarvis. Check Signal for the full message.</Say></Response>`,
      to: TO_NUMBER,
      from: FROM_NUMBER
    });
    
    console.log(`✅ Call initiated! (SID: ${call.sid})\n`);
    
    // Step 3: Send audio to Signal
    if (fs.existsSync(audioPath)) {
      console.log('💬 Sending voice message to Signal...');
      try {
        // Use signal-cli to send voice message
        const signalCommand = `signal-cli -u +13176992324 send -m "🎙️ Voice message from Jarvis" -a "${audioPath}" +13173318786`;
        await execPromise(signalCommand);
        console.log('✅ Voice message sent to Signal!\n');
      } catch (error) {
        console.error('⚠️ Signal send failed:', error.message);
      }
    }
    
    return {
      callSid: call.sid,
      audioPath: fs.existsSync(audioPath) ? audioPath : null,
      message: message
    };
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    throw error;
  }
}

// CLI usage
if (require.main === module) {
  const message = process.argv.slice(2).join(' ');
  
  if (!message) {
    console.error('Usage: node jarvis-call.js "Your message"');
    process.exit(1);
  }
  
  callMichael(message)
    .then((result) => {
      console.log('✅ Complete!');
      console.log(`   Phone call: ${result.callSid}`);
      if (result.audioPath) {
        console.log(`   Audio file: ${result.audioPath}`);
        console.log('\n💡 To send via Signal, use:');
        console.log(`   openclaw message send --channel signal --target +13173318786 --media "${result.audioPath}"`);
      }
      process.exit(0);
    })
    .catch(() => process.exit(1));
}

module.exports = { callMichael };
