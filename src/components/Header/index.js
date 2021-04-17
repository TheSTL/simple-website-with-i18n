import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./index.css";

function Header() {
  const { t, i18n } = useTranslation();
  const onChangeLanguage = useCallback((e) => {
    i18n.changeLanguage(e.target.value);
  });
  useEffect(() => {
    i18n.changeLanguage("fr");
  }, []);

  return (
    <header className="header">
      <div className="mobile-screen mt-8">
        <i class="fas fa-bars"></i>
      </div>
      <div className="sub-header sub-header-left big-screen">
        <span className="h-40"> {t("ACHETER")} </span>
        <span className="h-40"> {t("VENDRE")} </span>
        <span className="h-40"> {t("LOUER")} </span>
        <span className="h-40"> {t("L'AGENCE")} </span>
      </div>
      <div className="sub-middle">
        <span className="main"> {t("KRETZ")} </span>
        <span className="sub-main"> {t("FAMILY REAL ESTATE")} </span>
      </div>
      <div className="sub-header big-screen">
        <div className="input-container mr-16">
          <i class="fas fa-bell"></i>
          <input className="input-md" placeholder={t("Creer une alerte")} />
        </div>
        <div className="input-container mr-16">
          <i class="fas fa-search"></i>
          <input className="input-md" placeholder={t("REFERENCE")} />
        </div>
        <div className="select-container">
          <select
            onChange={onChangeLanguage}
            defaultValue="fr"
            style={{ width: "40px" }}
          >
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
      <div className="mobile-screen mt-8">
        <i class="fas fa-bell mr-16"></i>
        <i class="fas fa-search"></i>
      </div>
    </header>
  );
}

export default Header;
