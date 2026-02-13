#!/usr/bin/env node

/**
 * Jarvis Voice Alert System
 * Send voice messages to Michael via Signal (daemon HTTP API)
 * 
 * Usage: node jarvis-voice-alert.js "Your message"
 */

const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

// Config
const SIGNAL_DAEMON_URL = 'http://127.0.0.1:8080';
const SIGNAL_BOT_NUMBER = '+13176992324';
const MICHAEL_NUMBER = '+13173318786';
const ELEVENLABS_VOICE = 'FutureNTech';
const VOICE_SPEED = 1.2; // 20% faster = more natural

async function generateVoice(message) {
  console.log('🎙️ Generating voice with ElevenLabs...');
  
  const timestamp = Date.now();
  const audioPath = `/tmp/jarvis-alert-${timestamp}.mp3`;
  
  // Generate audio with sag (ElevenLabs CLI)
  const command = `sag speak --voice "${ELEVENLABS_VOICE}" --speed ${VOICE_SPEED} --output "${audioPath}" --play=false "${message.replace(/"/g, '\\"')}"`;
  
  try {
    const { stdout, stderr } = await execPromise(command);
    
    if (!fs.existsSync(audioPath)) {
      throw new Error('Audio file not created');
    }
    
    const stats = fs.statSync(audioPath);
    console.log(`✅ Audio generated: ${audioPath} (${(stats.size / 1024).toFixed(1)} KB)\n`);
    
    return audioPath;
  } catch (error) {
    console.error('❌ Voice generation failed:', error.message);
    throw error;
  }
}

async function sendToSignal(audioPath, caption) {
  console.log('💬 Sending voice message to Signal...');
  
  try {
    // Read audio file
    const audioData = fs.readFileSync(audioPath);
    const audioBase64 = audioData.toString('base64');
    
    // Send via signal-cli daemon HTTP API
    const response = await axios.post(`${SIGNAL_DAEMON_URL}/v2/send`, {
      number: SIGNAL_BOT_NUMBER,
      recipients: [MICHAEL_NUMBER],
      message: caption,
      base64_attachments: [audioBase64]
    }, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 30000
    });
    
    console.log('✅ Voice message sent to Signal!\n');
    console.log(`Response:`, response.data);
    
    return response.data;
  } catch (error) {
    console.error('❌ Signal send failed:', error.response?.data || error.message);
    throw error;
  }
}

async function sendVoiceAlert(message, caption = '🎙️ Voice message from Jarvis') {
  try {
    console.log('📣 Sending voice alert to Michael...');
    console.log(`Message: "${message}"\n`);
    
    // Step 1: Generate voice
    const audioPath = await generateVoice(message);
    
    // Step 2: Send to Signal
    await sendToSignal(audioPath, caption);
    
    console.log('✅ Complete! Michael should receive notification on his phone.\n');
    
    // Cleanup temp file
    try {
      fs.unlinkSync(audioPath);
      console.log('🧹 Cleaned up temp audio file');
    } catch (e) {
      // Ignore cleanup errors
    }
    
    return { success: true };
    
  } catch (error) {
    console.error('\n❌ Voice alert failed:', error.message);
    return { success: false, error: error.message };
  }
}

// CLI usage
if (require.main === module) {
  const message = process.argv.slice(2).join(' ');
  
  if (!message) {
    console.error('Usage: node jarvis-voice-alert.js "Your message"');
    process.exit(1);
  }
  
  sendVoiceAlert(message)
    .then((result) => {
      process.exit(result.success ? 0 : 1);
    })
    .catch(() => process.exit(1));
}

module.exports = { sendVoiceAlert };
