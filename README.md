# opencode-skill-picker

OpenCode TUI plugin that makes skills autocompletable in the prompt:

- **`/` autocomplete**: registers a slash command per skill (`/matt:code-review`, `/oporpino:commit`, …) with its description.
- **`#` keybinding**: opens a searchable skill picker dialog.
- Selecting a skill (via `/` or `#`) inserts `/<skill> ` into the prompt, so Enter loads the skill.

## Install

Add the plugin to `~/.config/opencode/tui.json`:

```json
{
  "plugin": ["github:br4zz4/opencode-skill-picker"]
}
```

Restart opencode.

## Development

Clone and run opencode with the local plugin:

```json
{
  "plugin": ["file:///path/to/opencode-skill-picker/index.tsx"]
}
```

## License

MIT