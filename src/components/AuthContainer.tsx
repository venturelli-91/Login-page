"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Image from "next/image";

const AuthContainer = () => {
	const [showLogin, setShowLogin] = useState<boolean>(true);
	const [welcomeText, setWelcomeText] = useState<{
		title: string;
		subtitle: string;
	}>({
		title: "Olá!<br />Seja bem-vindo(a).",
		subtitle: "Faça login para continuar acessando a página.",
	});

	const handleSwitchToSignUp = () => {
		setShowLogin(false);
		setWelcomeText({
			title: "Olá!<br />Seja bem-vindo(a).",
			subtitle: "Crie sua conta para acessar a plataforma.",
		});
	};

	const handleSwitchToLogin = () => {
		setShowLogin(true);
		setWelcomeText({
			title: "Olá!<br />Seja bem-vindo(a) de volta.",
			subtitle: "Faça login para continuar acessando a página.",
		});
	};

	return (
		<div className="flex flex-col md:flex-row w-full h-screen">
			{/* Seção de texto de boas-vindas */}
			<div
				className="hidden md:flex md:w-1/2 h-screen bg-right bg-cover bg-no-repeat animate-slide text-white items-center justify-center shadow-lg"
				style={{
					backgroundImage: `url('/images/bg.png')`,
				}}>
				<div className="w-4/5 max-w-md">
					<h2
						className="text-4xl font-bold mb-2 drop-shadow-md"
						dangerouslySetInnerHTML={{ __html: welcomeText.title }}
					/>
					<p className="text-2xl drop-shadow-md">{welcomeText.subtitle}</p>
				</div>
			</div>

			{/* Seção de formulário */}
			<div className="w-full md:w-1/2 h-screen flex items-center justify-center">
				{showLogin ? (
					<LoginForm onSwitchToSignUp={handleSwitchToSignUp} />
				) : (
					<SignUpForm onSwitchToLogin={handleSwitchToLogin} />
				)}
			</div>
		</div>
	);
};

export default AuthContainer;
