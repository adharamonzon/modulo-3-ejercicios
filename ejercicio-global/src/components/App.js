import React from 'react';
import Header from './header';
import EmailItem from './EmailItem';
import EmailReader from './EmailReader';
import emails from '../data/emails.json';

import '../stylesheets/App.css';

//versión limpia con componente funcional! PARA USAR ESTADOS NECESITAMOS HOOKS O PASAR APP A COMPONENTE DE CLASE

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: emails,
      inboxFilter: '',
      showInbox: true,
    };
    this.handleInboxFilter = this.handleInboxFilter.bind(this);
    this.handleDeleteFilter = this.handleDeleteFilter.bind(this);
    this.handleTextFilter = this.handleTextFilter.bind(this);
    this.handleDeleteEmail = this.handleDeleteEmail.bind(this);
  }
  //métodos encima del render, esta es la manera de escribir estos métodos de clase las arrow para los comp. funcionales

  //en estos 3 métodos guardamos las acciones de la usuaria nada más
  handleInboxFilter() {
    this.setState({
      showInbox: true,
    });
  }
  handleDeleteFilter() {
    this.setState({
      showInbox: false,
    });
  }
  handleDeleteEmail(emailId) {
    this.setState((prevState) => {
      const email = prevState.emails.find((email) => email.id === emailId);
      email.deleted = true; //usamos la constante que seria de this.state dentro como prevState ya que se ejecuta de manera asíncrona para evitar errores
      return {
        emails: prevState.emails,
      };
    });
  }
  handleTextFilter(data) {
    this.setState({
      inboxFilter: data.value,
    }); //datar viene de headerForm a Header y de ahi a app
    //en el estado GUARDAMOS LOS DATOS MÁS ORIGINALES POSIBLES/en el estado sin modificar! en el RENDER ya se hacen los cálculos necesarios
  }
  //aqui pintamos los que hemos guardado en los métodos de arriba:
  renderFilters() {
    const emailType = this.state.showInbox ? 'recibidos ' : 'borrados ';
    const filterText =
      this.state.inboxFilter === '' ? (
        'y sin filtrar.'
      ) : (
        <span>
          y filtrando por: <span className='text--bold'>{this.state.inboxFilter}</span>
        </span>
      );
    return (
      <p className='mb-1'>
        La usuaria está visualizando los emails <span className='text--bold'>{emailType}</span>
        {filterText}
      </p>
    );
  }

  renderEmails() {
    const inboxFilter = this.state.inboxFilter.toLowerCase(); // como un método:filteredEmails son un dato calculado o computado/ machaca el dato original = const filteredEmails = this.state.emails.filter(y todo lo que el filter contiene)
    return (
      this.state.emails
        //filtrado por inbox vs. delete
        .filter((email) => {
          return this.state.showInbox === true ? !email.deleted : email.deleted;
          //CON IF ELSE opción a)
          /* if (this.state.showInbox === true) {
            return !email.deleted; //cuando el showInbox is true! me devuelve los mail no borrados
          } else {
            return email.deleted; // sino me devuelve los mails borrados
          } */
          // opción b)
          /*  return this.state.showInbox !== email.deleted;  */ // devolver el estado si son emails no borrados. (simplificación del ternario)
        })
        //filtrado por inboxFilter text
        .filter((email) => {
          return email.fromName.toLowerCase().includes(inboxFilter) || email.subject.toLowerCase().includes(inboxFilter) || email.body.toLowerCase().includes(inboxFilter);
        })
        .map((email) => {
          return <EmailItem key={email.id} id={email.id} from={email.fromName} subject={email.subject} time={email.date} deleted={email.deleted} read={email.read} handleDeleteEmail={this.handleDeleteEmail} />;
        })
    );
  }

  render() {
    console.log(this.state); //buen lugar para ver el estado inicial

    return (
      <div>
        <Header handleInboxFilter={this.handleInboxFilter} handleDeleteFilter={this.handleDeleteFilter} handleTextFilter={this.handleTextFilter} />
        {this.renderFilters()}
        <table className='table'>
          <tbody>{this.renderEmails()}</tbody>
          {/* podemos sacar la función del map fuera y llamar a la función dentro de donde vamos a renderizar */}
        </table>
        <EmailReader id={emails.id} fromName={this.state.emails[0].fromName} subject={this.state.emails[0].subject} time={this.state.emails[0].date} email={this.state.emails[0].fromEmail} handleDeleteEmail={this.handleDeleteEmail} />
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
