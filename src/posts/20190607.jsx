import React, { Fragment } from 'react';
import {
  Code,
  Date,
  Entry,
  Indent,
  Tags,
} from '../components';

function Post() {
  const tags = [
    'programming',
    'javascript',
    'code',
  ];
  const code = {
    snippetA: [{
      id: '20190607-1',
      content: 'const variableName = [];',
    }, {
      id: '20190607-2',
      content: 'variableName.push(5);',
    }],
    snippetB: [{
      id: '20190607-3',
      content: 'function nameOfFunction(parameterA, parameterB) {',
    }, {
      id: '20190607-4',
      content: <Fragment><Indent />parameterA = parameterA + 2;</Fragment>,
    }, {
      id: '20190607-5',
      content: <Fragment><Indent />parameterB[0] = 7;</Fragment>,
    }, {
      id: '20190607-6',
      content: <Fragment><Indent />return parameterA + parameterB[0];</Fragment>,
    }, {
      id: '20190607-7',
      content: '}',
    }, {
      id: '20190607-8',
      content: 'const passedInA = 0;',
    }, {
      id: '20190607-9',
      content: 'const passedInB = [];',
    }, {
      id: '20190607-10',
      content: 'nameOfFunction(passedInA, passedInB); // => 9',
    }],
  };

  return (
    <Entry>
      <Date date="Friday, June 7, 2019" />
      <Tags tags={tags} />
      <p>JavaScript is a crazy language. Sometimes it feels like a lawless land where a number can act like a string and a constant doesn't have to be constant. What do I mean when I say, "a constant doesn't have to be a constant"? It is very important to keep in mind that just because something is declared with the keyword 'const', it does not mean that it will always stop you from changing its initial value. Try initializing a constant empty array and pushing a number into the array.</p>
      <Code lines={code.snippetA} title="Example" />
      <p>All of a sudden, your "constant" variable has a different value and your whole world feels like it's full of lies! Well not exactly. When you have an object or an array, there can be a lot of content, so that variable holds a pointer/reference to where that object/array is stored. That pointer/reference hasn't changed, just the value you were storing there. This is an important distinction to make when working with functions and their parameters.</p>
      <p>Functions use parameters to pass in useful data.</p>
      <Code lines={code.snippetB} title="Example" />
      <p>After nameOfFunction runs, what are the values of passedInA and passedInB?</p>
      <p>passedInA will equal 0 because it is not an object or array, and it is passed into nameOfFunction by value. Passed by value means that it makes a copy of the value before handing it off to the function.</p>
      <p>passInB is not as lucky. It is an array and is passed into nameOfFunction by reference. This means that passedInB is NOT copied and handed off to parameterB to do whatever it wants with it. Instead, it passes the reference to where passedInB is stored, and so if there are any direct changes to parameterB, it will make those changes where passedInB is stored.</p>
      <p>So what would passedInB[0] print out? If you said 7, you'd be correct!</p>
      <p>Not everything is as it seems in JavaScript...</p>
    </Entry>
  );
}

export default Post;
