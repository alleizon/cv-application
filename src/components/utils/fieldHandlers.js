function handleKeyUp(e, text, init) {
  if (e.key !== "Enter") return;
  this.setState({ showInput: false, value: text ? text : init });
}

function handleClick() {
  this.setState({
    showInput: true,
  });
}

export { handleClick, handleKeyUp };
