# br4zz4-opencode-skill-picker

OpenCode TUI plugin that makes skills autocompletable in the prompt:

- **`/` autocomplete**: registers a slash command per skill (`/matt:code-review`, `/oporpino:commit`, …) with its description.
- **`#` keybinding**: opens a searchable skill picker dialog.
- Selecting a skill (via `/` or `#`) inserts `/<skill> ` into the prompt, so Enter loads the skill.

## Install

### Via npm

```json
{
  "plugin": ["br4zz4-opencode-skill-picker"]
}
```

> **Known opencode bug:** opencode installs npm plugins into `~/.cache/opencode/packages/<name>@<version>` and cannot `import` from paths containing `@`. If the npm install doesn't load, use the file path below.

### Via file (workaround)

```bash
git clone git@github.com:br4zz4/opencode-skill-picker.git ~/.qwert/vendor/opencode-skill-picker
```

Then add to `~/.config/opencode/tui.json`:

```json
{
  "plugin": ["file:///Users/<you>/.qwert/vendor/opencode-skill-picker/dist/index.js"]
}
```

Restart opencode.

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

## License

AGPL-3.0 — see [LICENSE](LICENSE).