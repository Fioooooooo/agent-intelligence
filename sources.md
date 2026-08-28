# Sources & Filtering Policy

## Scan model

Agent Watch follows a **recall first, filter second** workflow. Core sources should be checked through their official Blog, Engineering, Changelog, Release Notes, product update feeds, protocol specifications, and GitHub Releases rather than relying only on keyword search. Newly published items form a candidate set first; relevance and value filtering happens afterwards.

## Core Agent / Harness sources

Scanned with highest priority:

- OpenAI / Codex
- Anthropic / Claude Code
- Google / Gemini CLI
- Augment / Auggie
- Qwen / Qwen Code
- Cursor
- Cognition / Devin
- GitHub Copilot
- Zed / ACP
- Windsurf
- Manus
- Kimi / Kimi Code

Preferred channels: official Blog, Engineering Blog, Changelog, Release Notes, product updates, protocol specifications, and official GitHub Releases.

## Harness observation sources

- LangChain / LangGraph
- Vercel AI SDK
- OpenHands

Routine releases are excluded. Updates are included when they materially change Agent loops, harness architecture, context engineering, memory, checkpointing, durable execution, long-running agents, recovery, multi-agent systems, sandboxing, MCP, or tool runtime design.

## Model releases

Actively scanned model sources:

- OpenAI
- Anthropic
- Google DeepMind
- Qwen
- DeepSeek
- Kimi / Moonshot AI
- Z.ai / GLM

Other model developers such as Meta are event-driven sources. Releases are included only when they materially affect Coding, agentic capability, reasoning, tool use, computer use, long context, inference efficiency, or APIs / architecture that change Agent Harness design.

Generic chat models, small derivative variants, embedding models, image models, and speech models are excluded by default unless they have direct Agent architecture significance.

## High-value topics

- Agent architecture
- Agent harness
- Coding agents
- Context engineering
- Memory and context provenance
- Multi-agent systems
- Sandbox and permissions
- MCP / ACP / A2A
- Skills and tool use
- Computer use / browser use
- Evaluation
- Long-running agents
- Checkpoint and recovery
- CLI / SDK / protocols
- Agent runtime

Deep engineering articles receive higher weight than ordinary feature announcements, especially material exposing actual design decisions around agent loops, tool surfaces, session management, context management, token efficiency, sandboxing, security boundaries, recovery, and multi-agent orchestration.

## Daily → Weekly responsibility

Daily reports are the primary evidence and discovery layer. They perform source scanning, candidate recall, filtering, and archival.

Weekly reports use the archived daily reports as their primary evidence set and focus on cross-vendor synthesis and trend analysis. Weekly generation may revisit official sources to validate claims, fill obvious gaps, or capture a major release, but should not duplicate the entire daily scanning workload.

## Exclusions

- Marketing announcements
- Fundraising
- Customer case studies
- Partnership announcements
- SEO tutorials
- Generic AI news
- Routine UI changes
- Model news unrelated to Agent / Harness engineering

Coverage should never be expanded merely to fill a report. If a period has no meaningful updates, the report should say so.
