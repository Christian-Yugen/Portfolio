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
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Vamos Conversar?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades, parcerias e conversas sobre inovação e transformação digital.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
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
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {method.value}
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-12 text-center border border-primary/20 mb-12">
          <h3 className="text-2xl font-bold mb-4">Pronto para colaborar?</h3>
          <p className="text-foreground/80 mb-6 max-w-lg mx-auto">
            Se você está buscando um profissional que combine expertise técnica com visão estratégica, vamos conversar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => {
                window.open("mailto:jcristianolima@yahoo.com.br");
              }}
            >
              Enviar Email
            </Button>
            <Button
              size="lg"
              variant="outline"
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
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            © 2026 José Christian Yūgen. Todos os direitos reservados. | Desenvolvido com React + Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
