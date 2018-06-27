import * as React from 'react';

const Types = () => {

  return (
    <div>
      <p className='bold'>Adding Types</p>
      <p>To add a type to a variable using TypeScript, add a colon and type to the variable declaration. Example:</p>
      <p><code>let isDone: boolean = false;</code></p>
      <p className='bold'>Types:</p>
      <ul>
        <li>Boolean</li>
          <ul>
            <li>Example: <code>let iLoveJavascript: boolean = true;</code></li>
          </ul>
        <li>Number</li>
        <ul>
          <li>Example: <code>let age: number = 25;</code></li>
        </ul>
        <li>String</li>
        <ul>
          <li>Example: <code>let color: string = 'green';</code></li>
          <li>Note: template strings also allowed</li>
        </ul>
        <li>Array</li>
        <ul>
          <li>Example: <code>let list: number[] = [1, 2, 3];</code></li>
          <li>Example: <code>let list: Array&lt;number&gt; = [1, 2, 3];</code></li>
        </ul>
        <li>Tuple</li>
        <ul>
          <li>Example: <code>let x: [string, number] = ['ten', 10];</code></li>
          <li>Note: order matters! x[1].substring() would cause an error</li>
        </ul>
        <li>Enum</li>
        <ul>
          <li>Example: <code>enum Color {'{Red = 1, Green = 2, Blue = 4};'} let c: Color = Color.Green;</code></li>
          <li>Note: order matters! <code>x[1].substring()</code> would cause an error</li>
        </ul>
        <li>Object</li>
          <ul>
            <li>Any thing that is not number, string, boolean, symbol, null, or undefined.</li>
            <li>Example: <code>let soccerBall: object = {'{'}shape: 'round', colors: ['white', 'black']{'}'};</code></li>
          </ul>
        <li>Any</li>
        <ul>
          <li>Example: <code>let notSure: any = 4;</code></li>
          <li>Note: a variable declared as "any" can be changed to another type later on without errors</li>
        </ul>
        <li>Void</li>
          <ul>
            <li>Example:
              <p><code>function warnUser(): void {'{'}</code></p>
              <p style={{paddingLeft: "2em"}}><code>alert("This is my warning message");</code></p>
              <p><code>{'}'}</code></p>
            </li>
            <li>Note: opposite of any - most useful for functions that return no value. Can only be null or undefined.</li>
          </ul>
        <li>Null & Undefined</li>
        <ul>
          <li>Note: not particularly useful on their own, but are subtypes of all other types.</li>
        </ul>
        <li>Never</li>
        <ul>
          <li>Represents the type of values that never occur</li>
          <li>Example:
            <p><code>function error(message: string): never {'{'}</code></p>
            <p style={{paddingLeft: "2em"}}><code>throw new Error(message);</code></p>
            <p><code>{'}'}</code></p>
          </li>
        </ul>
      </ul>
      <p><span className='bold'>Type Assertion:</span> A way to type cast a variable, if you know the type and want to perform a type-specific function. Example:</p>
      <p><code>let someValue: any = "this is a string";</code></p>
      <p><code>let strLength: number = ({'<string>'}someValue).length;</code></p>
      <p><code>let strLength: number = (someValue as string).length;</code></p>
    </div>
  );
}

export default Types;
