"use client";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  Variants,
} from "framer-motion";

// ✅ Importamos los iconos desde react-icons/lu.
import { LuMenu, LuX, LuMapPin } from "react-icons/lu";
import { IconType } from "react-icons"; // 💡 Importamos el tipo IconType para los iconos.

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { Button } from "@/components/ui/button";

// --- Data Configuration ---
// 💡 Actualizamos los tipos para usar IconType.
interface NavLink {
  href: string;
  label: string;
}

interface SocialLink {
  href: string;
  label: string;
  Icon: IconType;
}

interface ContactInfoItemProps {
  text: string;
  href: string;
  Icon: IconType;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

const socialLinks: SocialLink[] = [
  { href: "https://facebook.com", label: "Facebook", Icon: FaFacebook },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: FaLinkedin },
  { href: "https://youtube.com", label: "YouTube", Icon: FaYoutube },
];

const contactInfo: ContactInfoItemProps[] = [
  {
    text: "laboratorio@geofal.com.pe",
    href: "mailto:laboratorio@geofal.com.pe",
    Icon: MdOutgoingMail,
  },
  { text: "(+51) 981 696 426", href: "tel:+51981696426", Icon: FaWhatsapp },
  {
    text: "Av. Rio Marañon N° 763, Los Olivos",
    href: "https://maps.google.com/?q=Av.+Rio+Marañon+N°+763,+Los+Olivos,+Perú",
    Icon: LuMapPin,
  },
];

// --- Sub-Components ---
const ContactInfoItem = ({ text, href, Icon }: ContactInfoItemProps) => (
  <a
    href={href}
    className="flex items-center gap-2 text-xs text-white transition-opacity hover:opacity-80"
  >
    <Icon className="h-4 w-4" />
    <span>{text}</span>
  </a>
);

const SocialLinks = ({ className = "text-white" }: { className?: string }) => (
  <div className="flex items-center gap-4">
    {socialLinks.map(({ href, label, Icon }) => (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`transition-opacity hover:opacity-80 ${className}`}
      >
        <Icon className="h-5 w-5" />
      </a>
    ))}
  </div>
);

const TopBar = () => (
  <div className="hidden bg-[#2c3e50] text-white md:block">
    <div className="container mx-auto flex h-10 items-center justify-between px-4">
      <div className="flex items-center gap-6">
        {contactInfo.map((item) => (
          <ContactInfoItem key={item.text} {...item} />
        ))}
      </div>
      <SocialLinks />
    </div>
  </div>
);

const DesktopMenu = ({
  pathname,
  hoverVariants,
}: {
  pathname: string;
  hoverVariants: Variants;
}) => (
  <nav className="hidden items-center md:flex">
    {navLinks.map((link) => (
      <motion.div
        key={link.href}
        initial="initial"
        whileHover="hover"
        variants={hoverVariants}
      >
        <Link
          href={link.href}
          className={`relative px-4 py-2 font-medium text-gray-700 transition-colors duration-300 ${
            pathname === link.href
              ? "font-bold text-[#373737]"
              : "hover:text-[#737373]"
          }`}
        >
          {link.label}
          {pathname === link.href && (
            <motion.span
              layoutId="nav-underline"
              className="absolute bottom-0 left-0 h-0.5 w-full bg-[#373737]"
              transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
            />
          )}
        </Link>
      </motion.div>
    ))}
  </nav>
);

const MobileMenuButton = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => (
  <motion.button
    className="z-[100] rounded-md p-2 text-[#373737] transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-[#373737] md:hidden "
    onClick={toggle}
    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
    whileTap={{ scale: 0.9 }}
  >
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={isOpen ? "x" : "menu"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isOpen ? <LuX className="h-7 w-7" /> : <LuMenu className="h-7 w-7" />}
      </motion.div>
    </AnimatePresence>
  </motion.button>
);

// --- Main Navbar Component ---

const Navbar = () => {
  const pathname = usePathname() || "";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (mobileMenuOpen) return;
    const isAtTop = latest < 50;
    const isScrollingUp = latest < prevScrollY;
    setIsVisible(isAtTop || isScrollingUp);
    setPrevScrollY(latest);
  });

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  // --- Framer Motion Variants ---
  const navbarVariants: Variants = {
    visible: {
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
    hidden: { y: "-100%", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const mobileMenuContainerVariants: Variants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },
    closed: {
      x: "100%",
      transition: { duration: 0.3, ease: "easeInOut", when: "afterChildren" },
    },
  };

  const mobileMenuItemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const linkHoverVariants: Variants = {
    hover: { scale: 1.05 },
    initial: { scale: 1 },
  };

  const overlayVariants: Variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm backdrop-blur-md"
        variants={navbarVariants}
        animate={isVisible ? "visible" : "hidden"}
        initial="visible"
      >
        <TopBar />
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/logo.svg"
                alt="Logo de la empresa"
                width={100}
                height={48}
                className="h-12 w-auto md:h-15"
              />
            </motion.div>
          </Link>

          {/* Menú de escritorio en el centro */}
          <DesktopMenu pathname={pathname} hoverVariants={linkHoverVariants} />

          {/* Nuevo botón "Cotiza" a la derecha */}
          <div className="hidden md:flex items-center">
            <Link href="/cotiza">
              <Button
                size="lg"
                className="bg-[#2c3e50] hover:bg-[#373737] text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
              >
                ¡COTIZAR AHORA!
              </Button>
            </Link>
          </div>

          {/* Botón para abrir el menú móvil */}
          <MobileMenuButton
            isOpen={mobileMenuOpen}
            toggle={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </motion.header>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              variants={mobileMenuContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 z-50 flex h-full w-4/5 max-w-sm flex-col bg-white shadow-xl"
            >
              <div className="flex items-center justify-between border-b p-4">
                <span className="font-bold text-[#373737]">Menú</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Cerrar menú"
                  className="rounded-md p-1 text-[#373737] transition-colors hover:bg-gray-100 hover:text-[#373737]"
                >
                  <LuX className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex-grow space-y-2 overflow-y-auto p-4">
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={mobileMenuItemVariants}>
                    <Link
                      href={link.href}
                      className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                        pathname === link.href
                          ? "bg-gray-300 text-black"
                          : "text-[#373737] hover:bg-gray-100"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="space-y-4 border-t p-4 pb-20 text-sm">
                {/* Nuevo botón de cotización en el menú móvil */}
                <motion.div
                  variants={mobileMenuItemVariants}
                  className="w-full"
                >
                  <Link href="/cotiza">
                    <Button
                      size="lg"
                      className="w-full bg-[#2c3e50] hover:bg-[#373737] text-white font-semibold rounded-lg shadow-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      ¡COTIZAR AHORA!
                    </Button>
                  </Link>
                </motion.div>
                <div className="space-y-3">
                  {contactInfo.map((item) => (
                    <a
                      key={item.text}
                      href={item.href}
                      className="flex items-center gap-3 text-[#373737] transition-colors hover:text-red-600"
                    >
                      <item.Icon className="h-4 w-4 flex-shrink-0" />
                      <span>{item.text}</span>
                    </a>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <SocialLinks className="text-[#373737]" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
