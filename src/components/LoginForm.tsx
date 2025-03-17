"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Button, TextInput } from "flowbite-react";
import Image from "next/image";

interface LoginFormProps {
	onSwitchToSignUp: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToSignUp }) => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [errors, setErrors] = useState<string[]>([]);
	const [emailError, setEmailError] = useState<boolean>(false);
	const [passwordError, setPasswordError] = useState<boolean>(false);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newErrors: string[] = [];

		// Validação de senha
		if (password.trim().length < 8) {
			setPasswordError(true);
			newErrors.push("Senha deve conter pelo menos 8 caracteres");
		} else {
			setPasswordError(false);
		}

		// Validação de email
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!emailRegex.test(email.trim())) {
			setEmailError(true);
			newErrors.push("Email inválido!");
		} else {
			setEmailError(false);
		}

		setErrors(newErrors);
	};

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen w-full">
			<div className="mb-4">
				<Image
					src="/images/Logo_Horizontal_colorida_Refatorando_1.png"
					alt="logo refatorando"
					width={200}
					height={54}
				/>
			</div>

			<form
				onSubmit={handleSubmit}
				className="w-full max-w-md px-4">
				<h3 className="text-left text-xl font-semibold mb-4">Faça seu Login</h3>

				{errors.length > 0 && (
					<div className="text-red-500 mb-4">
						{errors.map((error, index) => (
							<div key={index}>{error}</div>
						))}
					</div>
				)}

				<div className="mb-4">
					<TextInput
						id="username"
						type="email"
						placeholder="E-mail"
						value={email}
						onChange={handleEmailChange}
						color={emailError ? "failure" : undefined}
						className="input-field"
					/>
				</div>

				<div className="mb-2">
					<TextInput
						id="password"
						type="password"
						placeholder="Senha"
						value={password}
						onChange={handlePasswordChange}
						color={passwordError ? "failure" : undefined}
						className="input-field"
					/>
				</div>

				<div className="text-right mb-4">
					<a
						href="#"
						className="link text-sm">
						Esqueci minha senha
					</a>
				</div>

				<Button
					type="submit"
					className="btn-primary"
					gradientDuoTone="cyanToBlue">
					Entrar
				</Button>

				<div className="relative flex items-center justify-center my-4">
					<div className="border-t border-gray-400 w-full"></div>
					<div className="bg-white px-4 text-sm text-gray-600">
						ou faça login com
					</div>
					<div className="border-t border-gray-400 w-full"></div>
				</div>

				<div className="google-btn py-2">
					<Image
						src="/images/google.svg"
						alt="Google logo"
						width={30}
						height={30}
					/>
					<span className="ml-2">Sign in with Google</span>
				</div>

				<div className="text-center mt-4">
					<span>Não tem uma conta? </span>
					<a
						href="#"
						onClick={onSwitchToSignUp}
						className="text-[#0B9DCA]">
						Inscreva-se
					</a>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
