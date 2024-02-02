"use client";
import { useState } from "react";
import ColorThief from "colorthief";
import Display from "@/components/Display";
import { Button } from "@/components/ui/button";
import { ImageIcon, Repeat } from "lucide-react";

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [colorPalette, setColorPalette] = useState<number[][] | null>(null);

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target || !e.target.files || e.target.files.length === 0) {
      // Throw a PopUp Event
      console.log("No File Selected");
      return;
    }

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      if (!event.target) {
        console.error("Event target is null");
        return;
      }
      const img = new Image();

      img.onload = () => {
        const colorThief = new ColorThief();
        const colorPalette = colorThief.getPalette(img, 5);

        let result: string | null = event.target?.result as string;
        if (typeof result !== "string") {
          result = result ? result.toString() : null;
        }

        setUploadedImage(result);
        setColorPalette(colorPalette);
      };

      if (typeof event.target.result === "string") {
        img.src = event.target.result;
      } else {
        img.src = "/shadcn.jpg";
      }

      if (typeof event.target.result === "string") {
        img.src = event.target.result;
      } else {
        img.src = "/shadcn.jpg";
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <main className="flex flex-col gap-10 items-center">
      <h1 className="text-3xl text-center">
        Extract Beautiful Color Palettes from Images.
      </h1>

      <input type="file" onChange={uploadImage} id="file" hidden />
      <div className="flex items-center gap-2">
        <Button
          className="flex gap-2 items-center"
          variant="secondary"
          onClick={() => document.getElementById("file")?.click()}
        >
          Upload <ImageIcon />
        </Button>
        <Button variant="outline">
          <Repeat />
        </Button>
      </div>
      <section></section>

      <section>
        <Display uploadedImage={uploadedImage} colorPalette={colorPalette} />
      </section>
    </main>
  );
}
