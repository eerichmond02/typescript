import * as React from 'react';
import '../App.css';
import Hello from './Hello';

class Examples extends React.Component<{}, { enthusiasmInput: any; helloEnthusiasm: any }> {
  constructor(props: any){
    super(props);
    this.state = {
      enthusiasmInput: '',
      helloEnthusiasm: 1
    }
    this.changeEnthusiasm = this.changeEnthusiasm.bind(this);
    this.updateHelloEnthusiasm = this.updateHelloEnthusiasm.bind(this);
  }

  public changeEnthusiasm(e: any) {
    this.setState({ enthusiasmInput: parseInt(e.target.value, 10) });
  }

  public updateHelloEnthusiasm(e: any) {
    e.preventDefault();
    this.setState({ helloEnthusiasm: this.state.enthusiasmInput })
  }

  public render() {
    return (
      <div className="App">
        <form>
          <input placeholder="Enter your enthusiasm" type="number" value={this.state.enthusiasmInput} onChange={this.changeEnthusiasm}/>
          <button onClick={this.updateHelloEnthusiasm}>Change enthusiasm</button>
        </form>
        <Hello name="Team React" enthusiasmLevel={this.state.helloEnthusiasm} />
        {/* <Hello name="Team React" enthusiasmLevel="5" /> */}
      </div>
    );
  }
}

export default Examples;

// const nameToUpperCase = (name: string) => name.toUpperCase();
// let upper = nameToUpperCase(123);
