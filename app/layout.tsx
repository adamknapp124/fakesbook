import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import ToasterContext from './context/ToasterContext';
import AuthContext from './context/AuthContext';
import Navbar from './components/navbar/Navbar';

import getCurrentUser from './actions/getCurrentUser';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Fakesbook',
	description: 'The number one REAL fake Facebook',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentUser = await getCurrentUser();
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthContext>
					<ToasterContext />
					<Navbar currentUser={currentUser!} />
					{children}
				</AuthContext>
			</body>
		</html>
	);
}
