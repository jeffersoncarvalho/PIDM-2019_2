import React,{Component} from 'react';

import Routes from './components/stack/Routes';
import TabSimples from './components/tabs/TabSimples';
import DrawerSimples from './components/drawer/DrawerSimples';
import RoutesSwitch from './components/switch/Routes';
import TabAula from './components/tab_aula/TabSimples';
import GavetaAula from './components/drawer_aula/GavetaSimples';
import SwitchAula from './components/switch_aula/Routes'

export default class App extends Component{
  render(){
    return(
      //<Routes/> //stack
      //<TabSimples/>
      //<DrawerSimples/>
     // <RoutesSwitch/> //switch
     //<TabAula/>
     //<GavetaAula/>
     <SwitchAula/>
    )
  }
}