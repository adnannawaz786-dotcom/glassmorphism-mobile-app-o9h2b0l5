import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { HomeIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { HomeIcon as HomeIconSolid, BookOpenIcon as BookOpenIconSolid } from '@heroicons/react/24/solid';

const BottomNavigation = () => {
  const router = useRouter();

  const navItems = [
    {
      name: 'Home',
      href: '/',
      icon: HomeIcon,
      activeIcon: HomeIconSolid,
    },
    {
      name: 'Library',
      href: '/library',
      icon: BookOpenIcon,
      activeIcon: BookOpenIconSolid,
    },
  ];

  const isActive = (href) => {
    if (href === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(href);
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-t border-white/20 safe-area-pb"
      style={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className="flex items-center justify-around px-4 py-2 max-w-md mx-auto">
        {navItems.map((item, index) => {
          const active = isActive(item.href);
          const Icon = active ? item.activeIcon : item.icon;

          return (
            <Link key={item.name} href={item.href}>
              <motion.div
                className={`flex flex-col items-center justify-center p-3 rounded-2xl min-w-[60px] transition-all duration-200 ${
                  active
                    ? 'bg-white/20 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                initial={false}
                animate={{
                  backgroundColor: active ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0)',
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{
                    scale: active ? 1.1 : 1,
                    rotateY: active ? 360 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-6 h-6 mb-1" />
                </motion.div>
                <span
                  className={`text-xs font-medium transition-all duration-200 ${
                    active ? 'text-white' : 'text-white/70'
                  }`}
                >
                  {item.name}
                </span>
                {active && (
                  <motion.div
                    className="absolute -bottom-1 w-1 h-1 bg-white rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>
      
      {/* Glassmorphism gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Safe area padding for devices with home indicator */}
      <div className="h-safe-area-inset-bottom" />
    </motion.nav>
  );
};

export default BottomNavigation;