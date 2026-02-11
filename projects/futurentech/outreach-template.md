# FutureNTech Bandcamp Outreach Template

**Created:** 2026-02-11
**Purpose:** Copy/paste template for Bandcamp artist messaging

---

## Standard Outreach Message

**Subject:** Feature Your Music on FutureNTech YouTube

Hi [ARTIST NAME],

I run FutureNTech, a YouTube channel dedicated to showcasing unsigned artists who are pushing boundaries with DIY recording and creative use of technology in their music.

I came across your work on Bandcamp and I'm really impressed by [SPECIFIC COMPLIMENT ABOUT THEIR MUSIC/PRODUCTION]. 

Would you be interested in being featured in an upcoming video? We highlight your story, your creative process, and your music to help connect you with new listeners who appreciate what you're doing.

No cost, no strings attached — just genuine support for independent artists.

If you're interested, I'd love to learn more about your project. You can also check out what we're building at youtube.com/@FutureNTech.

Best,
Michael
FutureNTech
futurentechofficial@gmail.com

---

## Current Target Bands (2026-02-11)

1. **Usury** - [Bandcamp URL]
2. **Mantera Anarchist** - [Bandcamp URL]
3. **Volubilis** - [Bandcamp URL]
4. **thistle.** - [Bandcamp URL]
5. **dead things** - [Bandcamp URL]
6. **Void** - [Bandcamp URL]

---

## After Sending Outreach

**CRITICAL:** Log every outreach to Outreach Tracking sheet immediately:

```bash
gog sheets append 1Dq2KDX-ktde3JMybQVydAfFesaf-slxAm77wTZNubnU 'futurentech-outreach!A:H' --account futurentechofficial@gmail.com --values '[date]' 'Bandcamp' '[artist name]' '[location if known]' '[genre]' '[bandcamp url]' 'Contacted' 'Outreach sent via Bandcamp messaging'
```

**Example:**
```bash
gog sheets append 1Dq2KDX-ktde3JMybQVydAfFesaf-slxAm77wTZNubnU 'futurentech-outreach!A:H' --account futurentechofficial@gmail.com --values '2026-02-11' 'Bandcamp' 'Usury' 'Unknown' 'Metal' 'https://usury.bandcamp.com' 'Contacted' 'Outreach sent 2026-02-11'
```

---

## Response Tracking

When artists respond:
- **Interested:** Create research task in tasks/queue.json (type: futurentech, action: research-artist)
- **Not interested:** Update sheet status to "Declined"
- **No response after 7 days:** Update sheet status to "No Response"
