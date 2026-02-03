# Quick Commands Reference

## Jarvis Control

### Status & Health
```bash
clawdbot status
clawdbot doctor
clawdbot gateway status
```

### Updates
```bash
clawdbot gateway update
```

### Skills
```bash
clawdbot skills list
clawdbot skills install <name>
```

## Git Workflow (Workspace Backup)

### Daily backup
```bash
cd ~/.clawdbot/workspace
git add .
git commit -m "Daily backup: $(date +%Y-%m-%d)"
```

### Check status
```bash
cd ~/.clawdbot/workspace
git status
```

## Docker

### Quick status
```bash
docker ps
docker ps -a
```

### Logs
```bash
docker logs <container-name>
docker logs -f <container-name>  # follow
```

### Common n8n commands
```bash
docker ps | grep n8n
docker logs n8n
docker restart n8n
```

## Project Navigation

### Switch to project context
Just tell Jarvis: "Work on [project-name]"
- Clear Health Pass Woundcare
- n8n AI Agents
- ZohoCRM
- WordPress/DIVI sites

## Memory Management

### Search memory
Ask Jarvis: "Search memory for [topic]"

### Add to memory
Ask Jarvis: "Remember that [important fact]"

### Daily log
Jarvis automatically maintains: `memory/YYYY-MM-DD.md`

## Telegram Quick Access

Send to @MWPJarvisBot:
- Quick questions
- Urgent requests
- Voice notes (via Wispr Flow)
- Files for review

## Webchat

Open: http://localhost:18789
- Long conversations
- File uploads
- Multi-step tasks

## Ask Jarvis

Natural language works best:
- "Help me with [task]"
- "Check [system/service]"
- "Create [document/script]"
- "Review [code/config]"
- "Search for [information]"
