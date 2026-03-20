import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Github, Linkedin, Mail, ExternalLink, GraduationCap, BookOpen } from "lucide-react";
import photo from "@/assets/eu.png";

const socialLinks = [
  { label: "Lattes", href: "https://lattes.cnpq.br/2902920151256978", icon: GraduationCap },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rangescribano/", icon: Linkedin },
  { label: "Google Scholar", href: "https://scholar.google.com.br/citations?hl=pt-BR&user=k655vc0AAAAJ", icon: BookOpen },
  { label: "GitHub", href: "https://github.com/RenanAkiraEscribano", icon: Github },
  { label: "E-mail", href: "mailto:renan.akira@ufpr.br", icon: Mail },
];

const About = () => {
  const { t } = useLang();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32">
      <div ref={ref} className="section-container">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ filter: isVisible ? "blur(0)" : "blur(4px)", transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}>

          {/* Section label */}
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-primary mb-3">
            {t("About", "Sobre")}
          </p>
          <div className="glow-line mb-12 max-w-xs" />

          <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
            {/* Photo */}
            <div className="flex flex-col items-center md:items-start gap-6">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-secondary border border-border overflow-hidden">
                <img
                  src={photo}
                  alt="Renan Akira N. G. Escribano"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Social links */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1.5 px-3 py-2 rounded-md bg-secondary border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200 active:scale-95"
                    title={link.label}
                  >
                    <link.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                    <span className="hidden sm:inline text-xs">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Bio text */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight" style={{ textWrap: "balance" }}>
                {t(
                  "Researcher and Substitute Professor in Computer Science",
                  "Pesquisador e Professor substituto em Ciência da Computação"
                )}
              </h2>

              <div className="space-y-3 text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  {t(
                    "Ph.D. candidate in Computer Science at UFPR and Substitute Professor at the Federal University of Paraná – Palotina Sector. Holds an M.Sc. in Computer Science (2026) and a Teaching Degree in Computer Science (Licenciatura) from UFPR.",
                    "Doutorando em Informática pela UFPR e professor substituto na Universidade Federal do Paraná – Setor Palotina. Possui mestrado em Informática (2026) e graduação em Licenciatura em Computação pela UFPR."
                  )}
                </p>

                <p>
                  {t(
                    "Research focuses on Machine Learning, Explainable Artificial Intelligence, and Time Series Classification, with emphasis on fault detection in chemical processes, and interpretable models for real-world applications.",
                    "A pesquisa concentra-se em Aprendizado de Máquina, Inteligência Artificial Explicável e Classificação de Séries Temporais, com ênfase em detecção de falhas em processos químicos e modelos interpretáveis para aplicações do mundo real."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
