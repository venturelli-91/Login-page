"use client";

import { FormEvent, ChangeEvent } from "react";
import { Button, TextInput } from "flowbite-react";
import Image from "next/image";
import { useAuthStore } from "@/store/authStore";

const SignUpForm = () => {
	const { formData, formErrors, updateFormData, signup, switchToLogin } =
		useAuthStore();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		signup(formData.name, formData.email, formData.password);
	};

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		updateFormData("name", e.target.value);
	};

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		updateFormData("email", e.target.value);
	};

	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		updateFormData("password", e.target.value);
	};

	const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		updateFormData("confirmPassword", e.target.value);
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen w-full px-4 md:px-12">
			<div className="mb-8 md:hidden">
				<Image
					src="/images/Logo_Horizontal_colorida_Refatorando_1.png"
					alt="logo refatorando"
					width={200}
					height={54}
				/>
			</div>

			<form
				onSubmit={handleSubmit}
				className="w-full max-w-md">
				<div className="hidden md:block mb-8">
					<Image
						src="/images/Logo_Horizontal_colorida_Refatorando_1.png"
						alt="logo refatorando"
						width={200}
						height={54}
					/>
				</div>

				<h3 className="text-left text-xl font-semibold mb-4">Crie sua conta</h3>

				{formErrors.errorMessages.length > 0 && (
					<div className="text-red-500 mb-4">
						{formErrors.errorMessages.map((error: string, index: number) => (
							<div key={index}>{error}</div>
						))}
					</div>
				)}

				<div className="mb-4">
					<TextInput
						id="name"
						type="text"
						placeholder="Nome completo"
						value={formData.name}
						onChange={handleNameChange}
						color={formErrors.nameError ? "failure" : undefined}
						className="input-field"
					/>
				</div>

				<div className="mb-4">
					<TextInput
						id="email"
						type="email"
						placeholder="E-mail"
						value={formData.email}
						onChange={handleEmailChange}
						color={formErrors.emailError ? "failure" : undefined}
						className="input-field"
					/>
				</div>

				<div className="mb-4">
					<TextInput
						id="password"
						type="password"
						placeholder="Senha"
						value={formData.password}
						onChange={handlePasswordChange}
						color={formErrors.passwordError ? "failure" : undefined}
						className="input-field"
					/>
				</div>

				<div className="mb-4">
					<TextInput
						id="confirmPassword"
						type="password"
						placeholder="Confirme sua senha"
						value={formData.confirmPassword}
						onChange={handleConfirmPasswordChange}
						color={formErrors.confirmPasswordError ? "failure" : undefined}
						className="input-field"
					/>
				</div>

				<Button
					type="submit"
					className="btn-primary w-full"
					gradientDuoTone="cyanToBlue">
					Cadastrar
				</Button>

				<div className="text-center mt-6">
					<span>Já tem uma conta? </span>
					<a
						href="#"
						onClick={switchToLogin}
						className="text-[#0B9DCA] font-medium hover:underline">
						Faça login
					</a>
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;
