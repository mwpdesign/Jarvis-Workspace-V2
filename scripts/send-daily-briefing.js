#!/usr/bin/env node
/**
 * Daily Briefing Sender
 * Generates and sends morning briefing via Telegram
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const WORKSPACE = path.join(process.env.HOME, '.clawdbot/workspace');
const TODAY = new Date().toISOString().split('T')[0];
const YESTERDAY = new Date(Date.now() - 86400000).toISOString().split('T')[0];
const DAY_NAME = new Date().toLocaleDateString('en-US', { weekday: 'long' });

// Check git status
let gitStatus = '✅ Workspace clean';
try {
  const status = execSync('git status --short', { cwd: WORKSPACE }).toString().trim();
  if (status) {
    const count = status.split('\n').length;
    gitStatus = `⚠️ ${count} uncommitted change${count > 1 ? 's' : ''}`;
  }
} catch (e) {
  gitStatus = '⚠️ Git status unavailable';
}

// Check memory status
const todayMemory = path.join(WORKSPACE, 'memory', `${TODAY}.md`);
const memoryStatus = fs.existsSync(todayMemory)
  ? '📝 Daily log active'
  : '📝 No daily log yet - ready to start fresh!';

// Build briefing
const briefing = `🌅 Good morning, Michael!

📅 **${DAY_NAME}, ${TODAY}**

🌤️ **Weather**: Indianapolis
(Ask me: "What's the weather?" for live update)

📊 **System Status**
✅ Jarvis online and ready
${gitStatus}
${memoryStatus}

📂 **Active Projects**
• Clear Health Pass Woundcare (AWS)
• n8n AI Agents (Hostinger)
• ZohoCRM Management
• WordPress/DIVI Sites

💡 **Productivity Focus**
I'm observing your workflow patterns. I'll suggest automations when I spot opportunities.

🎯 **Quick Start Commands**
• "Work on [project]" - Load context
• "Search memory for [topic]" - Find past work
• "What's the weather?" - Current conditions
• "Help me with [task]" - Let's go!

Ready to make today productive! ✨`;

console.log(briefing);

// If called with --send, send via Telegram
if (process.argv.includes('--send')) {
  // Output JSON for Clawdbot to send
  console.log('\n---SEND_TO_TELEGRAM---');
  console.log(JSON.stringify({ message: briefing }));
}
