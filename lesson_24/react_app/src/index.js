import React from 'react';
import ReactDOM from 'react-dom';

const renderDOMNode = document.querySelector('#root');

console.log(renderDOMNode);


class Hello extends React.Component {
  constructor() {
    super();

    this.name = "Maksim"
  }

  render() {
    return <div>{this.name}</div>;
  }
}

class List extends React.Component {
  constructor() {
    super();
    this.name = "List"
  }

  render() {
    console.log(this.props);

    return (
      <ul>
        {this.props.list.map(framework => {
          return <li>{framework}</li>
        })}
      </ul>
    );
  }
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {

      frameworks: ['Angular', 'Vue', 'React']
    }
  }

  render() {
    return (
      <div>
        <h1><Hello/></h1>
        <ul>
          {this.state.frameworks.map(framework =>
            <li>
              {framework}
            </li>
          )}
        </ul>
        <List list={this.state.frameworks}/>

      </div>
    );
  }
}

ReactDOM.render(<App/>, renderDOMNode);