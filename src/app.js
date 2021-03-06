class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      // options: []
      options: props.options
    }
  }
  // Child props do not go upstream to the Parent, only downstream
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }

  handleAddOption(option) {

    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }

  render() {
    // const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer'

    return (
      <div>
        {/* <Header title={title} subtitle={subtitle} /> */}
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     )
//   }
// }

// function Header() {
//   return (
//     <div>
//       <h1>Indecision</h1>
//       <h2>Put your life in the hands of a computer</h2>
//     </div>
//   )
// }

// const Header = () => {
//   return (
//     <div>
//       <h1>Indecision</h1>
//       <h2>Put your life in the hands of a computer</h2>
//     </div>
//   )
// }

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  )
}

// class Action extends React.Component {
//   // handlePick() {
//   //   alert('handlePick')
//   // }

//   render() {
//     return (
//       <div>
//         <button
//           // onClick={this.handlePick}
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//         >
//           What should I do?
//         </button>
//       </div>
//     )
//   }
// }

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map(option => <Option key={option} optionText={option} />)
      }
    </div>
  )
}

// class Options extends React.Component {
  // constructor(props) {
  //   super(props)

  //   // do this to make sure the context is kept with the function below
  //   this.handleRemoveAll = this.handleRemoveAll.bind(this)
  // }

  // handleRemoveAll() {
  //   console.log(this.props.options)
  // }

  // We add bind(this) to keep the props context in the handleRemoveAll function
  // however this is inefficient as it rerenders each time
  // thus we modify with the constructor above
  // <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
//   render() {
//     return (
//       <div>
//         {/* <button onClick={this.handleRemoveAll}>Remove All</button> */}
//         {/* The props are passed down from the parent instead of the child */}
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         {
//           this.props.options.map(option => <Option key={option} optionText={option} />)
//         }
//       </div>
//     )
//   }
// }

const Option = (props) => {
  return (
    <div>{props.optionText}</div>
  )
}

// class Option extends React.Component {
//   render() {
//     return (
//       <div>{this.props.optionText}</div>
//     )
//   }
// }

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault()

    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)

    this.setState(() => {
      return {
        error: error
      }
    })

    // if (option) {
    //   this.props.handleAddOption(option)
    // }
  }

  render() {
    return (
      <>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </>
    )
  }
}

// const jsx = (
//   <div>
//     <Header />
//     <Action />
//     <Options />
//     <AddOption />
//   </div>
// )

// ReactDOM.render(jsx, document.getElementById('app'))
// ReactDOM.render(<IndecisionApp options={['Option one', 'Option two']} />, document.getElementById('app'))
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))