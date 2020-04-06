import React from 'react';
import Header from './header';
import EmailItem from './EmailItem';
import EmailReader from './EmailReader';
import emails from './ArrayEmails';

import '../stylesheets/App.css';

//versión limpia con componente funcional! PARA USAR ESTADOS NECESITAMOS HOOKS O PASAR APP A COMPONENTE DE CLASE

const renderEmails = () => {
  return emails.map((email) => {
    return <EmailItem key={email.id} from={email.fromName} subject={email.subject} time={email.date} />;
  });
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inboxFilter: '',
    };
  }
  handleInboxFilter() {
    console.log('App: me han clicado');
  }
  handleDeleteFilter() {
    console.log('App: han clicado en la papelera');
  }
  handleTextFilter(value) {
    console.log('App: han escrito en el campo de texto', value);
  }
  //métodos encima del render, esta es la manera de escribir estos métodos de clase las arrow para los comp. funcionales
  render() {
    console.log(this.state); //buen lugar para ver el estado inicial

    return (
      <div>
        <Header handleInboxFilter={this.handleInboxFilter} handleDeleteFilter={this.handleDeleteFilter} handleTextFilter={this.handleTextFilter} />

        <table className='table'>
          <tbody>{renderEmails()}</tbody> {/* podemos sacar la función del map fuera y llamar a la función dentro de donde vamos a renderizar */}
        </table>

        <EmailReader key={emails[0].id} fromName={emails[0].fromName} subject={emails[0].subject} time={emails[0].date} email={emails[0].fromEmail} />
      </div>
    );
  }
}
export default App;

//pasos hasta llegar aqui!

//react necesita un array de JS contine 3 elementos JSX por eso se pinta entre {} / hemos guardado este array en otro archivo js y lo hemos importado para que quede el código más limpio
/* function App() {
  const emailItems = emails.map((email) => {
    return ( */
// <tr><td>{email.fromName}</td></tr> esto puede ser código HTML a través de JSX o un componente de React que es a su vez un componente html.
//<EmailItem from='Font Fest' subject='Entradas ya a la venta' hour='15:27' />
// EmailItem se pinta tres veces, porque tenemos un array de 3 elementos.
//<EmailItem from={email.fromName} subject={email.subject} hour={email.date} key={email.id} />
// si no tenemos id, podemos meter en el map como 2º parámetro Index, para poder guardar index como key
// );
//}); //emails nombre del array //recorremos el array ya dado

/*   return (
    <div>
      <Header />
      <table className='table'>
        <tbody>{emailItems}</tbody>
      </table>
      pintar el array de elementos a través de un map, + componente (props)     <EmailReader />
    </div>
  );
}

export default App; 

//eso sería la manera rudimentaria de pintar una tabla o lista de elementos que se repiten y sólo cambian algunos valores, lo suyo es recorrerlos con un array linea 42
 <table className='table'>
        <tbody>
          <EmailItem from='Font Fest' subject='Entradas ya a la venta' hour='15:27' />
          <EmailItem from='GitHub' subject='Adalab/project-promo-i Local store #23' hour='13:51' />
          <EmailItem from='Node Weekly' subject='Node news' hour='20:41' />
        </tbody> 
      </table> */
