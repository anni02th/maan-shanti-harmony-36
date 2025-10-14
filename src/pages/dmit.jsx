// src/pages/dmit.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Brain, Fingerprint, BarChart } from "lucide-react";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aptitudeIcon from "@/assets/aptitude.png";
import IQ from "@/assets/iq.png";
import FingerprintImg from "@/assets/fingerprintIcon.png";
import FingerprintDMIT from "@/assets/fingerprint.png";
import service_img from "@/assets/dmit.png";
import { useNavigate } from "react-router-dom";

export default function DMITPage() {
    const headingPhrases = [
        "Unique Mind Patterns",
        "Your Learning Style",
        "Hidden Strengths"
    ];

    const [displayText, setDisplayText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const navigate = useNavigate();

    const handleStartTest = () => {
        navigate('/auth'); // This will redirect the user to the /signup route
    };

    useEffect(() => {
        const currentPhrase = headingPhrases[phraseIndex];

        if (!isDeleting && charIndex <= currentPhrase.length) {
            // Typing forward
            const timeout = setTimeout(() => {
                setDisplayText(currentPhrase.substring(0, charIndex));
                setCharIndex((prev) => prev + 1);
            }, 80);
            return () => clearTimeout(timeout);
        } else if (isDeleting && charIndex >= 0) {
            // Deleting backward
            const timeout = setTimeout(() => {
                setDisplayText(currentPhrase.substring(0, charIndex));
                setCharIndex((prev) => prev - 1);
            }, 50);
            return () => clearTimeout(timeout);
        } else if (!isDeleting && charIndex > currentPhrase.length) {
            // Pause before deleting
            const timeout = setTimeout(() => setIsDeleting(true), 1500);
            return () => clearTimeout(timeout);
        } else if (isDeleting && charIndex < 0) {
            // Move to next phrase
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % headingPhrases.length);
        }
    }, [charIndex, isDeleting, phraseIndex]);

    return (
        <div className="min-h-screen bg-gradient-hero text-foreground">
            <Header />
            {/* The existing Service Hero Section with animation */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pt-24 pb-16 bg-gradient-hero relative overflow-hidden"
            >
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-no-repeat bg-left lg:bg-center"
                    style={{ backgroundImage: `url(${service_img})` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                {/* Content */}
                <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-6xl font-bold text-white mb-6 font-heading"
                    >
                        Unlock Your Potential with DMIT
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-white/90 max-w-3xl mx-auto"
                    >
                        Gain insights into your unique mind patterns and inherent strengths with our comprehensive DMIT, Aptitude, and IQ tests.
                    </motion.p>
                </div>
            </motion.div>

            {/* Hero Section */}
            <section className="container py-16 md:p-16 flex flex-col md:flex-row items-center justify-evenly">
                {/* Text */}
                <motion.div // 1. Hero Text Fade-in & Slide
                    className="flex-1 space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight ">
                        Discover Your
                        <div className="h-4" />
                        <span className="text-primary border-r-4 ">{displayText}</span>
                    </h1>

                    <p className="text-muted-foreground max-w-lg">
                        Explore Aptitude, IQ, and Dermatoglyphics Multiple Intelligence Test
                        (DMIT) to understand your strengths, learning styles, and hidden
                        potential.
                    </p>
                    <div className="flex gap-4">
                        <Button size="lg" className="shadow-button text-md" onClick={handleStartTest}>
                            Take a Test Now
                        </Button>
                        <Button size="lg" variant="outline" className="text-md" onClick={handleStartTest}>
                            Learn More
                        </Button>
                    </div>
                </motion.div>

                {/* Hero Brain Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="flex-1 flex justify-center"
                >
                    <img
                        src="/brain.png"
                        alt="Brain Graphic"
                        className="w-full max-w-2xl object-contain"
                    />
                </motion.div>
            </section>

            {/* Test Options */}
            <section className="container py-16 md:p-16 text-center">
    <motion.h2
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
    >
        Choose Your Test
    </motion.h2>
    <motion.div
        className="w-24 h-1 bg-gradient-teal mx-auto mb-16"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
    ></motion.div>
    <div className="grid md:grid-cols-3 gap-10">
        <motion.div
            className="shadow-card h-full rounded-2xl bg-white overflow-hidden" // ADDED rounded-2xl, bg-white, and overflow-hidden here
            whileHover={{ translateY: -5, boxShadow: "0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)" }}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <Card className="p-6 h-full"> {/* REMOVED bg-white and rounded-2xl from Card */}
                <CardContent className="space-y-4 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                        <img
                            src={aptitudeIcon}
                            alt="Aptitude Icon"
                            className="w-24 h-24 mx-auto"
                        />
                        <h3 className="text-2xl font-semibold">Aptitude Test</h3>
                        <p className="text-muted-foreground text-md flex-grow">
                            Measure problem-solving, logical reasoning, and analytical skills.
                        </p>
                    </div>
                    <Button className="mt-8 shadow-button text-md" onClick={handleStartTest}>Start Test</Button>
                </CardContent>
            </Card>
        </motion.div>
        <motion.div
            className="shadow-card h-full rounded-2xl bg-white overflow-hidden" // ADDED rounded-2xl, bg-white, and overflow-hidden here
            whileHover={{ translateY: -5, boxShadow: "0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)" }}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <Card className="p-6 h-full"> {/* REMOVED bg-white and rounded-2xl from Card */}
                <CardContent className="space-y-4 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                        <img
                            src={IQ}
                            alt="IQ Icon"
                            className="w-24 h-24 mx-auto"
                        />
                        <h3 className="text-2xl font-semibold">IQ Test</h3>
                        <p className="text-muted-foreground text-md flex-grow">
                            Understand your intelligence quotient with puzzles & tasks.
                        </p>
                    </div>
                    <Button className="mt-4 shadow-button" onClick={handleStartTest}>Start Test</Button>
                </CardContent>
            </Card>
        </motion.div>
        <motion.div
            className="shadow-card h-full rounded-2xl bg-white overflow-hidden" // ADDED rounded-2xl, bg-white, and overflow-hidden here
            whileHover={{ translateY: -5, boxShadow: "0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)" }}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <Card className="p-6 h-full"> {/* REMOVED bg-white and rounded-2xl from Card */}
                <CardContent className="space-y-4 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                        <img
                            src={FingerprintImg}
                            alt="Fingerprint Icon"
                            className="w-24 h-24 mx-auto object-contain"
                        />
                        <h3 className="text-2xl font-semibold">DMIT</h3>
                        <p className="text-muted-foreground text-md flex-grow">
                            Analyze fingerprint patterns for insights into intelligence and learning styles.
                        </p>
                    </div>
                    <Button variant="outline" className="mt-4" onClick={handleStartTest}>
                        Learn More
                    </Button>
                </CardContent>
            </Card>
        </motion.div>
    </div>
</section>

            {/* DMIT Info */}
            <section className="container py-16 md:p-16 grid md:grid-cols-2 gap-10 items-center">
                <motion.div // 3. Section Scroll-in Animation
                    className="flex justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <img
                        src={FingerprintDMIT}
                        alt="DMIT Graphic"
                        className="w-full max-w-md object-contain"
                    />
                </motion.div>
                <motion.div // 3. Section Scroll-in Animation
                    className="space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h2 className="text-5xl font-bold">What is DMIT?</h2>
                    <p className="text-muted-foreground text-md">
                        DMIT (Dermatoglyphics Multiple Intelligence Test) analyzes
                        fingerprint patterns to map learning styles, intelligence types, and
                        potential strengths.
                    </p>
                    <p className="text-muted-foreground text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis mollitia, necessitatibus obcaecati corporis, consequuntur similique non adipisci iusto sapiente excepturi ab soluta magnam, dignissimos reprehenderit placeat vitae ea reiciendis.</p>
                    <div className="flex gap-4 flex-wrap">
                        <span className="px-4 py-2 rounded-full bg-teal-light text-foreground text-md">
                            Creativity
                        </span>
                        <span className="px-4 py-2 rounded-full bg-orange-soft text-foreground text-md">
                            Learning Style
                        </span>
                        <span className="px-4 py-2 rounded-full bg-green-soft text-foreground text-md">
                            Musical / Kinesthetic Intelligence
                        </span>
                    </div>
                </motion.div>
            </section>

            {/* CTA */}
            <motion.section // 4. CTA Fade-in Animation
                className="bg-primary text-primary-foreground p-16 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Unlock Your Mind?
                </h2>
                <p className="text-muted mb-6">
                    Take a step towards self-discovery with our interactive tests.
                </p>
                <Button
                    size="lg"
                    className="shadow-button bg-secondary text-secondary-foreground"
                    onClick={handleStartTest}
                >
                    Start Your Journey
                </Button>
            </motion.section>
            <Footer />
        </div>
    );
}