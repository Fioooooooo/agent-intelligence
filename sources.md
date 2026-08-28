# Sources & Filtering Policy

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

Preferred channels: official Blog, Engineering Blog, Changelog, Release Notes, product updates, protocol specifications, and official GitHub Releases.

## Harness observation sources

- LangChain / LangGraph
- Vercel AI SDK
- OpenHands

Routine releases are excluded. Updates are included when they materially change Agent loops, harness architecture, context engineering, memory, checkpointing, durable execution, long-running agents, recovery, multi-agent systems, sandboxing, MCP, or tool runtime design.

## Model releases

Primary model sources:

- OpenAI
- Anthropic
- Google DeepMind
- Qwen

Other model developers such as DeepSeek, Meta, and Moonshot are event-driven sources. Their releases are included only when they materially affect Coding, agentic capability, reasoning, tool use, computer use, long context, or APIs that change Agent Harness design.

Generic chat models, small-model variants, embedding models, image models, and speech models are excluded by default unless they have direct Agent architecture significance.

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
