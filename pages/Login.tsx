
import React from 'react';
import { Lock, Mail, BarChart3, ShieldCheck } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

const Login: React.FC = () => {
    const { login } = useAppContext();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form validation and API calls
        login();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-dark-primary p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <BarChart3 className="mx-auto h-12 w-12 text-brand-blue" />
                    <h1 className="text-3xl font-bold text-white mt-4">Titan Trader Pro</h1>
                    <p className="text-gray-400 mt-2">High-Frequency Trading at Your Fingertips</p>
                </div>

                <div className="bg-dark-secondary shadow-2xl rounded-2xl p-8 space-y-6">
                    <button
                        onClick={login}
                        className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-blue hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-dark-secondary transition-all"
                    >
                         <svg className="w-5 h-5 mr-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google</title><path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.02-2.6 1.98-4.66 1.98-3.57 0-6.47-2.9-6.47-6.47s2.9-6.47 6.47-6.47c1.98 0 3.28.79 4.1 1.62l2.57-2.57C18.16 1.99 15.61 1 12.48 1 7.02 1 3 5.02 3 9.5s4.02 8.5 9.48 8.5c2.9 0 5.28-1 7.02-2.66 1.84-1.84 2.57-4.48 2.57-6.89 0-.57-.05-.98-.15-1.48H12.48z"/></svg>
                        Continue with Google
                    </button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-dark-accent" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-dark-secondary text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none block w-full pl-10 pr-3 py-3 border border-dark-accent rounded-md placeholder-gray-500 text-white bg-dark-primary focus:outline-none focus:ring-brand-blue focus:border-brand-blue sm:text-sm" placeholder="Email address" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none block w-full pl-10 pr-3 py-3 border border-dark-accent rounded-md placeholder-gray-500 text-white bg-dark-primary focus:outline-none focus:ring-brand-blue focus:border-brand-blue sm:text-sm" placeholder="Password" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-brand-blue bg-dark-primary border-dark-accent rounded focus:ring-brand-blue" />
                                <label htmlFor="remember-me" className="ml-2 block text-gray-400">Remember me</label>
                            </div>
                            <a href="#" className="font-medium text-brand-blue hover:text-blue-500">Forgot your password?</a>
                        </div>

                        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-dark-secondary transition-all">
                            Sign in
                        </button>
                    </form>
                </div>
                 <p className="mt-6 text-center text-xs text-gray-500 flex items-center justify-center">
                    <ShieldCheck size={14} className="mr-1.5"/> Secure Authentication
                </p>
            </div>
        </div>
    );
};

export default Login;
