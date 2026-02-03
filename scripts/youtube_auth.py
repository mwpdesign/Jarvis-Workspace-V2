#!/usr/bin/env python3
"""
YouTube API Authentication Script
Authenticates Jarvis to access Michael's YouTube channel (FutureNTech)
"""

import os
import pickle
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

# Scopes for YouTube access
SCOPES = [
    'https://www.googleapis.com/auth/youtube',
    'https://www.googleapis.com/auth/youtube.upload',
    'https://www.googleapis.com/auth/youtube.force-ssl'
]

CREDENTIALS_FILE = '/Users/michaelparson/.clawdbot/workspace/credentials/youtube_client_secret.json'
TOKEN_FILE = '/Users/michaelparson/.clawdbot/workspace/credentials/youtube_token.pickle'

def authenticate():
    """Authenticate and return YouTube API service"""
    creds = None
    
    # Check if we already have a token
    if os.path.exists(TOKEN_FILE):
        with open(TOKEN_FILE, 'rb') as token:
            creds = pickle.load(token)
    
    # If no valid credentials, let's get new ones
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            print("Refreshing expired credentials...")
            creds.refresh(Request())
        else:
            print("Starting OAuth flow...")
            print(f"Opening browser for authentication...")
            flow = InstalledAppFlow.from_client_secrets_file(CREDENTIALS_FILE, SCOPES)
            creds = flow.run_local_server(port=8080)
        
        # Save credentials for future use
        with open(TOKEN_FILE, 'wb') as token:
            pickle.dump(creds, token)
        print(f"✅ Credentials saved to {TOKEN_FILE}")
    
    return build('youtube', 'v3', credentials=creds)

def test_access(youtube):
    """Test that we can access the channel"""
    try:
        # Get channel info
        request = youtube.channels().list(
            part='snippet,contentDetails,statistics',
            mine=True
        )
        response = request.execute()
        
        if 'items' in response and len(response['items']) > 0:
            channel = response['items'][0]
            print("\n✅ Successfully authenticated!")
            print(f"\nChannel Info:")
            print(f"  Title: {channel['snippet']['title']}")
            print(f"  Channel ID: {channel['id']}")
            print(f"  Subscribers: {channel['statistics'].get('subscriberCount', 'Hidden')}")
            print(f"  Total Views: {channel['statistics'].get('viewCount', '0')}")
            print(f"  Total Videos: {channel['statistics'].get('videoCount', '0')}")
            return True
        else:
            print("❌ No channel found for this account")
            return False
            
    except Exception as e:
        print(f"❌ Error testing access: {e}")
        return False

if __name__ == '__main__':
    print("🎬 YouTube API Authentication for FutureNTech")
    print("=" * 50)
    
    youtube = authenticate()
    test_access(youtube)
    
    print("\n✅ Setup complete! Jarvis can now manage your YouTube channel.")
