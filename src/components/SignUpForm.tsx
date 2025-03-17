"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Button, TextInput } from "flowbite-react";
import Image from "next/image";

interface SignUpFormProps {
	onSwitchToLogin: () => void;
}

const SignUpForm = ({ onSwitchToLogin }: SignUpFormProps) => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [errors, setErrors] = useState<string[]>([]);
	const [nameError, setNameError] = useState<boolean>(false);
	const [emailError, setEmailError] = useState<boolean>(false);
	const [passwordError, setPasswordError] = useState<boolean>(false);
	const [confirmPasswordError, setConfirmPasswordError] =
		useState<boolean>(false);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newErrors: string[] = [];

		// Validação de nome
		if (name.trim() === "") {
			setNameError(true);
			newErrors.push("Preencha um nome!");
		} else {
			setNameError(false);
		}

		// Validação de email
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!emailRegex.test(email.trim())) {
			setEmailError(true);
			newErrors.push("Email inválido!");
		} else {
			setEmailError(false);
		}

		// Validação de senha
		if (password.trim().length < 8) {
			setPasswordError(true);
			newErrors.push("Senha deve conter pelo menos 8 caracteres");
		} else {
			setPasswordError(false);
		}

		// Validação de confirmação de senha
		if (password !== confirmPassword) {
			setConfirmPasswordError(true);
			newErrors.push("As senhas não são iguais!");
		} else {
			setConfirmPasswordError(false);
		}

		setErrors(newErrors);

		if (newErrors.length === 0) {
			const userData = {
				name: name.trim(),
				email: email.trim(),
				password: password.trim(),
			};
			console.log("Dados do usuário:", userData);
		}
	};

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setConfirmPassword(e.target.value);
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen w-full">
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-md px-4">
				<div className="mb-4 flex justify-center">
					<Image
						src="/images/Logo_Horizontal_colorida_Refatorando_1.png"
						alt="logo refatorando"
						width={200}
						height={54}
					/>
				</div>

				<h3 className="text-left text-xl font-semibold mb-4">Crie sua conta</h3>

				{errors.length > 0 && (
					<div className="text-red-500 mb-4">
						{errors.map((error: string, index: number) => (
							<div key={index}>{error}</div>
						))}
					</div>
				)}

				<div className="mb-4">
					<TextInput
						id="email"
						type="email"
						placeholder="E-mail"
						value={email}
						onChange={handleEmailChange}
						color={emailError ? "failure" : undefined}
						className="input-field"
					/>
				</div>

				<div className="mb-4">
					<TextInput
						id="name"
						type="text"
						placeholder="Nome"
						value={name}
						onChange={handleNameChange}
						color={nameError ? "failure" : undefined}
						className="input-field"
					/>
				</div>

				<div className="mb-4">
					<TextInput
						id="password"
						type="password"
						placeholder="Digite uma senha"
						value={password}
						onChange={handlePasswordChange}
						color={passwordError ? "failure" : undefined}
						className="input-field"
					/>
				</div>

				<div className="mb-4">
					<TextInput
						id="password-confirmation"
						type="password"
						placeholder="Repita sua senha"
						value={confirmPassword}
						onChange={handleConfirmPasswordChange}
						color={confirmPasswordError ? "failure" : undefined}
						className="input-field"
					/>
				</div>

				<Button
					type="submit"
					className="btn-primary"
					gradientDuoTone="cyanToBlue">
					Enviar
				</Button>

				<div className="text-center mt-4">
					<span>Já tem uma conta? </span>
					<a
						href="#"
						onClick={onSwitchToLogin}
						className="text-[#0B9DCA]">
						Voltar para o login
					</a>
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;
