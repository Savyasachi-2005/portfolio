'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon, MailIcon, UserIcon, FolderIcon, WrenchIcon, MessageSquareIcon, FrameIcon } from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
	isExternal?: boolean;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Navigation',
		links: [
			{ title: 'About', href: '/about', icon: UserIcon },
			{ title: 'Projects', href: '/projects', icon: FolderIcon },
			{ title: 'Skills', href: '/skills', icon: WrenchIcon },
			{ title: 'Contact', href: '/contact', icon: MessageSquareIcon },
		],
	},
	{
		label: 'Social Links',
		links: [
			{ title: 'GitHub', href: 'https://github.com/Savyasachi-2005', icon: GithubIcon, isExternal: true },
			{ title: 'LinkedIn', href: 'https://www.linkedin.com/in/abhishek-hiremath-3020692a3', icon: LinkedinIcon, isExternal: true },
			{ title: 'Email', href: 'mailto:abhishekhiremath0424@gmail.com', icon: MailIcon, isExternal: true },
		],
	},
];

export function Footer() {
	return (
		<footer className="md:rounded-t-3xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-2xl border-t border-theme-accent/20 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-4 sm:px-6 py-8 sm:py-12 lg:py-16 mb-16 sm:mb-0">
			<div className="bg-theme-accent/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full gap-6 sm:gap-8 md:grid-cols-3 md:gap-8">
				<AnimatedContainer className="space-y-3 sm:space-y-4 text-center md:text-left">
					<Link to="/" className="flex items-center gap-2 justify-center md:justify-start">
						<FrameIcon className="size-6 sm:size-8 text-theme-accent" />
						<span className="font-orbitron text-lg sm:text-xl font-bold text-theme-accent">
							Abhishek
						</span>
					</Link>
					<p className="text-theme-text-alt mt-8 text-sm md:mt-0">
						Your friendly neighborhood developer
					</p>
				</AnimatedContainer>

				<div className="mt-6 sm:mt-10 grid grid-cols-2 gap-6 sm:gap-8 md:col-span-2 md:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-xs text-theme-text font-medium">{section.label}</h3>
								<ul className="text-theme-text-alt mt-4 space-y-2 text-sm">
									{section.links.map((link) => (
										<li key={link.title}>
											{link.isExternal ? (
												<a
													href={link.href}
													target="_blank"
													rel="noreferrer"
													className="hover:text-theme-accent inline-flex items-center transition-all duration-300"
												>
													{link.icon && <link.icon className="me-2 size-4" />}
													{link.title}
												</a>
											) : (
												<Link
													to={link.href}
													className="hover:text-theme-accent inline-flex items-center transition-all duration-300"
												>
													{link.icon && <link.icon className="me-2 size-4" />}
													{link.title}
												</Link>
											)}
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>

			<AnimatedContainer delay={0.4} className="w-full">
				<div className="border-t border-theme-accent/20 mt-8 pt-6 text-center text-sm text-theme-text-alt">
					<p>
						<span className="font-orbitron text-theme-text">Noctabyte</span> | <span className="font-orbitron text-theme-text">Savya</span> | <span className="font-orbitron text-theme-text">Savyasachi</span>
					</p>
				</div>
			</AnimatedContainer>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <>{children}</>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export default Footer;
