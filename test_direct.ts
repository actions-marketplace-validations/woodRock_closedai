import { getFileOutline } from './src/utils/code-intelligence';

async function run() {
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
    const outline = await getFileOutline('test.ts', code);
    console.log(JSON.stringify(outline, null, 2));
}
run();
