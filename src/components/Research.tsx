import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ExternalLink } from "lucide-react";

const topics = [
  "Machine Learning",
  "Time Series",
  "Explainable AI",
  "Concept Drift",
  "Data Science",
  "Computational Intelligence",
];

const publications = [
  {
    title: "Publication Title Placeholder 1",
    authors: "Escribano, R. A. N. G. et al.",
    year: "2024",
    venue: "Journal / Conference Name",
    link: "#",
  },
  {
    title: "Publication Title Placeholder 2",
    authors: "Escribano, R. A. N. G. et al.",
    year: "2023",
    venue: "Journal / Conference Name",
    link: "#",
  },
  {
    title: "Publication Title Placeholder 3",
    authors: "Escribano, R. A. N. G. et al.",
    year: "2023",
    venue: "Journal / Conference Name",
    link: "#",
  },
];

const labs = [
  { name: "LABMATER", url: "#" },
  { name: "DSBD", url: "#" },
];

const Research = () => {
  const { t } = useLang();
  const { ref: topicsRef, isVisible: topicsVisible } = useScrollReveal();
  const { ref: pubRef, isVisible: pubVisible } = useScrollReveal();
  const { ref: labRef, isVisible: labVisible } = useScrollReveal();

  const revealStyle = (visible: boolean) => ({
    filter: visible ? "blur(0)" : "blur(4px)",
    transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
  });

  return (
    <section id="research" className="py-24 md:py-32">
      <div className="section-container">
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-primary mb-3">
          {t("Research", "Pesquisa")}
        </p>
        <div className="glow-line mb-16 max-w-xs" />

        {/* Topics */}
        <div
          ref={topicsRef}
          className={`mb-20 transition-all duration-700 ${topicsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={revealStyle(topicsVisible)}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            {t("Topics of Interest", "Tópicos de Interesse")}
          </h3>
          <div className="flex flex-wrap gap-3">
            {topics.map((topic, i) => (
              <span
                key={topic}
                className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm text-secondary-foreground font-medium hover:border-primary/40 hover:text-foreground transition-all duration-200 cursor-default"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div
          ref={pubRef}
          className={`mb-20 transition-all duration-700 ${pubVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={revealStyle(pubVisible)}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            {t("Publications", "Publicações")}
          </h3>
          <div className="space-y-4">
            {publications.map((pub, i) => (
              <a
                key={i}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block card-surface p-5 hover:border-primary/30 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {pub.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {pub.authors}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 font-mono">
                      {pub.venue} · {pub.year}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Partner Labs */}
        <div
          ref={labRef}
          className={`transition-all duration-700 ${labVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={revealStyle(labVisible)}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            {t("Partner Laboratories", "Laboratórios Parceiros")}
          </h3>
          <div className="flex flex-wrap gap-6">
            {labs.map((lab) => (
              <a
                key={lab.name}
                href={lab.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-surface px-8 py-6 flex items-center justify-center hover:border-primary/30 transition-all duration-200 min-w-[160px]"
              >
                <span className="font-mono text-lg font-semibold text-muted-foreground group-hover:text-primary transition-colors tracking-wide">
                  {lab.name}
                </span>
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 font-mono">
            {t("Replace with laboratory logos", "Substitua pelas logos dos laboratórios")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Research;
