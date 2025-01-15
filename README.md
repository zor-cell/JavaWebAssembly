# Java + WebAssembly
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
A brief overview of how this repository can be used.

### Java Compilation
An overview of how the Java source files can be compiled to a .jar file that
is used in WebAssembly.

#### IntelliJ .jar file compilation
The _.idea_ folder is present in the repository on purpose, as it includes preconfigured
build configurations for building artifacts that create a
new .jar file in the _webapp/lib_ folder.

Go to _Build -> Build Artifacts -> Rebuild_ in IntelliJ settings.

#### Terminal .jar file compilation

Compile java class files with Java 8:\
`~/JavaWebAssembly: javac -source 1.8 -target 1.8 -d out src/code/*.java`

Compile java class files to .jar file:\
`~/JavaWebAssembly: jar cfm webapp/lib/JavaWebAssembly.jar src/META-INF/MANIFEST.MF -C out .`

### Start Website
The frontend requires [Node.js](https://nodejs.org/en) to be installed. The pre-installed frontend
uses React combined with Typescript for easy development. For large projects with multiple
pages Angular is a better option.

Install dependencies:\
`~/JavaWebAssembly/webapp: npm install`

Run development server:\
`~/JavaWebAssembly/webapp: npm run dev`

When accessing the hosted webpage, the messages _"Hello from Main!"_ and 
_"Hello from Test!"_ in the console indicate successful WebAssembly integration.
The Web page should display _"Hello from React!" to indicate proper React integration.