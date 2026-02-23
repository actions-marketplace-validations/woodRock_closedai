import { Parser, Language } from 'web-tree-sitter';

async function run() {
  await Parser.init();
  const lang = await Language.load('vendor/tree-sitter/tree-sitter-python.wasm');
  const parser = new Parser();
  parser.setLanguage(lang);
  
  console.log("--- Python Class ---");
  const tree1 = parser.parse('class MyClass:\n  pass');
  console.log(tree1.rootNode.toString());
}
run();
