import React, { useEffect, useState } from "react";
import "./App.css";
import Editor from "@monaco-editor/react";
import { editor, KeyCode, KeyMod } from "monaco-editor";

export const App = () => {
  const [value, setValue] = useState("yaml: myyaml");
  const [myEditor, setMyEditor] = useState<editor.IStandaloneCodeEditor>();

  const saveDescriptor: editor.IActionDescriptor = {
    id: "saveElement",
    label: "save Element",
    keybindings: [KeyMod.CtrlCmd | KeyCode.KEY_S],

    run: (ed) => {
      console.log("yuhu");
    },
  };

  useEffect(() => {
    if (myEditor === undefined) return;

    myEditor.addAction(saveDescriptor);
  }, [myEditor]);

  return (
    <div className="App">
      <Editor
        path="yamlPath"
        language="yaml"
        value={value}
        onChange={(newValue) => {
          setValue(newValue === undefined ? "" : newValue);
        }}
        onMount={(editor, monaco) => {
          setMyEditor(editor);
        }}
      />
    </div>
  );
};
