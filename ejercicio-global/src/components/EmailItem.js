import React from 'react';

function EmailItem(props) {
  /* console.log(props); */
  let deletedClass = props.deleted === true ? 'text--decoration--through' : '';
  let readClass = props.read === true ? '' : 'text--bold';

  const handleSelectEmail = () => {
    props.handleSelectEmail(props.id);
  };

  const handleDeleteEmail = (ev) => {
    ev.stopPropagation(); //evitar el burbujeo/propagación hacia arriba, el evento se para donde se pone el stop propagation y no sigue subiendo.
    props.handleDeleteEmail(props.id);
  };

  return (
    <tr className={`cursor-pointer ${deletedClass} ${readClass}`} onClick={handleSelectEmail}>
      <td>
        {props.from}
        {/* <a href='/' className='text--decoration--none'> </a> */}
      </td>
      <td>
        {props.subject}
        {/* <a href='/' className='text--decoration--none'></a> */}
      </td>
      <td>
        {props.time}
        {/* <a href='/' className='text--decoration--none'></a> */}
      </td>
      <td className='text-align-right'>
        <button className='form__btn fas fa-trash' onClick={handleDeleteEmail}></button>
      </td>
    </tr>
  );
}

export default EmailItem;
