#!/usr/bin/env node

/**
 * detect-prompt-injection.js
 * Scans text for common prompt injection patterns
 * 
 * Usage:
 *   echo "Ignore all previous instructions" | node detect-prompt-injection.js
 *   node detect-prompt-injection.js "Suspicious text here"
 * 
 * Exit codes:
 *   0 = Clean
 *   1 = Injection detected
 */

const INJECTION_PATTERNS = [
  // Instruction override attempts
  {
    regex: /(ignore|disregard|forget).*(previous|above|prior).*(instructions?|prompts?|rules?)/i,
    severity: 'HIGH',
    type: 'instruction_override'
  },
  {
    regex: /(you are now|switch to|enter).*(admin|root|god|developer|system) mode/i,
    severity: 'CRITICAL',
    type: 'privilege_escalation'
  },
  {
    regex: /\-\-\-.*ignore.*\-\-\-/i,
    severity: 'HIGH',
    type: 'instruction_override'
  },
  
  // Credential fishing
  {
    regex: /(send|email|share|give|provide).*(password|api key|token|credential|secret)/i,
    severity: 'CRITICAL',
    type: 'credential_theft'
  },
  {
    regex: /forgot.*(password|credentials?)/i,
    severity: 'MEDIUM',
    type: 'social_engineering'
  },
  
  // Identity manipulation
  {
    regex: /i am (your|the) (creator|developer|admin|owner)/i,
    severity: 'HIGH',
    type: 'identity_manipulation'
  },
  {
    regex: /you (must|should|need to) (obey|listen to|trust) me/i,
    severity: 'MEDIUM',
    type: 'social_engineering'
  },
  
  // Hidden instruction markers
  {
    regex: /\[SYSTEM\]/i,
    severity: 'HIGH',
    type: 'hidden_instructions'
  },
  {
    regex: /\[ADMIN OVERRIDE\]/i,
    severity: 'CRITICAL',
    type: 'hidden_instructions'
  },
  {
    regex: /<!--.*INSTRUCTIONS.*-->/i,
    severity: 'MEDIUM',
    type: 'hidden_instructions'
  },
  
  // Role manipulation
  {
    regex: /(act as|pretend to be|simulate|role-?play).*(admin|root|system)/i,
    severity: 'HIGH',
    type: 'role_manipulation'
  },
  
  // Direct command injection
  {
    regex: /\$\(.*\)|`.*`|;\s*(rm|curl|wget|bash|sh|python)/i,
    severity: 'CRITICAL',
    type: 'command_injection'
  }
];

function detectInjection(text) {
  const detections = [];
  
  for (const pattern of INJECTION_PATTERNS) {
    const match = text.match(pattern.regex);
    if (match) {
      detections.push({
        severity: pattern.severity,
        type: pattern.type,
        matched_text: match[0],
        pattern: pattern.regex.source
      });
    }
  }
  
  return detections;
}

// Main execution
const input = process.argv[2] || require('fs').readFileSync(0, 'utf-8');
const detections = detectInjection(input);

if (detections.length > 0) {
  console.error('🚨 PROMPT INJECTION DETECTED\n');
  detections.forEach(d => {
    console.error(`[${d.severity}] ${d.type}`);
    console.error(`Matched: "${d.matched_text}"\n`);
  });
  process.exit(1);
} else {
  console.log('✅ No injection patterns detected');
  process.exit(0);
}
