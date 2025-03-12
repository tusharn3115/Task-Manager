import Navbar from "@/components/navbar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Form from "@/components/form/form";
import { CardDescription, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />
      <ResizablePanelGroup direction="horizontal" className="h-full w-full">
        <ResizablePanel>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel>
              <div className="h-full flex flex-col justify-center p-6 space-y-4">
                <div className="space-y-2">
                  <CardTitle>Create New Task</CardTitle>
                  <CardDescription>What do you want to do today?</CardDescription>
                </div>
                <Form />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel>charts</ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>list</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
