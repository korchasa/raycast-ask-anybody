# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Raycast extension "Ask Anybody" — opens a new chat in any AI assistant (ChatGPT, Claude, Gemini, Grok, Mistral) from Raycast with a query.

## Commands

```bash
npm run dev        # Start development mode
npm run build      # Build for distribution
npm run lint       # Lint (ESLint + Prettier via ray lint)
npm run fix-lint   # Auto-fix lint issues
npm run publish    # Publish to Raycast Store (creates PR in raycast/extensions)
```

## Architecture

All commands are `no-view` (no UI, background execution). Each command is a thin wrapper that calls the shared `openChat()` utility from `src/open-chat.ts`.

**Adding a new AI service:**
1. Create `src/ask-<name>.tsx` following the pattern of existing commands
2. Add command entry in `package.json` under `commands`
3. Add a 512x512 PNG icon in `assets/`

The shared `openChat(props, serviceName, urlTemplate)` in `src/open-chat.ts` handles URL encoding, browser/app opening, window management, and error toasts.
