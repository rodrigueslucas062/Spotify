import renderAside from "./components/Home/Aside";
import renderFooter from "./components/Home/Footer";
import renderMainPlay from "./components/Home/Main";

const index = () => {
  return (
    <div className="h-screen flex flex-col">
    <div className="flex flex-1 p-3">
        {/* Aside area*/}
        {renderAside()}
        {/* Main area*/}
        {renderMainPlay()}
    </div>
    <div>
        {renderFooter()}
    </div>
</div>
  );
};

export default index;
