import { Parser, Language } from 'web-tree-sitter';

async function run() {
  await Parser.init();
  const lang = await Language.load('vendor/tree-sitter/tree-sitter-typescript.wasm');
  const parser = new Parser();
  parser.setLanguage(lang);
  
  const code = `
      export class MyClass {
        constructor() {}
        myMethod(a: number): string {
          return "hello";
        }
      }

      function topLevelFunction() {
        return 42;
      }

      export interface MyInterface {
        foo: string;
      }
  `;
  const tree = parser.parse(code);
  console.log(tree.rootNode.toString());
}
run();
