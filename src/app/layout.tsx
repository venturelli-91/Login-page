import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Login - Refatorando",
	description: "Sistema de login e cadastro da Refatorando",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<head>
				<link
					rel="icon"
					href="https://cache.refatorando.com.br/wp-content/uploads/2023/05/Favicon_Refatorando-1-100x100.png"
					type="image/x-icon"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;400;700&family=Ubuntu&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
