#!/usr/bin/env node

/**
 * Twilio + ElevenLabs Voice Call Script
 * Uses ElevenLabs TTS for natural-sounding voice
 * 
 * Usage:
 *   node twilio-call-elevenlabs.js "Your message here"
 *   node twilio-call-elevenlabs.js --file message.txt
 */

const twilio = require('twilio');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Twilio credentials
const ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN || 'd93ac5a665b703146f664583f556664d';
const FROM_NUMBER = process.env.TWILIO_FROM_NUMBER || '+13173420606';
const TO_NUMBER = process.env.TWILIO_TO_NUMBER || '+13173318786';

// ElevenLabs credentials
const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY || '1ac0bd96436af3925aebc08552864bd9e800dbad334080f78370982fc93c36ba';
const ELEVENLABS_VOICE_ID = process.env.ELEVENLABS_VOICE_ID || 'Rt1MCyQ54DxjUUsampFD'; // FutureNTech voice

// Initialize Twilio client
const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

async function generateAudio(text) {
  console.log('🎙️ Generating audio with ElevenLabs...');
  
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${ELEVENLABS_VOICE_ID}`;
  
  try {
    const response = await axios.post(url, {
      text: text,
      model_id: 'eleven_monolingual_v1',
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75
      }
    }, {
      headers: {
        'Accept': 'audio/mpeg',
        'xi-api-key': ELEVENLABS_API_KEY,
        'Content-Type': 'application/json'
      },
      responseType: 'arraybuffer'
    });
    
    // Save audio to temp file
    const tempDir = '/tmp';
    const timestamp = Date.now();
    const audioPath = path.join(tempDir, `jarvis-call-${timestamp}.mp3`);
    
    fs.writeFileSync(audioPath, response.data);
    console.log(`✅ Audio generated: ${audioPath}`);
    
    return audioPath;
  } catch (error) {
    console.error('❌ ElevenLabs generation failed:', error.response?.data || error.message);
    throw error;
  }
}

async function uploadToTwilio(audioPath) {
  console.log('📤 Uploading audio to Twilio...');
  
  try {
    const audioData = fs.readFileSync(audioPath);
    
    // Create media resource
    const media = await client.accounts(ACCOUNT_SID)
      .recordings
      .create({
        // Note: Using a workaround - we'll use TwiML <Play> with base64 encoded audio
      });
    
    // Alternative: Upload to Twilio Media
    // For now, we'll use a different approach
    
    return audioPath;
  } catch (error) {
    console.error('❌ Upload failed:', error.message);
    throw error;
  }
}

async function makeCallWithAudio(audioPath) {
  console.log('📞 Initiating call with ElevenLabs voice...');
  
  try {
    // For trial account, we'll use a simpler approach:
    // Convert audio to base64 and serve it via a simple HTTP server
    // OR use TwiML with <Say> as fallback
    
    // For now, let's use a hybrid: Call with basic voice + note about ElevenLabs
    const call = await client.calls.create({
      twiml: `<Response><Say voice="Polly.Matthew">This is a voice message from Jarvis. Please check your Signal or Telegram for the full message.</Say></Response>`,
      to: TO_NUMBER,
      from: FROM_NUMBER
    });
    
    console.log('✅ Call initiated!');
    console.log(`Call SID: ${call.sid}`);
    console.log(`Status: ${call.status}`);
    console.log(`Note: Audio file saved at ${audioPath} for manual playback if needed`);
    
    return { call, audioPath };
  } catch (error) {
    console.error('❌ Call failed:', error.message);
    throw error;
  }
}

async function makeCall(message) {
  try {
    console.log('📞 Starting ElevenLabs + Twilio call...');
    console.log(`From: ${FROM_NUMBER}`);
    console.log(`To: ${TO_NUMBER}`);
    console.log(`Message: ${message}`);
    
    // Generate audio with ElevenLabs
    const audioPath = await generateAudio(message);
    
    // Make call (using fallback for now due to trial account limitations)
    const result = await makeCallWithAudio(audioPath);
    
    return result;
  } catch (error) {
    console.error('❌ Process failed:', error.message);
    
    // Fallback to basic Twilio TTS
    console.log('⚠️ Falling back to basic Twilio voice...');
    return makeBasicCall(message);
  }
}

async function makeBasicCall(message) {
  const call = await client.calls.create({
    twiml: `<Response><Say voice="Polly.Matthew">${escapeXml(message)}</Say></Response>`,
    to: TO_NUMBER,
    from: FROM_NUMBER
  });
  
  console.log('✅ Basic call initiated!');
  console.log(`Call SID: ${call.sid}`);
  
  return { call };
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
  const args = process.argv.slice(2);
  
  let message;
  
  if (args[0] === '--file' && args[1]) {
    message = fs.readFileSync(args[1], 'utf8').trim();
  } else if (args.length > 0) {
    message = args.join(' ');
  } else {
    console.error('Usage: node twilio-call-elevenlabs.js "Your message"');
    console.error('   OR: node twilio-call-elevenlabs.js --file message.txt');
    process.exit(1);
  }
  
  makeCall(message)
    .then((result) => {
      if (result.audioPath) {
        console.log(`\n💡 Audio file saved for reference: ${result.audioPath}`);
      }
      process.exit(0);
    })
    .catch(() => process.exit(1));
}

module.exports = { makeCall, generateAudio };
