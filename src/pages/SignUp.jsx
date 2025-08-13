import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const SignUp = () => {
  return (
    <section className="min-h-screen bg-gradient-soft flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8"
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-foreground font-heading mb-2">
          Create Your <span className="text-teal-primary">Account</span>
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          Join us and start your wellness journey today.
        </p>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-xl border border-border/40 focus:outline-none focus:border-teal-primary focus:ring-2 focus:ring-teal-primary/40 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-border/40 focus:outline-none focus:border-teal-primary focus:ring-2 focus:ring-teal-primary/40 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl border border-border/40 focus:outline-none focus:border-teal-primary focus:ring-2 focus:ring-teal-primary/40 transition"
            />
          </div>

          {/* CTA */}
          <Button
            variant="hero"
            size="lg"
            className="w-full rounded-xl"
            type="submit"
          >
            Sign Up
          </Button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-teal-primary font-medium hover:underline">
            Log In
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default SignUp;
