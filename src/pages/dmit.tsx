// src/pages/dmit.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Brain, Fingerprint, BarChart } from "lucide-react";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
            {/* Hero Section */}
            <section className="container p-16 flex flex-col md:flex-row items-center justify-evenly">
                {/* Text */}
                <div className="flex-1 space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight ">
                        Discover Your 
                        <div className="h-4"/>
                        <span className="text-primary border-r-4 ">{displayText}</span>
                    </h1>

                    <p className="text-muted-foreground max-w-lg">
                        Explore Aptitude, IQ, and Dermatoglyphics Multiple Intelligence Test
                        (DMIT) to understand your strengths, learning styles, and hidden
                        potential.
                    </p>
                    <div className="flex gap-4">
                        <Button size="lg" className="shadow-button text-md">
                            Take a Test Now
                        </Button>
                        <Button size="lg" variant="outline" className="text-md">
                            Learn More
                        </Button>
                    </div>
                </div>

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
            <section className="container p-16 text-center">
                <h2 className="text-3xl font-bold mb-10">Choose Your Test</h2>
                <div className="grid md:grid-cols-3 gap-10">
                    <Card className="shadow-card p-6">
                        <CardContent className="space-y-4">
                            <BarChart className="w-12 h-12 text-teal-primary mx-auto" />
                            <h3 className="text-xl font-semibold">Aptitude Test</h3>
                            <p className="text-muted-foreground text-sm">
                                Measure problem-solving, logical reasoning, and analytical
                                skills.
                            </p>
                            <Button className="mt-4 shadow-button">Start Test</Button>
                        </CardContent>
                    </Card>

                    <Card className="shadow-card p-6">
                        <CardContent className="space-y-4">
                            <Brain className="w-12 h-12 text-orange-soft mx-auto" />
                            <h3 className="text-xl font-semibold">IQ Test</h3>
                            <p className="text-muted-foreground text-sm">
                                Understand your intelligence quotient with puzzles & tasks.
                            </p>
                            <Button className="mt-4 shadow-button">Start Test</Button>
                        </CardContent>
                    </Card>

                    <Card className="shadow-card p-6">
                        <CardContent className="space-y-4">
                            <Fingerprint className="w-12 h-12 text-green-soft mx-auto" />
                            <h3 className="text-xl font-semibold">DMIT</h3>
                            <p className="text-muted-foreground text-sm">
                                Analyze fingerprint patterns for insights into intelligence and
                                learning styles.
                            </p>
                            <Button variant="outline" className="mt-4">
                                Learn More
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* DMIT Info */}
            <section className="container py-16 grid md:grid-cols-2 gap-10 items-center">
                <div className="flex justify-center">
                    <Fingerprint className="w-48 h-48 text-primary" />
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">What is DMIT?</h2>
                    <p className="text-muted-foreground">
                        DMIT (Dermatoglyphics Multiple Intelligence Test) analyzes
                        fingerprint patterns to map learning styles, intelligence types, and
                        potential strengths.
                    </p>
                    <div className="flex gap-3 flex-wrap">
                        <span className="px-4 py-2 rounded-full bg-teal-light text-foreground text-sm">
                            Creativity
                        </span>
                        <span className="px-4 py-2 rounded-full bg-orange-soft text-foreground text-sm">
                            Learning Style
                        </span>
                        <span className="px-4 py-2 rounded-full bg-green-soft text-foreground text-sm">
                            Musical / Kinesthetic Intelligence
                        </span>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary text-primary-foreground py-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Unlock Your Mind?
                </h2>
                <p className="text-muted mb-6">
                    Take a step towards self-discovery with our interactive tests.
                </p>
                <Button
                    size="lg"
                    className="shadow-button bg-secondary text-secondary-foreground"
                >
                    Start Your Journey
                </Button>
            </section>
            <Footer />
        </div>
    );
}
