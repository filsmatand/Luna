import Editor from "@monaco-editor/react";

export default function CodeEditor() {
  return (
    <div className="w-full h-[70vh] min-h-[400px] rounded-lg overflow-hidden border border-gray-700">
      <Editor
        language="javascript"
        theme="vs-dark"
        defaultValue={`// Commence ici

        function solution(){

}
`}
        options={{
          fontSize: 16,
          minimap: {
            enabled: false,
          },
          automaticLayout: true,
          scrollBeyondLastLine: false,
          padding: {
            top: 20,
          },
        }}
      />
    </div>
  );
}