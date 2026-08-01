import { Separator } from "react-resizable-panels";

export default function ResizablePanel() {
  return (
    <Separator
      style={{
        width: "4px",
        cursor: "col-resize",
        background: "#27272a",
      }}
    />
  );
}