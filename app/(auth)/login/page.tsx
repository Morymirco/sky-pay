'use client';

import { LoginForm } from '../../components/forms/login-form';
import { Header } from '../../components/layout/header';
import { Footer } from '../../components/layout/footer';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const handleLogin = async (data: { email: string; password: string }) => {
    // TODO: Implémenter la logique d'authentification
    console.log('Tentative de connexion:', data);
    
    // Simulation d'une requête API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Redirection vers le dashboard après connexion réussie
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <LoginForm onSubmit={handleLogin} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 