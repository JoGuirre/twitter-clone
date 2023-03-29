import './App.css'
import Sidebar from './Sidebar'
import Content from './Content'

function App() {

  return (
    <div className="App">
      <Sidebar className="sidebar__left"/>
      {/* <Sidebar /> */}
        {/* Logo
            Search Icon
            Settings */}
      <Content className="content" />
      {/* Header & Body */}
    </div>
  )
}

export default App
