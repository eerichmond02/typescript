import * as React from 'react';

const Classes = () => {

  return (
    <div>
      <p className='bold'>Interfaces</p>
      <ul>
        <li>One of TypeScript’s core principles is that type-checking focuses on the shape that values have.
        In TypeScript, interfaces fill the role of naming these types</li>
        <li>Example:
          <p><code>interface LabelledValue {'{'}</code></p>
          <p style={{paddingLeft: '2em'}}><code>label: string;</code></p>
          <p><code>{'}'}</code></p>
          <p><code>function printLabel(labelledObj: LabelledValue) {'{'}</code></p>
          <p style={{paddingLeft: '2em'}}><code>console.log(labelledObj.label);</code></p>
          <p><code>{'}'}</code></p>
          <p><code>let myObj = {'{'}size: 10, label: 'Size 10 Object'{'}'};</code></p>
          <p><code>printLabel(myObj);</code></p>
        </li>
        <li>"Shape" is what matters - if the object we pass to the function meets the requirements listed, then it’s allowed. Note that you do not
        need to matchthe interface completely(in the example, the object also has a 'size' property).</li>
        <li>An interface can have optional properties, with are marked with a ?</li>
        <ul>
          <li>Example:
            <p><code>interface SquareConfig {'{'}</code></p>
            <p style={{paddingLeft: '2em'}}><code>color?: string;</code></p>
            <p style={{paddingLeft: '2em'}}><code>width?: number;</code></p>
            <p><code>{'}'}</code></p>
          </li>
        </ul>
        <li>You can specify properties that can only be modified when first creating an object by using 'readonly' before the property name.</li>
        <ul>
          <li>Example:
            <p><code>interface Person {'{'}</code></p>
            <p style={{paddingLeft: '2em'}}><code>readonly name: string;</code></p>
            <p style={{paddingLeft: '2em'}}><code>height: number;</code></p>
            <p><code>{'}'}</code></p>
          </li>
        </ul>
        <li>Interfaces can also be used to describe functions</li>
        <ul>
          <li>Example:
            <p><code>interface SearchFunc {'{'}</code></p>
            <p style={{paddingLeft: '2em'}}><code>(source: string, subString: string): boolean;</code></p>
            <p><code>{'}'}</code></p>
          </li>
          <li>Note: parameter names do not need to match, but order matters!</li>
        </ul>
      </ul>
      <p className='bold'>Classes</p>
      <ul>
        <li>ES6 allows JavaScript developers to write code using an object-oriented, class-based approach. TypeScript takes this a step further
        by allowing developers to define types.</li>
        <li>Example:</li>
        <ul>
          <li>Example:
            <p><code>class Greeter {'{'}</code></p>
            <p style={{paddingLeft: '2em'}}><code>greeting: string;</code></p>
            <p style={{paddingLeft: '2em'}}><code>constructor(message: string) {'{'}</code></p>
            <p style={{paddingLeft: '4em'}}><code>this.greeting = message;</code></p>
            <p style={{paddingLeft: '2em'}}><code>{'}'}</code></p>
            <p style={{paddingLeft: '2em'}}><code>greet() {'{'}</code></p>
            <p style={{paddingLeft: '4em'}}><code>return "Hello, " + this.greeting;</code></p>
            <p style={{paddingLeft: '2em'}}><code>{'}'}</code></p>
            <p><code>{'}'}</code></p>
            <p><code>let greeter = new Greeter("world");</code></p>
          </li>
        </ul>
      </ul>
      <p className='bold'>Inheritance</p>
      <ul>
        <li>ES6 also allows JavaScript deveopers to extend classes using inheritance. Again, this is enhanced using TypeScript.</li>
        <li>Example:
          <p><code>class Animal {'{'}</code></p>
          <p style={{paddingLeft: '2em'}}><code>move(distanceInMeters: number = 0) {'{'}</code></p>
          <p style={{paddingLeft: '4em'}}><code>console.log(`Animal moved ${'{'}distanceInMeters{'}'}m.`);</code></p>
          <p style={{paddingLeft: '2em'}}><code>{'}'}</code></p>
          <p><code>{'}'}</code></p>
          <p><code>class Dog extends Animal {'{'}</code></p>
          <p style={{paddingLeft: '2em'}}><code>bark() {'{'}</code></p>
          <p style={{paddingLeft: '4em'}}><code>console.log('Woof! Woof!');</code></p>
          <p style={{paddingLeft: '2em'}}><code>{'}'}</code></p>
          <p><code>{'}'}</code></p>
          <p><code>const dog = new Dog();</code></p>
          <p><code>dog.bark();</code></p>
          <p><code>dog.move(10);</code></p>
        </li>
      </ul>
      <br />
      <p className='bold'>Note: in TypeScript, every member is public by default. Members can also be marked private, and cannot be accessed from outside
        of the class.</p>
    </div>
  );
}

export default Classes;
