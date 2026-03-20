import { useLang } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const { t } = useLang();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(168 72% 40% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(168 72% 40% / 0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center section-container">
        <p className="animate-reveal font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6">
          {t("Researcher & Professor", "Pesquisador & Professor")}
        </p>

        <h1
          className="animate-reveal-delay-1 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-foreground"
          style={{ textWrap: "balance" }}
        >
          Renan Akira
          <br />
          <span className="text-gradient">N G Escribano</span>
        </h1>

        <p className="animate-reveal-delay-2 mt-6 text-base md:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
          {t(
            "Exploring Machine Learning, Explainable AI and Computational Intelligence.",
            "Explorando Machine Learning, IA Explicável e Inteligência Computacional."
          )}
        </p>

        <a
          href="#about"
          className="animate-reveal-delay-3 inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition-all duration-200 active:scale-[0.97]"
        >
          {t("Learn More", "Saiba Mais")}
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-reveal-delay-3">
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
