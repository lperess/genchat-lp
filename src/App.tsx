import wppIcon from "./assets/whatsapp-icon.svg";
import arrowRight from "./assets/arrow-right.svg";
import outletPremium from "./assets/outlet-premium.png";

export default function App() {
  return (
    <>
      <div className="top-strip" />
      <div className="container">
        <img
          src={outletPremium}
          alt="Logo do shopping"
          className="shopping-logo"
        />

        <div className="text">
          <p className="title">
            Seu concierge pessoal no Outlet Premium na palma da mão.
          </p>
          <p className="subtitle">
            Informe seu WhatsApp para falar com o concierge e receber descontos
            exclusivos enquanto estiver no shopping.
          </p>
        </div>

        <div className="input-container">
          <label htmlFor="wpp-input" className="number-label">
            <p>Seu WhatsApp</p>
            <div className="input-icon">
              <img src={wppIcon} width={24} alt="Ícone do WhatsApp" />
              <input
                id="wpp-input"
                placeholder="(99) 99999-9999"
                maxLength={15}
              />
            </div>
          </label>

          <div className="checkbox-container">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms" className="checkbox-label">
              Concordo com os{" "}
              <a href="" target="_blank">
                Termos de uso
              </a>{" "}
              e a{" "}
              <a href="" target="_blank">
                Política de Privacidade
              </a>
              .
            </label>
          </div>
        </div>

        <button type="button" className="start-btn">
          <span>Começar</span>
          <img src={arrowRight} width={24} alt="Ícone do WhatsApp" />
        </button>
      </div>
    </>
  );
}
