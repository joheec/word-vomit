import React, { Fragment } from 'react';
import Indent from '../Indent';
import './styles.css';

const formatNewline = (id, line) => (
  line.split('\\n')
    .reduce((renderLines, line, index) => {
      return [
        ...renderLines,
        {
          id: id + index,
          content: line,
        },
      ];
    }, [])
);

const formatTab = line => (
  line.content.split('\\t').map((content, index) => (
    <Fragment key={line.id + index}>
      <Indent />
      { content }
    </Fragment>
  ))
);

function Code({ id, title='', children }) {
  const lines = formatNewline(id, (typeof children === 'object'
    ? [ ...children ].join('')
    : children));
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
                    { formatTab(line) }
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
