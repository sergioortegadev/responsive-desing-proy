import Figure from "./Figure";
import "./Conferences.css";

const conferen = [
  {
    avatar: "./assets/vela.jpg",
    title: "Conocimiento práctico de alto impacto para la logística de latinoamérica al mundo",
    name: "Verónica Velázquez",
    subtitle: "Analista Senior de Insights para América Latina, Natura & Co. México",
  },
  {
    avatar: "./assets/wang.png",
    title: "Más conocimiento práctico de alto impacto para la logística de latinoamérica al mundo",
    name: "Juan Carlos Velazco",
    subtitle: "Analista Senior de Insights para América Latina, Natura & Co. México",
  },
  {
    avatar: "./assets/peter.jpg",
    title: "Otros conocimientos prácticos de alto impacto para la logística de latinoamérica al mundo",
    name: "Peter Smith",
    subtitle: "Lider técnico de Insights para América Latina, Natura & Co. México",
  },
  {
    avatar: "./assets/leila.jpg",
    title: "Distintos conocimiento prácticos de alto impacto para la logística de latinoamérica al mundo",
    name: "Leila Rodriguez",
    subtitle: "Desarrolladora de Insights para América Latina, Natura & Co. México",
  },
  {
    avatar: "./assets/wang.png",
    title: "Conocimiento práctico de alto impacto para la logística de latinoamérica al mundo",
    name: "Mario Perrone",
    subtitle: "Jefe de servicio tech para América Latina, Natura & Co. México",
  },
  {
    avatar: "./assets/vela.jpg",
    title: "Conocimiento práctico de alto impacto para la logística de latinoamérica al mundo",
    name: "Adriana Gomez",
    subtitle: "Gerencia de estrategias en América Latina, Natura & Co. México",
  },
];

const Conferences = () => {
  return (
    <div className="conf">
      <div className="conf-title">
        <div className="conf-first-title">
          <h3>Conferencias con speakers internacionales en</h3>
          <h2>EL SUMMIT 2024</h2>
        </div>
        <div className="conf-patro">
          <p>PATROCINADO POR</p>
          <img src="./assets/pmsteele.png" alt="PM STEELE" />
        </div>
      </div>
      <div className="cards">
        {conferen.map((el, index) => {
          return <Figure key={index} avatar={el.avatar} title={el.title} name={el.name} subtitle={el.subtitle} />;
        })}
      </div>
    </div>
  );
};

export default Conferences;
