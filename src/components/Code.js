import React, { Fragment } from 'react';
import './styles.css';

function Code({ lines, title='' }) {
  return(
    <div className="code-container">
      <div className="code-title">{title}</div>
      <table className="code-snippet">
      {
        lines.map((line, lineNumber) => {
          const regex = new RegExp('^ +', 'gm');
          const indent = line.match(regex);
          let indentCount = [];
          if (indent && indent.length > 0) {
            indentCount = indent[0].split('');
          }
          return (
            <tr key={lineNumber} className="code-line">
              <td className="code-lineNumber">
                { lineNumber }
                <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
              </td>
              <td className="code-lineContent">
                { indentCount.map(_ =><Fragment>&nbsp;</Fragment>)}
                { line }
              </td>
            </tr>
          );
        })
      }
      </table>
    </div>
  );
}

export default Code;
