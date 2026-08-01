import { Group, Panel } from "react-resizable-panels";

import ResizablePanel from "../challenges/resizeble";

export default function SplitLayout({
  left,
  center,
  right,
}) {
  return (
    <Group direction="horizontal">
      <Panel defaultSize={25} minSize={20}>
        {left}
      </Panel>

      <ResizablePanel />

      <Panel defaultSize={50} minSize={30}>
        {center}
      </Panel>

      <ResizablePanel />

      <Panel defaultSize={25} minSize={20}>
        {right}
      </Panel>
    </Group>
  );
}