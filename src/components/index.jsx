

var App = React.createClass ({

  getInitialState: function () {
    return {

    }
  },

  render: function () {
    return (
      <div className="container">
       I am App
      </div>
    );
  }
});


ReactDOM.render(<App songs={songData}/>, document.getElementById("app"));