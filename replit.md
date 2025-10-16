# FeesType - Typing Race Game

## Overview
FeesType is a competitive typing race game where players compete in real-time to type a given paragraph as fast and accurately as possible. The fastest typer wins 80% of the collected entry fees.

## Project Status
✅ Successfully imported from GitHub and configured for Replit
✅ All features implemented and working
✅ Deployment ready

## Recent Changes (October 15, 2025)
- ✅ Configured Vite for Replit proxy (host allowance for iframe preview)
- ✅ Added password protection to dev panel (password: `devaccess123`)
- ✅ Implemented game start notifications
- ✅ Added join blocking when game is active with "wait for next game" message
- ✅ Configured deployment settings for production

## Architecture

### Tech Stack
- **Frontend**: React 18 + Vite + TypeScript
- **UI Framework**: Tailwind CSS + shadcn/ui components
- **Backend**: Express.js (Node.js)
- **Database**: Supabase (PostgreSQL) with real-time subscriptions
- **Styling**: Gaming-themed design with neon colors and dark mode

### Project Structure
```
├── client/              # React frontend application
│   ├── src/
│   │   ├── components/  # UI components (LandingPage, DevPanel, etc.)
│   │   ├── integrations/# Supabase client setup
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities
├── server/              # Express backend
│   ├── index.ts        # Main server entry point
│   ├── routes.ts       # API routes
│   └── storage.ts      # In-memory storage interface
├── shared/             # Shared types and schemas
└── attached_assets/    # Static assets and backups

```

### Key Features
1. **Real-time Game Sessions**: Live updates using Supabase real-time subscriptions
2. **Dev Panel**: Password-protected panel for creating games (password: `devaccess123`)
3. **Typing Race Mechanics**: Accuracy tracking, speed calculation, live progress
4. **Game States**: Landing → Entry → Waiting Room → Typing Race → Results
5. **Smart Join Logic**: 
   - Players can only join during "waiting" status
   - Active games block joining with message: "Please wait for the next game to be hosted"
   - Notifications sent when game starts

## Database Schema (Supabase)

### Tables
- **game_sessions**: Game sessions with status (waiting/active/finished)
  - id, paragraph, status, started_at, ends_at, created_at
  
- **player_entries**: Player participation records
  - id, game_session_id, nickname, wallet_address, time_taken_ms, accuracy_percent, placement, etc.

## Environment Variables
- `VITE_SUPABASE_URL`: Supabase project URL
- `VITE_SUPABASE_PUBLISHABLE_KEY`: Supabase anonymous key
- `DATABASE_URL`: PostgreSQL connection string (for future backend usage)

## Development

### Running Locally
The app runs on port 5000 and serves both frontend and backend:
```bash
npm run dev  # Development mode with hot reload
```

### Dev Panel Access
1. Click the small dot (•) at the bottom of the landing page
2. Enter password: `devaccess123`
3. Create games with custom paragraphs and wait times (10-300 seconds)

### Game Flow
1. Admin creates game via Dev Panel
2. Game enters "waiting" status with countdown
3. Players join and enter waiting room
4. When countdown ends, game becomes "active" (no more joins allowed)
5. Players race to type the paragraph
6. Results show winner and rankings

## Production Deployment
- **Type**: Autoscale (serverless, scales automatically)
- **Build**: `npm run build` (builds both Vite frontend and Express backend)
- **Start**: `npm run start` (production server on port 5000)

## Design Guidelines
See `design_guidelines.md` for detailed UI/UX specifications including:
- Color palette (neon purple, cyan, green on dark background)
- Typography (Inter + JetBrains Mono)
- Component styling
- Animation patterns

## User Preferences
- Gaming-themed aesthetic with crypto/web3 elements
- Real-time competitive gameplay
- Clean, responsive UI with clear visual feedback
- Accessibility considerations (WCAG AA contrast ratios)

## Known Configuration
- Vite server configured to allow all hosts (required for Replit iframe preview)
- HMR (Hot Module Replacement) uses port 443 for client connection
- Dev panel requires password authentication before access
- Game joining is blocked once status changes from "waiting" to "active"
- Toast notifications inform users when games start
