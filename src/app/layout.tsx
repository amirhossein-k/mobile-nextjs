import Navbarr from "@/components/Navbar";
import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {ReduxProvider} from "../../redux/provider";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html className="h-full" lang="en" suppressHydrationWarning={true}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="node_modules/keen-slider/keen-slider.min.css"
        />
      </head>
      <body className={`${inter.className} `}>
        <ReduxProvider>
          <header>
            <Navbarr />
          </header>
          {children}
          {/* <div className="flex flex-col h-full">{children}</div> */}
        </ReduxProvider>
      </body>
    </html>
  );
}
