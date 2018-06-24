import * as React from 'react';

const About = () => {

  return (
    <div>
      <p><a href="https://www.typescriptlang.org/index.html" className="typescriptLink"  target="_blank">TypeScript</a> is a typed superset of JavaScript that compiles to plain JavaScript.</p>
      <p>Types enable JavaScript developers to use highly-productive development tools and practices like static checking and code refactoring when developing JavaScript applications.
          Types are optional, and type inference allows a few type annotations to make a big difference to the static verification of your code. Types let you define interfaces between software components and gain insights into the behavior of existing JavaScript libraries.</p>
      <p>Why use TypeScript?</p>
      <ul>
        <li>Define argument types</li>
        <li>Avoid errors</li>
        <li>Enable object oriented programming using JavaScript</li>
      </ul>
      <p>When to Use TypeScript</p>
      <ul>
        <li>Large code base</li>
        <li>Developers are accustomed to statically-typed languages</li>
        <li>Can increase performance by eliminating type checks</li>
      </ul>
      <p>Install & Setup</p>
      <ul>
        <li>Using create react app: <code>create-react-app my-app --scripts-version=react-scripts-ts</code></li>
        <li>
          Otherwise, just install typescript, and the types for react and react-dom as dependencies:
          <ul>
            <li><code>npm install --save react react-dom @types/react @types/react-dom</code></li>
            <li><code>npm install --save-dev typescript</code></li>
          </ul>
        </li>
        <li>Install TypeScript plug-in for your IDE
          <ul>
            <li>Atom: atom-typescript</li>
            <li>VS Code: includes TypeScript language support; must install TypeScript compiler via npm</li>
          </ul>
        </li>
      </ul>
      <p>Files</p>
      <ul>
        <li><code>tsconfig.json</code>: contains a list of your input files as well as all your compilation settings</li>
        <li><code>tslint.json</code>: stores the settings that TypeScript's linter, TSLint, will use</li>
      </ul>
    </div>
  );
}

export default About;
