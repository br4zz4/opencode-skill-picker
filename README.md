# @br4zz4/opencode-skill-picker

OpenCode TUI plugin that makes skills accessible from the prompt:

- **`#` keybinding** (default): opens a searchable skill picker dialog. Selecting inserts `/<skill> ` into the prompt so Enter loads the skill.
- **`/` autocomplete** (opt-in): registers a slash command per skill (`/matt:code-review`, `/oporpino:commit`, …) with its description. **Off by default** — see Configuration below.

## Install

Add to `~/.config/opencode/tui.json`:

```json
{
  "plugin": ["@br4zz4/opencode-skill-picker"]
}
```

Pin a version for stability:

```json
{
  "plugin": ["@br4zz4/opencode-skill-picker@0.1.10"]
}
```

Restart opencode. Press `#` in the prompt to open the picker.

## Configuration

The plugin accepts a `slashCommands` option to control whether each skill is also registered as a `/` slash command. **Default: `false`.**

Pass options with the tuple form:

```json
{
  "plugin": [["@br4zz4/opencode-skill-picker", { "slashCommands": true }]]
}
```

| Option | Type | Default | Effect |
|--------|------|---------|--------|
| `slashCommands` | `boolean` | `false` | When `true`, registers `/matt:code-review`, `/oporpino:commit`, … as slash commands with descriptions. When `false`, only the `#` picker is active and `/` stays clean. |

The `#` picker always works regardless of this option.

## Development

```bash
npm install
npm run build
```

Run opencode against your checkout:

```json
{
  "plugin": ["file:///path/to/opencode-skill-picker/dist/index.js"]
}
```

With options:

```json
{
  "plugin": [["file:///path/to/opencode-skill-picker/dist/index.js", { "slashCommands": true }]]
}
```

## License

AGPL-3.0 — see [LICENSE](LICENSE).