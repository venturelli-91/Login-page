"use client";

import { useAuthStore } from "@/store/authStore";
import LoginForm from "@/components/LoginForm";
import SignUpForm from "@/components/SignUpForm";
import Dashboard from "@/components/Dashboard";
import AuthLayout from "@/components/AuthLayout";

export default function Home() {
	const { isAuthenticated, showLogin } = useAuthStore();

	return (
		<main className="min-h-screen bg-white">
			{isAuthenticated ? (
				<Dashboard />
			) : (
				<AuthLayout>{showLogin ? <LoginForm /> : <SignUpForm />}</AuthLayout>
			)}
		</main>
	);
}
