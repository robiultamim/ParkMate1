import parkMateLogo from 'figma:asset/2033dbea788744340314de571fe1a711201ff66a.png';

interface ParkMateLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'compact' | 'icon-only';
  className?: string;
  animated?: boolean;
}

export function ParkMateLogo({ 
  size = 'md', 
  variant = 'full', 
  className = '', 
  animated = false 
}: ParkMateLogoProps) {
  const getSizeClasses = () => {
    switch (size) {
      case 'xs': return 'w-6 h-6';
      case 'sm': return 'w-8 h-8';
      case 'md': return 'w-12 h-12';
      case 'lg': return 'w-16 h-16';
      case 'xl': return 'w-24 h-24';
      default: return 'w-12 h-12';
    }
  };

  const getTextSize = () => {
    switch (size) {
      case 'xs': return 'text-xs';
      case 'sm': return 'text-sm';
      case 'md': return 'text-base';
      case 'lg': return 'text-xl';
      case 'xl': return 'text-2xl';
      default: return 'text-base';
    }
  };

  if (variant === 'icon-only') {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <img
          src={parkMateLogo}
          alt="ParkMate"
          className={`${getSizeClasses()} ${animated ? 'animate-float' : ''} object-contain`}
        />
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <img
          src={parkMateLogo}
          alt="ParkMate"
          className={`${getSizeClasses()} ${animated ? 'animate-float' : ''} object-contain`}
        />
        <div className="flex flex-col">
          <span className={`font-bold text-gray-900 ${getTextSize()} leading-none`}>
            PARKMATE
          </span>
          {size !== 'xs' && size !== 'sm' && (
            <span className="text-xs text-gray-600 font-medium tracking-wide">
              TAP PARK GO.
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <img
        src={parkMateLogo}
        alt="ParkMate"
        className={`${getSizeClasses()} ${animated ? 'animate-float' : ''} object-contain drop-shadow-lg`}
      />
      <div className="flex flex-col">
        <h1 className={`font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${getTextSize()} leading-none`}>
          PARKMATE
        </h1>
        <p className="text-sm text-gray-600 font-medium tracking-wide">
          TAP PARK GO.
        </p>
      </div>
    </div>
  );
}

// Animated loading version for transitions
export function ParkMateLoadingLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className="relative">
        <img
          src={parkMateLogo}
          alt="ParkMate"
          className="w-20 h-20 animate-bounce-gentle object-contain drop-shadow-xl"
        />
        <div className="absolute inset-0 w-20 h-20 border-4 border-blue-200 rounded-full animate-pulse"></div>
      </div>
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          PARKMATE
        </h2>
        <p className="text-sm text-gray-600 font-medium tracking-wider">
          TAP PARK GO.
        </p>
      </div>
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
}