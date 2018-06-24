import * as React from 'react';

const Types = () => {

  return (
    <div>
      <p>Adding Types</p>
      <p>To add a type to a variable using TypeScript, add a colon and type to the variable declaration. Example:</p>
      <p><code>let isDone: boolean = false;</code></p>
      <p>Types:</p>
      <ul>
        <li>Boolean</li>
        <li>Number</li>
        <li>String</li>
        <li>Array</li>
        <li>Tuple</li>
        <li>Enum</li>
        <li>Object</li>
        <li>Any</li>
        <li>Void</li>
        <li>Null</li>
        <li>Undefined</li>
        <li>Never</li>
      </ul>
      <p>Type Assertion: A way to type cast a variable, if you know the type and want to perform a type-specific function. Example:</p>
      <p><code>let someValue: any = "this is a string";</code></p>
      <p><code>let strLength: number = ({'<string>'}someValue).length;</code></p>
      <p><code>let strLength: number = (someValue as string).length;</code></p>
    </div>
  );
}

export default Types;
