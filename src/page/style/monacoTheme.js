export const editorTheme = {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "", foreground: "D4D4D4" },
    { token: "comment", foreground: "6A9955", fontStyle: "italic" },
    { token: "keyword", foreground: "569CD6" },
    { token: "string", foreground: "CE9178" },
    { token: "number", foreground: "B5CEA8" },
    { token: "type", foreground: "4EC9B0" },
    { token: "function", foreground: "DCDCAA" }
  ],
  colors: {
    "editor.background": "#0F172A",
    "editor.foreground": "#FFFFFF",
    "editorLineNumber.foreground": "#64748B",
    "editorCursor.foreground": "#FACC15",
    "editor.selectionBackground": "#334155",
    "editor.lineHighlightBackground": "#1E293B"
  }
};