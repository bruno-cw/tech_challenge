import Style from "./LoadingIndicator.module.css";


const LoadingIndicator: React.FC = () => {
  return (
    <div className={Style.loading}>
      <h1>Loading data...</h1>
    </div>
  );
}

export default LoadingIndicator;