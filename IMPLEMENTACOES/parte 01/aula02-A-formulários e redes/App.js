import React, { Component } from 'react';

import CalculadoraApp from './components/imc/CalculadoraApp';
import PizzaApp from './components/pizza/PizzaApp';
import BotoesApp from './components/botoes/BotoesApp';
import BotoesInputApp from './components/botoes_input/BotoesInputApp';
import TocavelApp from './components/tocaveis/TocavelApp';
import ScrollApp from './components/scrolling/ScrollApp';
import FlatlistApp from './components/lists/FlatListApp';
import SectionListApp from './components/lists/SectionListApp';
import NetworkingApp from './components/networking/NetworkingApp';

export default class App extends Component{
    render(){
        return (
            //<CalculadoraApp />
            //<PizzaApp/>
            //<BotoesApp/>
            //<BotoesInputApp/>
            //<TocavelApp/>
            //<ScrollApp/>
            //<FlatlistApp/>
            //<SectionListApp/>
            <NetworkingApp/>
        )
    }
}