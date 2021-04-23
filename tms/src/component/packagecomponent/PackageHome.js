
import commonStyle from "./commonStyle.module.css";

export default function PackageHome() {

  return (

    <div>
      <h1> Package App </h1>

      <div className={commonStyle.content}>
        <div>
          This is Package app
          <br />
          please use the available features
        </div>
      </div>
    </div>
  );
}
