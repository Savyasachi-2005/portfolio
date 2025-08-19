import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundFXProps {
	variant?: 'grid' | 'dots';
	intensity?: 'subtle' | 'medium';
	fadeTop?: boolean;
	fadeBottom?: boolean;
	className?: string;
}

// Responsive background effects extracted for reuse.
const BackgroundFX: React.FC<BackgroundFXProps> = ({
	variant = 'grid',
	intensity = 'medium',
	fadeTop = true,
	fadeBottom = true,
	className = ''
}) => {
	const opacity = intensity === 'subtle' ? 'opacity-[0.16] md:opacity-[0.12]' : 'opacity-[0.28] md:opacity-[0.22]';
	return (
		<div className={`pointer-events-none absolute inset-0 -z-10 ${className}`} aria-hidden="true">
			<div className="absolute inset-0 bg-cyber-dark" />
			{variant === 'grid' && (
				<div className={`absolute inset-0 ${opacity} bg-[linear-gradient(to_right,#38bdf84d_1px,transparent_1px),linear-gradient(to_bottom,#38bdf84d_1px,transparent_1px)] bg-[size:38px_38px]`} />
			)}
			{variant === 'dots' && (
				<div className={`absolute inset-0 ${opacity} bg-[radial-gradient(circle_at_center,#38bdf830_1px,transparent_1px)] bg-[size:34px_34px]`} />
			)}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_60%,#0f172a_95%)]" />
			{fadeTop && <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-cyber-dark via-cyber-dark/60 to-transparent" />}
			{fadeBottom && <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cyber-dark to-transparent" />}
			{/* Animated accent orb (responsive scale) */}
			<motion.div
				className="absolute -left-24 top-1/3 w-72 h-72 rounded-full bg-cyber-blue/10 blur-3xl hidden md:block"
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 0.5, scale: [0.9, 1.05, 0.95] }}
				transition={{ duration: 18, repeat: Infinity }}
			/>
		</div>
	);
};

export default BackgroundFX;
