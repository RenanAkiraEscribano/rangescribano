import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Github, Linkedin, Mail, ExternalLink, GraduationCap, BookOpen } from "lucide-react";

const socialLinks = [
  { label: "Lattes", href: "#", icon: GraduationCap },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Google Scholar", href: "#", icon: BookOpen },
  { label: "GitHub", href: "#", icon: Github },
  { label: "E-mail", href: "mailto:email@example.com", icon: Mail },
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
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-secondary border border-border overflow-hidden flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-mono">
                  {t("Photo", "Foto")}
                </span>
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
                  "Researcher and Professor in Computer Science",
                  "Pesquisador e Professor em Ciência da Computação"
                )}
              </h2>

              <div className="space-y-3 text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  {t(
                    "Renan Akira N G Escribano is a researcher and professor focused on Machine Learning, Explainable Artificial Intelligence, and Computational Intelligence. His work explores the intersection of data-driven methods and interpretable models for real-world applications.",
                    "Renan Akira N G Escribano é pesquisador e professor com foco em Machine Learning, Inteligência Artificial Explicável e Inteligência Computacional. Seu trabalho explora a intersecção entre métodos orientados a dados e modelos interpretáveis para aplicações no mundo real."
                  )}
                </p>
                <p>
                  {t(
                    "With experience in time series analysis, concept drift detection, and data science, he collaborates with research laboratories and contributes to advancing the field through publications and academic partnerships.",
                    "Com experiência em análise de séries temporais, detecção de concept drift e ciência de dados, colabora com laboratórios de pesquisa e contribui para o avanço da área por meio de publicações e parcerias acadêmicas."
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
