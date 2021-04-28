# Mini-curso de TypeScript

- Curso Feito: [Mini-curso de TypeScript](https://www.youtube.com/watch?v=mRixno_uE2o&list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_)

**Precisa ter o Node instalado na máquina**

Para instalar o TypeScript: ``` npm install typescript ```

Para compilar o arquivo: ``` tsc file.ts ```, necessário para transformar em.js

Para compilar o arquivo e escutar/compila automaticamente as mudanças: ``` tsc file.ts --watch ```

Para criar o TSconfig: ``` tsc --init ```

outDir: Serve para definir aonde os arquivos compilados ficarão armazenados. Exemplo: "outDir": "./dist", => Cria uma pasta dist e sempre que rodar o comando tsc os arquivos compilados irão para pasta /dist.

Para escutar e rodar o arquivo compilado:
- Terminal 1: ``` tsc file.ts --watch ```
- Terminal 2: ``` nodemon file.js ```

***

## Referências

- [TypeScript: O guia definitivo](https://oieduardorabelo.medium.com/typescript-o-guia-definitivo-1a63b04259cc)
- [TypeScript — Tips & Tricks](https://medium.com/@tomsu/typescript-tips-tricks-c8fdef998d50)

***

