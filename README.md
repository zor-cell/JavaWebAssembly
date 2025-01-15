# JavaWebAssembly
This repository acts as a template to combine Java code with WebAssembly. The main purpose is to be able to write performant and efficient
code that can be run in the web. This will be used for multiple projects regarding my blog.

The idea is to be able to call Java functions that have been compiled to WebAssembly from JavaScript code. This allows for a clean cut
of frontend logic in JavaScript and efficient computation in Java. 

## Dependencies
To compile Java code to the intermediate WebAssembly format I am using [CheerPJ](https://cheerpj.com/).
With this resource, any Java _.jar_ file can be used with JavaScript. This allows for 
independent development of the source code and the website. 
The dependency is 
simply accessed in the `<script src="https://cjrtnc.leaningtech.com/3.0/cj3loader.js"></script>`
tag in the _index.html_ file.

**IMPORTANT:** [CheerPJ](https://cheerpj.com/) is only compatible with .jar files compiled
with Java 8.

## Usage
Start a local HTTP development server in the _webapp/_ directory:

With python:\
`~/JavaWebAssembly/webapp: python -m http.server`

Or with node:\
`~/JavaWebAssembly/webapp:  npx http-server`

