var ImageCom = React.createClass({
  nextIm: function(){
      this.setState({imag: this.state.imag ==7?7:this.state.imag+1});
  },
  preIm: function(){
      this.setState({imag: this.state.imag ==1?1:this.state.imag-1});
  },
  getInitialState: function(){
    return {imag: 1};
  },
  render: function(){
    return (
      <div>
        <img src={"images/"+this.state.imag+".jpg"}/>
        <br/>
        <button onClick={this.nextIm}>Tiếp theo </button>
        <button onClick={this.preIm}>Quay lại </button>
      </div>
    );
  }
});
ReactDOM.render(
  <div>
  <ImageCom />
  </div>,
  document.getElementById("root")
);
