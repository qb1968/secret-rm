import {useState} from 'react'
import {useSelector} from 'react-redux'
import {Route,Switch} from 'react-router-dom'
import s from './App.module.css'
import Content from './components/Content/Content'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Search from './components/Search/Search'
import Alert from './assets/audio'

function App() {
  const [page,setPage] = useState(1)
  const pageChanger = (p) => {
    setPage(p)
  }

  const isSearchActive = useSelector((state) => state.isSearchActive)
   
  return (
    <div className={s.wrapper}>
       <Alert>
        <audio ref="audio_tag" src="./assets/wubba_lubba_dub_dub.mp3"  onFinishedPlaying/>
        </Alert>
      <div className={s.app}>
        
        <Header/>
        <Menu pageChanger={pageChanger}/>
        {isSearchActive && <Search pageChanger={pageChanger}/>}

        <Switch>
          <Route path="/characters" render={() => <Content link="ch" page={page} pageChanger={pageChanger}/>}/>
          <Route path="/locations" render={() => <Content link="lo" page={page} pageChanger={pageChanger} />} />
          <Route path="/episodes" render={() => <Content link="ep" page={page} pageChanger={pageChanger} />} />
          <Route path="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
