"use client";
import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock, LogIn, Github, Chrome } from 'lucide-react';
import Link from "next/link"

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [particles, setParticles] = useState<
        { left: string; top: string; animationDelay: string; animationDuration: string }[]
    >([]);

    useEffect(() => {
        const generatedParticles = Array.from({ length: 15 }, () => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
        }));
        setParticles(generatedParticles);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call





        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('Login data:', formData);
        setIsLoading(false);
    };

    const handleSocialLogin = (provider: string) => {
        console.log(`Login with ${provider}`);
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
                <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse animation-delay-4000"></div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((style, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-20 animate-float"
                        style={style}
                    />
                ))}
            </div>
            <div className="relative z-10 w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-4 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-110">
                        <LogIn className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Welcome Back
                    </h1>
                    <p className="text-gray-400 text-lg">Sign in to your account</p>
                </div>

                {/* Form */}
                <div className="space-y-6">
                    <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-3xl backdrop-blur-sm">
                        {/* Email Field */}
                        <div className="relative group mb-6">
                            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-orange-500 transition-colors duration-200" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full bg-gray-700 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:bg-gray-650 focus:bg-gray-650"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="relative group mb-6">
                            <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-orange-500 transition-colors duration-200" />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:bg-gray-650 focus:bg-gray-650"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-gray-400 hover:text-orange-500 transition-colors duration-200"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between mb-8">
                            <label className="flex items-center cursor-pointer group">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleInputChange}
                                    className="sr-only"
                                />
                                <div className="relative">
                                    <div className={`w-5 h-5 rounded border-2 transition-all duration-200 ${formData.rememberMe ? 'bg-orange-500 border-orange-500' : 'border-gray-600 group-hover:border-gray-500'}`}>
                                        {formData.rememberMe && (
                                            <svg className="w-3 h-3 text-white absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                <span className="ml-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-orange-500 hover:text-orange-400 transition-colors duration-200 hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group mb-6"
                        >
                            {isLoading ? (
                                <>
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 animate-pulse"></div>
                                    <span className="relative flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Signing In...
                                    </span>
                                </>
                            ) : (
                                <>
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span className="relative">Sign In</span>
                                </>
                            )}
                        </button>

                        {/* Divider */}
                        <div className="relative mb-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-600"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
                            </div>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => handleSocialLogin('Google')}
                                className="flex items-center justify-center px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 hover:bg-gray-650 text-white transition-all duration-200 hover:border-gray-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800 group"
                            >
                                <Chrome className="w-5 h-5 mr-2 text-gray-400 group-hover:text-white transition-colors duration-200" />
                                <span className="font-medium">Google</span>
                            </button>
                            <button
                                onClick={() => handleSocialLogin('GitHub')}
                                className="flex items-center justify-center px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 hover:bg-gray-650 text-white transition-all duration-200 hover:border-gray-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800 group"
                            >
                                <Github className="w-5 h-5 mr-2 text-gray-400 group-hover:text-white transition-colors duration-200" />
                                <span className="font-medium">GitHub</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-8">
                    <p className="text-gray-400">
                        Don't have an account?{' '}
                        <Link href="/register" className="text-orange-500 hover:text-orange-400 font-semibold transition-colors duration-200 hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .hover\\:bg-gray-650:hover {
          background-color: #4a5568;
        }
        
        .focus\\:bg-gray-650:focus {
          background-color: #4a5568;
        }
        
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
        </div>
    );
}