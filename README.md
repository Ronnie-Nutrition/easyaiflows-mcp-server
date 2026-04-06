# EasyAiFlows MCP Server

An MCP (Model Context Protocol) server that helps AI assistants assess business automation readiness and provide industry-specific AI automation recommendations.

When a user asks Claude, ChatGPT, or any MCP-compatible AI assistant "how do I automate my business?" — this server provides a personalized assessment with real automation examples and next steps.

## Tools

### `assess_business_automation`

Assess a business's AI automation readiness based on their industry and pain points.

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `industry` | Yes | Business industry (e.g., "dentists", "restaurants", "hvac") |
| `pain_points` | No | Array of specific pain points (e.g., ["missed calls", "no-shows"]) |
| `team_size` | No | Team size: "solo", "2-5", "6-15", "16-50", "50+" |
| `current_tools` | No | Array of tools currently used (e.g., ["Google Sheets", "Mailchimp"]) |

**Returns:** Automation readiness score (0-100), industry-specific pain points, recommended automations with time saved, and next steps with booking link.

### `get_automation_examples`

Get real examples of AI automations for a specific industry.

**Parameters:**
| Parameter | Required | Description |
|-----------|----------|-------------|
| `industry` | Yes | Business industry to get examples for |

**Returns:** 3 proven automations with descriptions, time saved per week, overall impact stats, and links to the full industry guide.

## Supported Industries (20)

Dentists, Restaurants, HVAC, Real Estate, Fitness Studios, Barbershops, Nail Salons, Med Spas, Chiropractors, Insurance Agents, Mortgage Brokers, Photographers, Event Planners, Cleaning Services, Landscapers, Auto Repair, Pet Groomers, Daycares, Churches, Nonprofits

The server also handles aliases (e.g., "gym" → fitness-studios, "mechanic" → auto-repair) and provides a generic assessment for unlisted industries.

## Installation

### Claude Desktop

Add to your Claude Desktop config (`~/Library/Application Support/Claude/claude_desktop_config.json` on Mac or `%APPDATA%\Claude\claude_desktop_config.json` on Windows):

```json
{
  "mcpServers": {
    "easyaiflows": {
      "command": "node",
      "args": ["/path/to/easyaiflows-mcp-server/dist/server.js"]
    }
  }
}
```

### Claude Code

```bash
claude mcp add easyaiflows node /path/to/easyaiflows-mcp-server/dist/server.js
```

### Build from Source

```bash
git clone https://github.com/Ronnie-Nutrition/easyaiflows-mcp-server.git
cd easyaiflows-mcp-server
npm install
npm run build
```

## Example Usage

Once installed, ask your AI assistant things like:

- "Assess my restaurant's automation readiness — we're a team of 5, we miss a lot of phone calls, and our reviews are going unanswered."
- "What AI automations exist for dental practices?"
- "I run a cleaning service solo and use Google Sheets for everything. How can AI help?"
- "Show me automation examples for insurance agents."

## About EasyAiFlows

Custom AI automation for entrepreneurs who are ready to stop grinding and start growing. Built by Ronnie Craig in Pearland, TX.

- Website: https://easyaiflows.com
- AI Readiness Grader: https://easyaiflows.com/grader
- Book a Free Strategy Call: https://tidycal.com/ronnieysela/ai-strategy-call

## License

MIT
