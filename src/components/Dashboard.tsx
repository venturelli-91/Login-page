"use client";

import { Button } from "flowbite-react";
import Image from "next/image";
import { useAuthStore } from "@/store/authStore";

const Dashboard = () => {
	const { user, logout } = useAuthStore();

	return (
		<div className="flex flex-col items-center justify-center h-screen w-full">
			<div className="mb-8">
				<Image
					src="/images/Logo_Horizontal_colorida_Refatorando_1.png"
					alt="logo refatorando"
					width={200}
					height={54}
				/>
			</div>

			<div className="w-full max-w-md px-4 py-8 bg-white rounded-lg shadow-md">
				<h1 className="text-2xl font-bold mb-6 text-center">Dashboard</h1>

				<div className="mb-6">
					<h2 className="text-xl font-semibold mb-2">
						Bem-vindo, {user?.name}!
					</h2>
					<p className="text-gray-600">Email: {user?.email}</p>
					<p className="text-gray-600">ID: {user?.id}</p>
				</div>

				<div className="border-t border-gray-200 pt-4 mt-4">
					<h3 className="text-lg font-medium mb-2">Ações</h3>
					<Button
						onClick={logout}
						className="w-full"
						gradientDuoTone="cyanToBlue">
						Sair
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
