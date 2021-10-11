const appRoot = document.getElementById('app')
let visibility = false


const app = {
  title: 'Visibility Toggle',
  details: 'Put your life in the hands of a computer'
}

const toggleDetails = () => {
  visibility = !visibility
  renderApp()
}

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleDetails}>{visibility ? 'Hide details' : 'Show details'}</button>
      {visibility && (<p>{app.details}</p>)}
    </div>
  )

  ReactDOM.render(template, appRoot)
}

renderApp()