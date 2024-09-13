"use client";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import DBMLDiagram from "@/app/output/output.svg";

export const PanZoomContainer = () => {
  return (
    <TransformWrapper initialScale={1} minScale={0.1} maxScale={10} centerZoomedOut={true}>
      <TransformComponent>
        <div className="scale-50">
          <DBMLDiagram />
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
};
