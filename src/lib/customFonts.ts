import localFont from "next/font/local";

const archivo = localFont({
  src: [{ path: "../../assets/fonts/archivo.ttf" }],
  variable: "--font-archivo",
  display: "swap",
});
const cabinetGrotesk = localFont({
  src: [{ path: "../../assets/fonts/cabinet-grotesk.ttf" }],
  variable: "--font-cabinetGrotesk",
  display: "swap",
});

export { archivo, cabinetGrotesk };
