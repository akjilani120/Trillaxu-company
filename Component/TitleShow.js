import React from 'react';

const TitleShow = ({todo}) => {
  const {name , email ,  number , address} = todo
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{number}</td>
        </tr>
    );
};

export default TitleShow;