# @br4zz4/opencode-skill-picker

OpenCode TUI plugin that makes skills autocompletable in the prompt:

- **`/` autocomplete**: registers a slash command per skill (`/matt:code-review`, `/oporpino:commit`, …) with its description.
- **`#` keybinding**: opens a searchable skill picker dialog.
- Selecting a skill (via `/` or `#`) inserts `/<skill> ` into the prompt, so Enter loads the skill.

## Install

Clone the repo and point `tui.json` at it (a local file path is required; git URLs hit an opencode install bug):

```bash
git clone git@github.com:br4zz4/opencode-skill-picker.git ~/.qwert/vendor/opencode-skill-picker
```

Then add to `~/.config/opencode/tui.json`:

```json
{
  "plugin": ["file:///Users/<you>/.qwert/vendor/opencode-skill-picker/index.tsx"]
}
```

Restart opencode.

## Development

Run opencode against your checkout:

```json
{
  "plugin": ["file:///path/to/opencode-skill-picker/index.tsx"]
}
```

## License

AGPL-3.0 — see [LICENSE](LICENSE).