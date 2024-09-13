"use client";

import { renderDBML } from "@/app/actions";
import { PanZoomContainer } from "./_components/pan-zoom-container";

export default function RenderPage() {
  async function handleRender() {
    setTimeout(async () => {
      await renderDBML();
    }, 2000);
  }

  handleRender();

  return (
    <div className="w-full h-full flex justify-center items-center">
      <PanZoomContainer />
    </div>
  );
}
