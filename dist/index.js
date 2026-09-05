// index.tsx
import { jsx } from "@opentui/solid/jsx-runtime";
var OPENCODE_BASE_MODE = "base";
var tui = async (api, options) => {
  const config = {
    slashCommands: options?.slashCommands ?? false
  };
  let skills = [];
  let skillsLoaded = false;
  const loadSkills = async () => {
    if (skillsLoaded) return skills;
    try {
      const result = await api.client.app.skills();
      const list = result?.data ?? result;
      const source = Array.isArray(list) ? list : [];
      skills = source.filter((s) => s && typeof s.name === "string" && s.name.length > 0).map((s) => ({ name: s.name, description: s.description })).toSorted((a, b) => a.name.localeCompare(b.name));
    } catch {
      skills = [];
    } finally {
      skillsLoaded = true;
    }
    return skills;
  };
  const insertSkill = async (name) => {
    try {
      await api.client.tui.appendPrompt({ text: `/${name} ` });
    } catch {
      api.ui.toast({ message: `Could not load skill ${name}`, variant: "error" });
    }
  };
  const openPicker = async () => {
    if (api.mode.current() !== OPENCODE_BASE_MODE) return;
    if (api.renderer.currentFocusedEditor === null) return;
    const list = await loadSkills();
    if (list.length === 0) {
      api.ui.toast({ message: "No skills available", variant: "warning" });
      return;
    }
    const options2 = list.map((skill) => ({
      title: skill.name,
      value: skill.name,
      description: skill.description?.replace(/\s+/g, " ").trim(),
      category: "Skills"
    }));
    api.ui.dialog.replace(
      () => /* @__PURE__ */ jsx(
        api.ui.DialogSelect,
        {
          title: "Skills",
          placeholder: "Search skills\u2026",
          options: options2,
          onSelect: (opt) => {
            api.ui.dialog.clear();
            void insertSkill(opt.value);
          }
        }
      ),
      () => {
      }
    );
  };
  const registerSkillCommands = async () => {
    if (!config.slashCommands) return;
    const list = await loadSkills();
    api.command.register(
      () => list.map((skill) => ({
        title: skill.name,
        value: skill.name,
        description: skill.description?.replace(/\s+/g, " ").trim(),
        category: "Skills",
        slash: { name: skill.name },
        onSelect: () => {
          void insertSkill(skill.name);
        }
      }))
    );
  };
  api.keymap.registerLayer({
    bindings: [{ key: "#", desc: "Pick a skill", preventDefault: true, cmd: () => void openPicker() }]
  });
  void registerSkillCommands();
};
var index_default = { id: "skill-picker", tui };
export {
  index_default as default
};
