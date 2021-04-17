import { useTranslation } from "react-i18next";
import RightArrow from "../../rightArrow.svg";
import "./index.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="item select-container select-border-bottom ">
        <select style={{ width: "125px" }}>
          <option value="" className="hidden">
            {t("Acheter")}
          </option>
          <option value="2">2</option>
        </select>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div className="item select-container select-border-bottom ">
        <select style={{ width: "220px" }}>
          <option className="hidden" value="">
            {t("Ville, code postal, region...")}
          </option>
          <option value="2">2</option>
        </select>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div className="item input-container">
        <input placeholder={t("Prix minimum")} style={{ width: "120px" }} />
        <span>€</span>
      </div>
      <div className="item input-container">
        <input className="input-md" placeholder={t("Prix maximum")} />
        <span>€</span>
      </div>
      <div className="item input-container">
        <input className="input-md" placeholder={t("Surface minimum")} />
        <span>
          <span>m</span>
          <sup>2</sup>
        </span>
      </div>
      <button className="item button-md button-black-outline">
        {t("RECHERCHER")}
        <i class="fas fa-arrow-right ml-8"></i>
      </button>
      <div className="item input-container">
        <input className="input-md" placeholder={t("Preciser ma recherche")} />
        <i class="fas fa-plus-circle ml-8"></i>
      </div>
    </footer>
  );
}

export default Footer;
