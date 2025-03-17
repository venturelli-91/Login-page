import { create } from "zustand";
import { persist } from "zustand/middleware";

// Interfaces
export interface UserData {
	id?: string;
	name: string;
	email: string;
	password?: string;
}

export interface FormErrors {
	nameError: boolean;
	emailError: boolean;
	passwordError: boolean;
	confirmPasswordError: boolean;
	errorMessages: string[];
}

interface AuthState {
	// Estados
	isAuthenticated: boolean;
	user: UserData | null;
	isSignUpMode: boolean;
	formData: {
		name: string;
		email: string;
		password: string;
		confirmPassword: string;
	};
	formErrors: FormErrors;
	showLogin: boolean;
	welcomeText: {
		title: string;
		subtitle: string;
	};

	// Ações
	login: (email: string, password: string) => void;
	signup: (name: string, email: string, password: string) => void;
	logout: () => void;
	updateFormData: (field: string, value: string) => void;
	validateForm: () => boolean;
	switchToLogin: () => void;
	switchToSignUp: () => void;
	clearErrors: () => void;
	setError: (field: string, hasError: boolean, message?: string) => void;
}

export const useAuthStore = create<AuthState>()(
	persist(
		(set, get) => ({
			// Estados iniciais
			isAuthenticated: false,
			user: null,
			isSignUpMode: false,
			formData: {
				name: "",
				email: "",
				password: "",
				confirmPassword: "",
			},
			formErrors: {
				nameError: false,
				emailError: false,
				passwordError: false,
				confirmPasswordError: false,
				errorMessages: [],
			},
			showLogin: true,
			welcomeText: {
				title: "Olá!<br />Seja bem-vindo(a).",
				subtitle: "Faça login para continuar acessando a página.",
			},

			// Ações
			login: (email, password) => {
				const { validateForm } = get();
				if (!validateForm()) return;

				// Simulação de login bem-sucedido
				set({
					isAuthenticated: true,
					user: {
						id: "1",
						name: "Usuário",
						email,
					},
				});

				console.log("Login bem-sucedido:", { email, password });
			},

			signup: (name, email, password) => {
				const { validateForm } = get();
				if (!validateForm()) return;

				// Simulação de cadastro bem-sucedido
				set({
					isAuthenticated: true,
					user: {
						id: "1",
						name,
						email,
					},
				});

				console.log("Cadastro bem-sucedido:", { name, email, password });
			},

			logout: () => {
				set({
					isAuthenticated: false,
					user: null,
				});
			},

			updateFormData: (field, value) => {
				set((state) => ({
					formData: {
						...state.formData,
						[field]: value,
					},
				}));
			},

			validateForm: () => {
				const { formData, clearErrors, setError } = get();
				let isValid = true;
				clearErrors();

				// Validação de nome (apenas no cadastro)
				if (get().isSignUpMode && formData.name.trim().length < 3) {
					setError("name", true, "Nome deve ter pelo menos 3 caracteres");
					isValid = false;
				}

				// Validação de email
				const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
				if (!emailRegex.test(formData.email.trim())) {
					setError("email", true, "Email inválido!");
					isValid = false;
				}

				// Validação de senha
				if (formData.password.trim().length < 8) {
					setError(
						"password",
						true,
						"Senha deve conter pelo menos 8 caracteres"
					);
					isValid = false;
				}

				// Validação de confirmação de senha (apenas no cadastro)
				if (
					get().isSignUpMode &&
					formData.password !== formData.confirmPassword
				) {
					setError("confirmPassword", true, "As senhas não coincidem");
					isValid = false;
				}

				return isValid;
			},

			switchToLogin: () => {
				set({
					showLogin: true,
					welcomeText: {
						title: "Olá!<br />Seja bem-vindo(a) de volta.",
						subtitle: "Faça login para continuar acessando a página.",
					},
					formErrors: {
						nameError: false,
						emailError: false,
						passwordError: false,
						confirmPasswordError: false,
						errorMessages: [],
					},
				});
			},

			switchToSignUp: () => {
				set({
					showLogin: false,
					welcomeText: {
						title: "Olá!<br />Seja bem-vindo(a).",
						subtitle: "Crie sua conta para acessar a plataforma.",
					},
					formErrors: {
						nameError: false,
						emailError: false,
						passwordError: false,
						confirmPasswordError: false,
						errorMessages: [],
					},
				});
			},

			clearErrors: () => {
				set({
					formErrors: {
						nameError: false,
						emailError: false,
						passwordError: false,
						confirmPasswordError: false,
						errorMessages: [],
					},
				});
			},

			setError: (field, hasError, message) => {
				set((state) => {
					const newErrors = { ...state.formErrors };

					// Atualiza o estado de erro do campo específico
					if (field === "name") newErrors.nameError = hasError;
					if (field === "email") newErrors.emailError = hasError;
					if (field === "password") newErrors.passwordError = hasError;
					if (field === "confirmPassword")
						newErrors.confirmPasswordError = hasError;

					// Adiciona a mensagem de erro, se fornecida
					if (message && hasError) {
						newErrors.errorMessages = [...newErrors.errorMessages, message];
					}

					return { formErrors: newErrors };
				});
			},
		}),
		{
			name: "auth-storage",
			partialize: (state) => ({
				isAuthenticated: state.isAuthenticated,
				user: state.user,
			}),
		}
	)
);
