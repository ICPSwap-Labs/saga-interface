import { useEffect, useState, useMemo } from "react";
import ColorThief from "colorthief";

export function elementIdFormat(id: string | null | undefined) {
  if (!id) return;
  return id.replace(/[0-9]+/g, "");
}

export function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

export function useImageHexColor(imgId: undefined | null | string) {
  const [hexStrings, setHexStrings] = useState<string[]>([]);

  const img = imgId ? (document.querySelector(`#${elementIdFormat(imgId)}`) as HTMLImageElement) : null;

  useEffect(() => {
    if (img) {
      const colorThief = new ColorThief();

      img.crossOrigin = "anonymous";

      // Make sure image is finished loading
      if (img?.complete) {
        const result = colorThief.getPalette(img, 2);
        const hexStrings = result.map((colorArray) => rgbToHex(colorArray[0], colorArray[1], colorArray[2]));

        setHexStrings(hexStrings);
      } else {
        img?.addEventListener("load", function () {
          const result = colorThief.getPalette(img, 2);
          const hexStrings = result.map((colorArray) => rgbToHex(colorArray[0], colorArray[1], colorArray[2]));
          setHexStrings(hexStrings);
        });
      }
    }
  }, [img]);

  return useMemo(() => hexStrings, [hexStrings]);
}
