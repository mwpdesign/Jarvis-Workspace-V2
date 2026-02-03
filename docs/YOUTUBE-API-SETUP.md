# YouTube API Setup - FutureNTech Channel

**Date:** January 31, 2026  
**Channel:** FutureNTech (@FutureNTech)  
**Channel ID:** UCEnFU12SWXYxZLsj1OsCSuw  
**Account:** mike@mwparson.com

---

## Setup Complete ✅

Jarvis now has full automated access to the FutureNTech YouTube channel.

### Credentials Location

- **OAuth Client Secret:** `/Users/michaelparson/.clawdbot/workspace/credentials/youtube_client_secret.json`
- **Access Token:** `/Users/michaelparson/.clawdbot/workspace/credentials/youtube_token.pickle`
- **Authentication Script:** `/Users/michaelparson/.clawdbot/workspace/scripts/youtube_auth.py`

### Google Cloud Project

- **Project:** Jarvis
- **Project ID:** gen-lang-client-0400923234
- **API Enabled:** YouTube Data API v3
- **OAuth Client:** Desktop app (Jarvis YouTube Access)

### Scopes Granted

- `https://www.googleapis.com/auth/youtube` (Full account access)
- `https://www.googleapis.com/auth/youtube.upload` (Video uploads)
- `https://www.googleapis.com/auth/youtube.force-ssl` (Secure operations)

---

## Capabilities

### Video Management
- Upload videos
- Edit metadata (title, description, tags, category)
- Set thumbnails
- Schedule publish times
- Delete videos

### Channel Management
- Update channel description
- Manage playlists
- Set default upload settings
- Configure channel branding

### Analytics
- View video statistics
- Track subscriber growth
- Monitor watch time
- Analyze traffic sources

### Community
- Manage comments
- Post community updates
- Respond to viewers

---

## Usage

### Test Authentication
```bash
python3 /Users/michaelparson/.clawdbot/workspace/scripts/youtube_auth.py
```

### In Python Scripts
```python
import pickle
from googleapiclient.discovery import build

TOKEN_FILE = '/Users/michaelparson/.clawdbot/workspace/credentials/youtube_token.pickle'

with open(TOKEN_FILE, 'rb') as token:
    creds = pickle.load(token)

youtube = build('youtube', 'v3', credentials=creds)

# Example: Get channel info
response = youtube.channels().list(part='snippet', mine=True).execute()
print(response)
```

---

## Security Notes

- ✅ Credentials stored locally (not in cloud)
- ✅ Token file excluded from git via `.gitignore`
- ✅ OAuth access restricted to test user (mike@mwparson.com)
- ✅ App in testing mode (not published publicly)

---

## Re-authentication

If credentials expire or need refresh:
```bash
rm /Users/michaelparson/.clawdbot/workspace/credentials/youtube_token.pickle
python3 /Users/michaelparson/.clawdbot/workspace/scripts/youtube_auth.py
```

---

## Next Steps

Now that API access is configured, Jarvis can:
1. Upload generated videos
2. Optimize titles/descriptions for SEO
3. Schedule content calendar
4. Track analytics and optimize
5. Manage community engagement

**Status:** Ready for FutureNTech launch! 🚀
