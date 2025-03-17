"use client";

import { FormEvent, ChangeEvent } from "react";
import { Button, TextInput } from "flowbite-react";
import Image from "next/image";
import { useAuthStore } from "@/store/authStore";

const LoginForm = () => {
	const { formData, formErrors, updateFormData, login, switchToSignUp } =
		useAuthStore();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		login(formData.email, formData.password);
	};

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		updateFormData("email", e.target.value);
	};

	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		updateFormData("password", e.target.value);
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

				<h3 className="text-left text-xl font-semibold mb-4">Faça seu Login</h3>

				{formErrors.errorMessages.length > 0 && (
					<div className="text-red-500 mb-4">
						{formErrors.errorMessages.map((error: string, index: number) => (
							<div key={index}>{error}</div>
						))}
					</div>
				)}

				<div className="mb-4">
					<TextInput
						id="username"
						type="email"
						placeholder="E-mail"
						value={formData.email}
						onChange={handleEmailChange}
						color={formErrors.emailError ? "failure" : undefined}
						className="input-field"
					/>
				</div>

				<div className="mb-2">
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

				<div className="text-right mb-4">
					<a
						href="#"
						className="link text-sm">
						Esqueci minha senha
					</a>
				</div>

				<Button
					type="submit"
					className="btn-primary w-full"
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

				<div className="google-btn py-2 flex items-center justify-center w-full border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
					<Image
						src="/images/google.svg"
						alt="Google logo"
						width={24}
						height={24}
					/>
					<span className="ml-2">Sign in with Google</span>
				</div>

				<div className="text-center mt-6">
					<span>Não tem uma conta? </span>
					<a
						href="#"
						onClick={switchToSignUp}
						className="text-[#0B9DCA] font-medium hover:underline">
						Inscreva-se
					</a>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
