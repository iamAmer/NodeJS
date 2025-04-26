# NodeJS
- NodeJS is a run-time environment, for JavaScript.
- Runs on the V8 engine, Basically outside the browser.
- Runs on a single thread, asynchronous I/O (non-blocking) paradigms 
- REPL (read, evaluate, print, loop) / Node Shell

## NodeJS VS Browser
- The core are the same.
- Both use javaScript.
- what changes is the ecosystem.

### Browser
- All DOM stuff.
- window (this) keyword at the web API category.
- can't access the file system.
- only import is used.
### NodeJs
- File System, http, OS aceess.
- requrire() or import is used.

## V8 Egine
- Google Chrome js Engine which is used to execute js code in the browser.
- The greate part is that it is independent of the browser.
- V8 is written in c++

### Compilation
- Early, JS was interpreted in the browser, line by line.
- 2004 when google maps came, it was compiled before running due to the large code base.
- Modern browsers compile JS using (JIN) just in time compilation, wile the program is running

## NodeJS Modules
- A separate parts of code to each purpose.
- Modules are cached, loaded only once in the memory.
	- Built in modules
	- local modules
	- npm modules
##  

## References
- https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
- https://v8.dev/

