function handleKeyUp(e, text, init) {
  if (e.type === "keyup") {
    if (e.key !== "Enter") return;
  }
  this.setState({ showInput: false, value: text ? text : init });
}

function handleClick() {
  if (!document.querySelector("#control-buttons")) return;
  this.setState({
    showInput: true,
  });
}

export { handleClick, handleKeyUp };
