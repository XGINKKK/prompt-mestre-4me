import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Sobre Nós', to: 'about' },
    { name: 'Serviços', to: 'services' },
    { name: 'Projetos', to: 'projects' },
    { name: 'Contato', to: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="absolute top-0 z-50 w-full text-white bg-transparent transition-all duration-300"
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <img 
            src="https://i.imgur.com/DUmbFoD.png" 
            alt="4ME Engenharia" 
            className="h-40 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="font-medium text-white/80 transition-colors hover:text-white cursor-pointer relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 border-white/50 text-white hover:bg-white/10 hover:text-white">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background text-foreground">
              <nav className="mt-8 grid gap-6">
                <div className="mb-4">
                  <img 
                    src="https://i.imgur.com/DUmbFoD.png" 
                    alt="4ME Engenharia" 
                    className="h-32 w-auto"
                  />
                </div>
                {navItems.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="flex items-center space-x-2 rounded-md p-2 text-lg hover:bg-accent/10 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;