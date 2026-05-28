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
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground">
            JY
          </div>
          <span className="font-bold text-lg hidden sm:inline">José Yugen</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:flex gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              window.open("https://github.com/Christian-Yugen", "_blank")
            }
          >
            GitHub
          </Button>
          <Button
            size="sm"
            onClick={() =>
              window.open("https://linkedin.com/in/joseyugen", "_blank")
            }
          >
            LinkedIn
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-4 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => {
                  window.open("https://github.com/Christian-Yugen", "_blank");
                  setIsOpen(false);
                }}
              >
                GitHub
              </Button>
              <Button
                size="sm"
                className="flex-1"
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
