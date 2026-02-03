import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import hero1 from '../assets/hero-1.jpg';
import hero2 from '../assets/hero-2.jpg';
import hero3 from '../assets/hero-3.jpg';
import hero4 from '../assets/hero-4.jpg';
import hero5 from '../assets/hero-5.jpg';

const slides = [
	{
		id: 1,
		image: hero1,
		titleKey: 'hero.slides.0.title',
		subtitleKey: 'hero.slides.0.subtitle',
		ctaTextKey: 'hero.cta.services',
	},
	{
		id: 2,
		image: hero2,
		titleKey: 'hero.slides.1.title',
		subtitleKey: 'hero.slides.1.subtitle',
		ctaTextKey: 'hero.cta.services',
	},
	{
		id: 3,
		image: hero3,
		titleKey: 'hero.slides.2.title',
		subtitleKey: 'hero.slides.2.subtitle',
		ctaTextKey: 'hero.cta.services',
	},
	{
		id: 4,
		image: hero4,
		titleKey: 'hero.slides.2.title',
		subtitleKey: 'hero.slides.2.subtitle',
		ctaTextKey: 'hero.cta.services',
	},
	{
		id: 5,
		image: hero5,
		titleKey: 'hero.slides.2.title',
		subtitleKey: 'hero.slides.2.subtitle',
		ctaTextKey: 'hero.cta.services',
	},
];

const HeroCarousel = () => {
	const { t } = useTranslation();
	const [currentSlide, setCurrentSlide] = useState(0);
	const [direction, setDirection] = useState(0);

	const nextSlide = useCallback(() => {
		setDirection(1);
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	}, []);

	const prevSlide = () => {
		setDirection(-1);
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	const goToSlide = (index) => {
		setDirection(index > currentSlide ? 1 : -1);
		setCurrentSlide(index);
	};

	useEffect(() => {
		const timer = setInterval(nextSlide, 6000);
		return () => clearInterval(timer);
	}, [nextSlide]);

	const currentSlideData = slides[currentSlide];

	const slideVariants = {
		enter: (direction) => ({
			x: direction > 0 ? 100 : -100,
			opacity: 0,
		}),
		center: {
			x: 0,
			opacity: 1,
		},
		exit: (direction) => ({
			x: direction > 0 ? -100 : 100,
			opacity: 0,
		}),
	};

	return (
		<section className="relative h-screen w-full overflow-hidden bg-slate-950">
			{/* Image de fond avec overlay */}
			<AnimatePresence initial={false} custom={direction}>
				<motion.div
					key={currentSlide}
					custom={direction}
					variants={slideVariants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
					className="absolute inset-0"
				>
					<img
						src={currentSlideData.image}
						alt={t(currentSlideData.titleKey)}
						className="h-full w-full object-cover brightness-110 contrast-105"
					/>
					{/* Overlay dégradé optimisé pour clarté */}
					<div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
					<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />
				</motion.div>
			</AnimatePresence>

			{/* Grille de points décorative */}
			<div className="absolute inset-0 opacity-10" style={{
				backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
				backgroundSize: '50px 50px'
			}} />

			{/* Contenu principal */}
			<div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
				<div className="w-full lg:w-3/5">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentSlide}
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -40 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
						>
							{/* Badge numéro de slide */}
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.2 }}
								className="mb-6 inline-flex items-center gap-3"
							>
								<div className="flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 backdrop-blur-sm">
									<div className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
									<span className="text-sm font-medium text-orange-400">
										{String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
									</span>
								</div>
							</motion.div>

							{/* Titre principal */}
							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3, duration: 0.6 }}
								className="mb-6 text-5xl font-bold leading-tight text-white lg:text-7xl"
							>
								{t(currentSlideData.titleKey).split(' ').map((word, i) => (
									<motion.span
										key={i}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.3 + i * 0.05 }}
										className="inline-block"
									>
										{word}&nbsp;
									</motion.span>
								))}
							</motion.h1>

							{/* Ligne décorative animée */}
							<motion.div
								initial={{ width: 0 }}
								animate={{ width: 120 }}
								transition={{ delay: 0.5, duration: 0.8 }}
								className="mb-8 h-1 bg-gradient-to-r from-orange-500 to-orange-600"
							/>

							{/* Sous-titre */}
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.6 }}
								className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 lg:text-xl"
							>
								{t(currentSlideData.subtitleKey)}
							</motion.p>

							{/* Bouton CTA amélioré */}
							<ScrollLink
								to="services"
								smooth={true}
								duration={500}
								className="inline-flex cursor-pointer"
							>
								<motion.button
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.7 }}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="group relative overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:shadow-xl hover:shadow-orange-500/40"
								>
									<span className="relative z-10 flex items-center gap-2">
										{t(currentSlideData.ctaTextKey)}
										<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
									</span>
									<div className="absolute inset-0 -z-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 transition-opacity group-hover:opacity-100" />
								</motion.button>
							</ScrollLink>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>

			{/* Navigation améliorée */}
			<div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 gap-4 lg:left-auto lg:right-12 lg:translate-x-0">
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={prevSlide}
					className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all hover:border-orange-500 hover:bg-orange-500"
					aria-label="Diapositive précédente"
				>
					<ChevronLeft className="h-5 w-5 text-white" />
				</motion.button>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={nextSlide}
					className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all hover:border-orange-500 hover:bg-orange-500"
					aria-label="Diapositive suivante"
				>
					<ChevronRight className="h-5 w-5 text-white" />
				</motion.button>
			</div>

			{/* Indicateurs de slides redessinés */}
			<div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 gap-3">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className="group relative"
						aria-label={`Aller à la diapositive ${index + 1}`}
					>
						<div
							className={`h-1.5 rounded-full transition-all duration-500 ${
								index === currentSlide
									? 'w-16 bg-gradient-to-r from-orange-500 to-orange-600'
									: 'w-8 bg-white/30 group-hover:bg-white/60'
							}`}
						/>
						{index === currentSlide && (
							<motion.div
								layoutId="activeSlide"
								className="absolute -inset-2 rounded-full border border-orange-500/30"
							/>
						)}
					</button>
				))}
			</div>

			{/* Indicateur de défilement amélioré */}
			<motion.div
				animate={{ y: [0, 12, 0] }}
				transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
				className="absolute bottom-12 left-12 z-20 hidden lg:block"
			>
				<div className="flex flex-col items-center gap-2">
					<div className="h-16 w-px bg-gradient-to-b from-transparent via-white/50 to-transparent" />
					<span className="text-xs font-medium uppercase tracking-wider text-white/60">Scroll</span>
				</div>
			</motion.div>

			{/* Numéro de slide stylisé (coin supérieur droit) */}
			<div className="absolute right-12 top-12 z-20 hidden text-right lg:block">
				<motion.div
					key={currentSlide}
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					className="text-6xl font-bold text-white/10"
				>
					{String(currentSlide + 1).padStart(2, '0')}
				</motion.div>
			</div>
		</section>
	);
};

export default HeroCarousel;