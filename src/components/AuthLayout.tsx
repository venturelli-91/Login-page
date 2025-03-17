"use client";

import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { useAuthStore } from "@/store/authStore";

interface AuthLayoutProps {
	children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
	const { showLogin, welcomeText } = useAuthStore();
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [currentText, setCurrentText] = useState(welcomeText);
	const [currentForm, setCurrentForm] = useState<ReactNode>(children);
	const [isFormTransitioning, setIsFormTransitioning] = useState(false);

	// Efeito para animar a transição do texto
	useEffect(() => {
		setIsTransitioning(true);
		const timer = setTimeout(() => {
			setCurrentText(welcomeText);
			setIsTransitioning(false);
		}, 300);

		return () => clearTimeout(timer);
	}, [welcomeText]);

	// Efeito para animar a transição do formulário
	useEffect(() => {
		setIsFormTransitioning(true);
		const timer = setTimeout(() => {
			setCurrentForm(children);
			setIsFormTransitioning(false);
		}, 300);

		return () => clearTimeout(timer);
	}, [children]);

	return (
		<div className="flex h-screen w-full overflow-hidden">
			{/* Lado esquerdo - Imagem e texto de boas-vindas */}
			<div className="hidden md:flex md:w-1/2 bg-gradient-to-r from-blue-600 to-cyan-400 relative">
				<div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
				<Image
					src="/images/bg-login.jpg"
					alt="Background"
					fill
					className="object-cover transition-opacity duration-500"
					priority
				/>
				<div className="relative z-20 flex flex-col justify-center px-12 text-white w-full">
					<h1
						className={`text-4xl font-bold mb-4 transition-all duration-500 transform ${
							isTransitioning
								? "opacity-0 -translate-y-4"
								: "opacity-100 translate-y-0"
						}`}
						dangerouslySetInnerHTML={{ __html: currentText.title }}
					/>
					<p
						className={`text-lg transition-all duration-500 transform ${
							isTransitioning
								? "opacity-0 translate-y-4"
								: "opacity-100 translate-y-0"
						}`}>
						{currentText.subtitle}
					</p>
				</div>
			</div>

			{/* Lado direito - Formulário */}
			<div className="w-full md:w-1/2 relative">
				<div
					className={`absolute inset-0 transition-all duration-500 transform ${
						isFormTransitioning
							? showLogin
								? "translate-x-8 opacity-0"
								: "-translate-x-8 opacity-0"
							: "translate-x-0 opacity-100"
					}`}>
					{currentForm}
				</div>
			</div>
		</div>
	);
};

export default AuthLayout;
