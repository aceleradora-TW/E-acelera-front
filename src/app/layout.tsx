import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveAppBar from "@/components/NavBar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/app/config/theme";
import { Box } from "@mui/material";
import { getServerSession } from "next-auth";
import ClientSessionProvider from "@/components/ClientSessionProvider";

const menuItems = ["Nivelamento", "Autoestudo"];

const inter = Inter({ subsets: ["latin"] });

export const session = async () => await getServerSession()

export const metadata: Metadata = {
  title: "E-acelera - Plataforma de Estudo para Desenvolvedores",
  description:
    "O E-acelera é uma plataforma inovadora que faz parte do programa Aceleradora Ágil. A plataforma oferece nivelamentos e desafios para desenvolvedores aprimorarem suas habilidades em programação.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getServerSession()

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ClientSessionProvider>
        <ThemeProvider theme={theme}>
          <Box sx={{ marginBottom: "80px" }}>
            <ResponsiveAppBar list={menuItems} session={data} />
          </Box>
          {children}
        </ThemeProvider>
        </ClientSessionProvider>
      </body>
    </html>
  );
}
