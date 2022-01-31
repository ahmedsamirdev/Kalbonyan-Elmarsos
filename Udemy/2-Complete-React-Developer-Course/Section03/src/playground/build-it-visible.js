let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? "hide detail" : "show detail"}
      </button>
      {visibility && (
        <div>
          <p>hey, these some details</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById("app"));
};

render();
