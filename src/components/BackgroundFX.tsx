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
	const opacity = intensity === 'subtle' ? 'opacity-[0.16] md:opacity-[0.12]' : 'opacity-[0.35] md:opacity-[0.3]';
	return (
		<div className={`pointer-events-none fixed inset-0 -z-10 ${className}`} aria-hidden="true">
			<div className="fixed inset-0" style={{ background:'var(--bg-body)' }} />
			{variant === 'grid' && (
				<>
					{/* Main grid */}
					<div 
						className={`absolute inset-0 ${opacity}`} 
						style={{ 
							backgroundImage:'linear-gradient(to right, color-mix(in srgb, var(--accent) 40%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--accent) 40%, transparent) 1px, transparent 1px)', 
							backgroundSize:'32px 32px'
						}} 
					/>
					{/* Subtle diagonal grid overlay */}
					<div 
						className="absolute inset-0 opacity-[0.15]" 
						style={{ 
							backgroundImage:'linear-gradient(45deg, color-mix(in srgb, var(--accent) 20%, transparent) 1px, transparent 1px)',
							backgroundSize:'64px 64px'
						}} 
					/>
				</>
			)}
			{variant === 'dots' && (
				<div className={`absolute inset-0 ${opacity}`} style={{ backgroundImage:'radial-gradient(circle at center, color-mix(in srgb, var(--accent) 25%, transparent) 1px, transparent 1px)', backgroundSize:'34px 34px' }} />
			)}
			{/* Enhanced radial gradient */}
			<div className="absolute inset-0" style={{ background:'radial-gradient(circle at center, rgba(0,0,0,0) 50%, var(--bg-body) 95%)' }} />
			{fadeTop && <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b" style={{ backgroundImage:'linear-gradient(to bottom, var(--bg-body), color-mix(in srgb, var(--bg-body) 60%, transparent), transparent)' }} />}
			{fadeBottom && <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t" style={{ backgroundImage:'linear-gradient(to top, var(--bg-body), transparent)' }} />}
			{/* Multiple animated orbs */}
			<motion.div
				className="absolute -left-24 top-1/3 w-72 h-72 rounded-full blur-3xl hidden md:block"
				style={{ background:'color-mix(in srgb, var(--accent) 25%, transparent)' }}
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 0.6, scale: [0.9, 1.05, 0.95] }}
				transition={{ duration: 18, repeat: Infinity }}
			/>
			<motion.div
				className="absolute right-0 top-2/3 w-96 h-96 rounded-full blur-[100px] hidden md:block"
				style={{ background:'color-mix(in srgb, var(--accent) 15%, transparent)' }}
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 0.4, scale: [1, 1.1, 0.95] }}
				transition={{ duration: 20, repeat: Infinity, delay: 2 }}
			/>
		</div>
	);
};

export default BackgroundFX;
