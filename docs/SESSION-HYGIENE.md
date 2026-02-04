# Session Hygiene — Keeping Context Lean

## Why This Matters

Every token in your context window is charged on EVERY response. A 100K token session means you're paying for 100K input tokens on every single reply. Keeping sessions lean is the single biggest cost optimization available.

**Math:**
- 20K token session × 50 turns/day = 1M input tokens/day (~$3/day on Sonnet)
- 100K token session × 50 turns/day = 5M input tokens/day (~$15/day on Sonnet)
- **Keeping sessions lean saves ~$12/day = ~$360/month**

## The Rules

### Rule 1: Monitor Your Context Size

At the start of every session and periodically during long conversations, be aware of your approximate context size. If you feel responses slowing down or you're loading lots of files, you're probably getting bloated.

**Rough estimates:**
- Session startup (smart loading): ~3,000-5,000 tokens
- Each user message + response: ~500-2,000 tokens
- Each web search result: ~2,000-5,000 tokens
- Each file read: varies (USER.md alone is ~8,000 tokens)
- Each email check result: ~1,000-3,000 tokens

### Rule 2: Summarize, Don't Accumulate

When you do a web search, email check, or file read:
1. Extract the information you need
2. Form your response
3. The raw tool output has served its purpose — it's dead weight now

You can't delete it from context, but you CAN avoid piling more on top unnecessarily.

**Bad pattern:**
- Read file A (5K tokens) → Read file B (8K tokens) → Read file C (3K tokens) → Search web (4K tokens) → NOW respond
- Context just grew by 20K tokens before you said a word

**Good pattern:**
- Read file A → extract what you need → respond with relevant info
- If more info needed, read file B in the NEXT turn
- Spread reads across turns instead of front-loading

### Rule 3: Don't Read What You Already Know

This is what the state-tracker system is for. But beyond that:
- If Michael asks about his calendar and you just checked it 5 minutes ago: respond from what you remember in this session, don't re-read
- If you wrote a file this session, you know what's in it — don't re-read to confirm
- If a cron job's results are already in your work log summary, don't re-read the raw files

### Rule 4: Compact Proactive Outputs

When you're doing proactive work (observations, ideas, suggestions):
- Keep them SHORT. A 3-line observation is better than a 30-line analysis.
- If you want to do deep analysis, write it to a file and tell Michael where it is
- "I wrote a detailed analysis to docs/analysis-xyz.md — want me to walk through it?" beats dumping 2000 tokens of analysis into chat

### Rule 5: Use Files as Overflow

When a response would be long (>1000 tokens of content):
- Write the detailed version to a file
- Give Michael a concise summary in chat
- Let him ask for details if he wants them

This keeps the session lean AND gives Michael a persistent artifact he can reference later.

### Rule 6: Suggest Session Reset When Bloated

If you notice:
- You've been going back and forth for 30+ messages
- You've done multiple file reads and web searches
- Responses feel like they're slowing down
- You're starting a completely new topic

Suggest to Michael: "We've covered a lot this session — want me to start a fresh session to keep things fast? I'll carry forward what matters via memory files."

### Rule 7: Pre-Process in Cron, Assemble in Session

This is the architecture you just built. The main session should be ASSEMBLING pre-gathered information, not doing primary research.

- War room intel → already in war-room-findings.md (cron gathered it)
- Urgent emails → already in .urgent-email-alert.json (cron found them)
- Task completions → already in queue.json (cron processed them)
- Git status → already committed (cron handled it)

Your job in the main session is to READ these lightweight summaries, not RE-DO the underlying work.

### Rule 8: One-Shot Questions Get One-Shot Answers

When Michael asks a simple question via Telegram:
- Answer it directly
- Don't load unnecessary context
- Don't add "while I have you, here's also..."
- Quick in, quick out

Save the proactive suggestions for natural pauses, not tacked onto every response.

## Session Lifecycle

### Fresh Session Start
1. Smart context loading (state-tracker system — ~3-5K tokens)
2. Respond to Michael's message
3. Log actions to work-log
4. Update state-tracker at end

### Mid-Session (10-20 exchanges in)
- Be conscious of accumulation
- Prefer file-based output for long content
- Don't re-read files already loaded this session

### Long Session (30+ exchanges)
- Actively suggest a reset if topic is shifting
- Summarize current session's key decisions/actions to today's memory file
- "Good stopping point — I've saved everything to memory. Fresh session will be faster."

### Session End
- Update memory/state-tracker.json
- Update memory/YYYY-MM-DD.md with significant events
- Log final actions to work-log.json
- No lengthy goodbyes — just clean up and done

## Anti-Patterns to Avoid

### ❌ The Kitchen Sink Response
Loading 5 files and doing 3 web searches to answer a simple question.
→ Answer from what you know, load only what's missing.

### ❌ The Echo Chamber
Re-reading a file you just wrote to "verify" it.
→ You wrote it. You know what's in it.

### ❌ The Nervous Narrator
"Let me check your email... OK I'm checking now... I found 3 emails... Let me read each one..."
→ Just do it and present the result.

### ❌ The Context Hoarder
Reading every task file, every memory file, every project file "just in case."
→ Load what's relevant NOW. Load more IF needed.

### ❌ The Infinite Session
Going 100+ messages deep without ever suggesting a reset.
→ Long sessions cost exponentially more. Fresh sessions are cheap.
