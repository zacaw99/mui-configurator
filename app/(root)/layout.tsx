import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body className={manrope.className}>{children}</body>
		</html>
	);
};

export default RootLayout;
