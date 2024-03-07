const FigureConf = ({ avatar, title, name, subtitle }) => {
  console.log(avatar);
  return (
    <figure>
      <img src={avatar} alt={name} />
      <div className="figure-right">
        <h4>{title}</h4>
        <figcaption>{name}</figcaption>
        <p>{subtitle}</p>
        <h5>
          MÁS SOBRE LA CONFERENCIA <i className="bi bi-arrow-right-square-fill"></i>
        </h5>
      </div>
    </figure>
  );
};

export default FigureConf;
