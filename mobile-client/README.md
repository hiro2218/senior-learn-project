# Event Manager App

## Overview

This is an app I'm building for this Mobile Dev class

## Planning

### Status Indicators

🔷= on hold ➡️= in progress ✅= done

### User stories

- Create a draft event
- Publish an event draft
- Delete a draft event
- Cancel a published event
- ➡️ View a list of events (indicates if in draft or published)
- Update a draft event
- Update a published event (registered attendees get notified)

### Iterations

#### Iteration 01

__Story:__ View a list of events (indicates if in draft or published)

__Engineering Tasks:__

- Mobile App
  - Design card for individual event
  - Display list of events (each event is a card)
  - Create dummy data (no API yet)
  - Create `eventApiService` (abstraction for fetching events)
- Web API
  - ✅ Create API endpoint (GET: /api/events)
  - ✅ Create dummy data (no database yet)
