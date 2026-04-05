/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `ask-chatgpt` command */
  export type AskChatgpt = ExtensionPreferences & {}
  /** Preferences accessible in the `ask-claude` command */
  export type AskClaude = ExtensionPreferences & {}
  /** Preferences accessible in the `ask-claude-desktop` command */
  export type AskClaudeDesktop = ExtensionPreferences & {}
  /** Preferences accessible in the `ask-gemini` command */
  export type AskGemini = ExtensionPreferences & {}
  /** Preferences accessible in the `ask-grok` command */
  export type AskGrok = ExtensionPreferences & {}
  /** Preferences accessible in the `ask-mistral` command */
  export type AskMistral = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `ask-chatgpt` command */
  export type AskChatgpt = {
  /** Ask ChatGPT... */
  "query": string
}
  /** Arguments passed to the `ask-claude` command */
  export type AskClaude = {
  /** Ask Claude... */
  "query": string
}
  /** Arguments passed to the `ask-claude-desktop` command */
  export type AskClaudeDesktop = {
  /** Ask Claude... */
  "query": string
}
  /** Arguments passed to the `ask-gemini` command */
  export type AskGemini = {
  /** Ask Gemini... */
  "query": string
}
  /** Arguments passed to the `ask-grok` command */
  export type AskGrok = {
  /** Ask Grok... */
  "query": string
}
  /** Arguments passed to the `ask-mistral` command */
  export type AskMistral = {
  /** Ask Mistral... */
  "query": string
}
}

