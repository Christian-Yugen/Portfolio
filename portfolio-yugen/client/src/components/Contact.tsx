import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "jcristianolima@yahoo.com.br",
      href: "mailto:jcristianolima@yahoo.com.br",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "(67) 9 8194-0075",
      href: "https://wa.me/5567981940075",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Três Lagoas, MS - Brasil",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/joseyugen",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Christian-Yugen",
      color: "hover:text-gray-800",
    },
  ];

  return (
    <section id="contato" className="py-24 bg-[#f5f5f7]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="bg-linear-to-r from-[#dff9ff] via-[#91c8ec] to-[#527ca3] bg-clip-text text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-transparent mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Disponivel para projetos estrategicos, consultoria e colaboracoes em
            tecnologia, analytics e melhoria continua.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card
                key={index}
                className="text-center border border-black/8 bg-white shadow-sm hover:shadow-lg transition-all rounded-3xl"
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="text-primary" size={24} />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{method.label}</h3>
                  <a
                    href={method.href}
                    className="text-primary hover:underline text-sm break-all"
                    target={
                      method.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      method.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {method.value}
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-[#0b0b0d] rounded-4xl p-12 text-center border border-white/10 mb-12 shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Pronto para o proximo ciclo de resultados?
          </h3>
          <p className="text-white/75 mb-6 max-w-2xl mx-auto">
            Se sua equipe precisa de execucao tecnica com foco de negocio,
            podemos desenhar juntos um plano de entrega orientado a impacto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="shadow-sm hover:shadow-md bg-white text-black hover:bg-white/90"
              onClick={() => {
                window.open("mailto:jcristianolima@yahoo.com.br");
              }}
            >
              Enviar Email
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/35 text-white bg-transparent hover:bg-white/10"
              onClick={() => {
                window.open("https://linkedin.com/in/joseyugen", "_blank");
              }}
            >
              Conectar no LinkedIn
            </Button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 transition-colors ${social.color}`}
                aria-label={social.label}
              >
                <Icon size={32} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border mt-16 pt-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground/90">
          <p>
            © 2026 José Christian Yūgen. Todos os direitos reservados. |
            Desenvolvido com React + Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
