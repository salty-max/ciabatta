import { useEffect, useRef } from "react";
import { CELL_SIZE } from "../../helpers/consts";
import React from "react";
import { useRecoilValue } from "recoil";
import { spritesheetAtom } from "../../atoms/spritesheetAtom";

export interface SpriteProps {
  frameCoord: string;
  size?: number;
}

function Sprite({ frameCoord, size = 16 }: SpriteProps) {
  const spritesheet = useRecoilValue(spritesheetAtom);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current as HTMLCanvasElement;
    const ctx = canvasEl.getContext("2d");

    // Clear out anything in the canvas tag
    ctx?.clearRect(0, 0, canvasEl.width, canvasEl.height);

    // Draw a graphic to the canvas tag
    // frameCoord: "1x0", "0x2"
    const tileSheetX = Number(frameCoord.split("x")[0]);
    const tileSheetY = Number(frameCoord.split("x")[1]);

    ctx?.drawImage(
      spritesheet!, // Image to pull from
      tileSheetX * CELL_SIZE, // Left x corner of frame
      tileSheetY * CELL_SIZE, // Top y corner of frame
      size, // How much to crop from the spritesheet (x)
      size, // How much to crop from the spritesheet (y)
      0, // Where to place the image on the canvas (x)
      0, // Where to place the image on the canvas (y)
      size, // How much to scale the image (x)
      size, // How much to scale the image (y)
    );
  }, [spritesheet, frameCoord, size]);

  return <canvas width={size} height={size} ref={canvasRef} />;
}

const MemoizedSprite = React.memo(Sprite);
export default MemoizedSprite;
