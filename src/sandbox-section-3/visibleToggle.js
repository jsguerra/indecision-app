class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
    this.state = {
      visibility: false,
      title: 'Visibility Toggle',
      details: 'Put your life in the hands of a computer'
    }
  }

  handleToggle() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleToggle}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
        {this.state.visibility && (<p>{this.state.details}</p>)}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// const appRoot = document.getElementById('app')
// let visibility = false


// const app = {
//   title: 'Visibility Toggle',
//   details: 'Put your life in the hands of a computer'
// }

// const toggleDetails = () => {
//   visibility = !visibility
//   renderApp()
// }

// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={toggleDetails}>{visibility ? 'Hide details' : 'Show details'}</button>
//       {visibility && (<p>{app.details}</p>)}
//     </div>
//   )

//   ReactDOM.render(template, appRoot)
// }

// renderApp()