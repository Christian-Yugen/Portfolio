import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Expertise", href: "#expertise" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f5f5f7]/85 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-full bg-black text-white flex items-center justify-center text-[11px] font-semibold">
            J
          </div>
          <div className="hidden sm:block">
            <span className="font-semibold text-sm leading-tight block">
              José Yugen
            </span>
            <span className="text-[11px] text-muted-foreground">
              Product-minded Engineering
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-black/15 bg-white text-foreground hover:bg-white/80"
            onClick={() =>
              window.open("https://github.com/Christian-Yugen", "_blank")
            }
          >
            GitHub
          </Button>
          <Button
            size="sm"
            className="bg-black text-white hover:bg-black/85"
            onClick={() =>
              window.open("https://linkedin.com/in/joseyugen", "_blank")
            }
          >
            LinkedIn
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md border border-black/10 bg-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-black/10 bg-[#f5f5f7]/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-4 border-t border-black/10">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-black/15 bg-white text-foreground hover:bg-white/80"
                onClick={() => {
                  window.open("https://github.com/Christian-Yugen", "_blank");
                  setIsOpen(false);
                }}
              >
                GitHub
              </Button>
              <Button
                size="sm"
                className="flex-1 bg-black text-white hover:bg-black/85"
                onClick={() => {
                  window.open("https://linkedin.com/in/joseyugen", "_blank");
                  setIsOpen(false);
                }}
              >
                LinkedIn
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
