import React, { Fragment } from 'react';
import Indent from '../Indent';
import './styles.css';

function Code({ lines, title='' }) {
  return(
    <div className="code-container">
      <div className="code-title">{title}</div>
      <table className="code-snippet">
        <tbody>
          {
            lines.map((line, lineNumber) => {
              return (
                <tr key={line.id}>
                  <td className="code-lineNumber">
                    { lineNumber }
                    <Fragment>&nbsp;&nbsp;</Fragment>
                  </td>
                  <td className="code-lineContent">
                    <Indent />
                    { line.content }
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Code;
