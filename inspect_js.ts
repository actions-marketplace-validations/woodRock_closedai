import { Parser, Language } from 'web-tree-sitter';

async function run() {
  await Parser.init();
  const lang = await Language.load('vendor/tree-sitter/tree-sitter-javascript.wasm');
  const parser = new Parser();
  parser.setLanguage(lang);
  
  const code = `
      class MyJSClass {
        myJSMethod() {}
      }
      function jsFunction() {}
  `;
  const tree = parser.parse(code);
  console.log(tree.rootNode.toString());
}
run();
