import "./main.css";

const App = () => {
  return (
    <div className="serious">
      If i remove `serious` class at this element. bundle has not contain
      component (`why`) styles.
    </div>
  );
};

export default App;
