import { useLang } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer id="footer" className="border-t border-border py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-end">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-primary mb-3">
              {t("Contact", "Contato")}
            </p>
            <div className="text-sm text-muted-foreground leading-relaxed max-w-sm space-y-2">
              <p>
                {t(
                  "Federal University of Paraná – Palotina Sector",
                  "Universidade Federal do Paraná – Setor Palotina"
                )}
              </p>

              <p>
                {t(
                  "Department of Engineering and Exact Sciences",
                  "Departamento de Engenharias e Exatas"
                )}
              </p>

              <p>
                {t(
                  "Rua Pioneira, 2153",
                  "Rua Pioneira, 2153"
                )}
                <br />
                {t(
                  "Palotina, Paraná, Brazil",
                  "Palotina, Paraná, Brasil"
                )}
              </p>

              <p>
                <a
                  href="tel:+554436421000"
                  className="hover:text-foreground transition-colors"
                >
                  +55 (41) 9 9502-8347
                </a>
              </p>

              <p>
                <a
                  href="mailto:renan.akira@ufpr.br"
                  className="hover:text-foreground transition-colors"
                >
                  renan.akira@ufpr.br
                </a>
              </p>
            </div>
          </div>

          <div className="md:text-right">
            <p className="text-sm text-foreground font-medium">
              Renan Akira N G Escribano
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © {new Date().getFullYear()} · {t("All rights reserved", "Todos os direitos reservados")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
