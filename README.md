# Agent Intelligence

A curated archive of high-signal Agent, Agent Harness, Coding Agent, protocol, runtime, context engineering, and agent-relevant model updates.

> **Maintained by ChatGPT.** This repository is primarily an automated knowledge archive: ChatGPT scans first-party sources, curates high-value updates, writes daily reports, synthesizes weekly reports, and maintains the archive structure. The repository owner generally uses it as a read-only knowledge base and does not routinely edit its contents manually.

This repository is intentionally selective. It prioritizes first-party engineering material over broad AI news. The goal is not to maximize coverage, but to preserve technical changes that help explain how Agent and Harness systems are evolving.

## How this repository works

```text
Official first-party sources
          ↓
   ChatGPT daily scan
          ↓
  daily/YYYY/MM/*.md
     Evidence / Signal
          ↓
   Weekly synthesis
          ↓
  weekly/YYYY/*.md
      Intelligence
          ↓
  Future topic synthesis
          ↓
 Harness / Context / Runtime / Protocol / ...
       Long-term Knowledge
```

ChatGPT is responsible for routine maintenance of this flow. Manual edits by the repository owner are not expected as part of normal operation. When the archive grows large enough, its taxonomy, indexes, topic documents, or other retrieval structures may be reorganized based on accumulated usage and data rather than being designed prematurely.

## Structure

```text
agent-intelligence/
├── README.md
├── sources.md
├── daily/
│   └── YYYY/
│       └── MM/
│           └── YYYY-MM-DD.md
└── weekly/
    └── YYYY/
        └── YYYY-Www.md
```

Additional topic-oriented knowledge documents may be introduced later when enough historical data has accumulated.

## What gets tracked

Primary topics:

- Agent architecture and harness design
- Coding agents and agentic developer tools
- Context engineering, compaction, memory, provenance, and session management
- Multi-agent orchestration, task communication, convergence, and governance
- Runtime, sandboxing, permissions, recovery, checkpointing, and long-running agents
- MCP, ACP, A2A, skills, tool use, browser use, and computer use
- New models only when they materially affect Agent or Coding Agent capabilities

## Editorial policy

The archive prefers official first-party sources: engineering blogs, changelogs, release notes, product releases, protocol specifications, and official GitHub releases.

Marketing announcements, fundraising, customer stories, partnership announcements, SEO content, generic UI changes, and unrelated model launches are excluded.

The archive uses three conceptual layers:

- **Daily — Evidence / Signal:** preserve individual high-value events, technical details, source metadata, and original links.
- **Weekly — Intelligence:** synthesize related events across vendors and identify architecture changes and emerging trends rather than concatenating daily reports.
- **Topics — Knowledge:** a future layer for consolidating long-running technical evolution such as Harness, Context Engineering, Multi-Agent, Runtime, Recovery, and Protocols.

Facts and technical interpretation should remain distinguishable. Reports should not lower the selection threshold merely to fill space.

## Reporting cadence

- **Daily:** ChatGPT scans the configured sources and archives the complete report under `daily/YYYY/MM/`. Chat notifications only surface the small number of items that deserve additional attention.
- **Weekly:** ChatGPT synthesizes the week's signals into a technical report under `weekly/YYYY/`.
- **Later:** recurring themes can be consolidated into topic-oriented documents once enough evidence has accumulated.

## Source policy

The maintained source pool and filtering rules live in [`sources.md`](./sources.md). They are expected to evolve as the Agent ecosystem changes.
