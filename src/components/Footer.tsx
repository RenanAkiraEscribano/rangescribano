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
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              {t(
                "Federal University of Paraná – Palotina Sector, Rua Pioneira, 2153. Department of Engineering and Exact Sciences. Palotina, Paraná, Brazil",
                "Universidade Federal do Paraná – Setor Palotina, Rua Pioneira, 2153. Departamento de Engenharias e Exatas. Palotina, Paraná, Brasil"
              )}
            </p>
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
