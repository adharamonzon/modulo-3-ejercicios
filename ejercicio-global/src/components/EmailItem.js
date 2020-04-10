import React from 'react';

function EmailItem(props) {
  /* console.log(props); */
  let deletedClass = props.deleted === true ? 'text--decoration--through' : '';
  let readClass = props.read === true ? '' : 'text--bold';

  const handleDeleteEmail = () => {
    props.handleDeleteEmail(props.id);
  };
  return (
    <tr className={`cursor-pointer ${deletedClass} ${readClass}`}>
      <td>
        <a href='/' className='text--decoration--none'>
          {props.from}
        </a>
      </td>
      <td>
        <a href='/' className='text--decoration--none'>
          {props.subject}
        </a>
      </td>
      <td>
        <a href='/' className='text--decoration--none'>
          {props.time}
        </a>
      </td>
      <td className='text-align-right'>
        <button className='form__btn fas fa-trash' onClick={handleDeleteEmail}></button>
      </td>
    </tr>
  );
}

export default EmailItem;
