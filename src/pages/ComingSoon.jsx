import { Construction } from 'lucide-react';

const ComingSoon = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-primary to-blue-deep rounded-full mb-6">
                    <Construction className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-secondary-900 mb-3">Working On it!</h1>
                <p className="text-lg text-secondary-500 mb-8 max-w-md mx-auto">
                    This feature is currently under development. Check back soon for updates!
                </p>
                <div className="flex gap-3 justify-center">
                    <div className="w-3 h-3 bg-blue-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-3 h-3 bg-blue-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-3 h-3 bg-blue-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
