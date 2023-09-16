import "./title.css";
function Title({ data }) {
  return (
    <div className="title-div ">
      <p className="text-uppercase h4 bg-light">
        {" "}
        Barcha kinolar soni : {data()}
      </p>
      <p className="text-uppercase h3 mt-3 bg-light">
        Ko'rilgan kinolar soni :{(data() / 2).toFixed(0)}
      </p>
    </div>
  );
}

export default Title;
