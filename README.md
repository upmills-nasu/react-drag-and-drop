# Getting Started with Create React App
## Typescript + React　Docker
### 1. mkdir 'your folder name'
### 2. clone 'git:react-drag-and-drop'
### 3. docker-compose build
### 4. docker-compose run --rm react-drag-and-drop
### 5. docker-compose up (-d) //detach
(run attached: docker-compose logs --follow)
### 6. docker-compose down

※ docker registry(Private)  

## Project script
`yarn start`
Runs the app in the your local development  
  
## 目的
ReactのDrag&Dropをサンプル実装する  
（今回はライブラリの導入）  
  
## ライブラリ選定基準
・マテリアルデザインは考慮しない  
・スマートフォンのタッチデバイスの利用は無し  
・ファイル取り込みのみで利用を想定  
・バイナリファイルのコンバート可能  
・ファイル名、サイズなどの情報が取得可能  
  
## 選定リスト
### react-dropzone
howTo: `https://react-dropzone.js.org/`  
github: `https://github.com/react-dropzone/react-dropzone`  
pkg-m: `https://yarnpkg.com/package/react-dropzone`  
pkg-types: `https://yarnpkg.com/package/@types/react-dropzone`  
・React hooks：対応  
・カスタマイズ性：普通  
・Last Commit：1ヶ月前  
・API：普通  
・コスト：低め  
  
### react-beautiful-dnd
github: `https://github.com/atlassian/react-beautiful-dnd`  
pkg: `https://yarnpkg.com/package/react-beautiful-dnd`  
pkg-types: `https://yarnpkg.com/package/@types/react-beautiful-dnd`  
・Atlassian製  
・Last Commit：1ヶ月前  
・HTML5：未利用  
・カスタマイズ性：普通〜高い  
・API：多い  
・コスト：普通  
  
## react-dnd
github: `https://github.com/react-dnd/react-dnd`  
pkg: `https://yarnpkg.com/package/react-dnd`  
pkg-types: `https://yarnpkg.com/package/@types/react-dnd`  
・Last Commit：1ヶ月前  
・HTML5：利用  
・API：普通〜多い  
・カスタマイズ性：普通〜高い  
・コスト：普通〜高い  
  
## 選定・理由
`react-dropzone`  
  
ドキュメントが豊富でカスタマイズ性もそこそこ、フックも効くし、コストも低め  
要件が出揃ってない感あるのでまだ決定には微妙なところは否めない  
  
## 備忘録
