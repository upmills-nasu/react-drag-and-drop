import { useCallback, useMemo } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';

const baseStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    width: 200,
    height: 150,
    marginLeft: 20,
    padding: 10
};
const borderNormalStyle = {
    border: "1px dotted #888"
};
const borderDragStyle = {
    border: "1px solid #00f",
    transition: "border .5s ease-in-out"
};
function App() {
  const onDrop = useCallback((files) => {
    files.forEach((file: FileWithPath) => {
      const reader = new FileReader();
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        const binaryStr = reader.result;
        console.log(file.name, binaryStr);
      }
      reader.readAsArrayBuffer(file);
    });
    console.log(files);
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    open,
    acceptedFiles
  } = useDropzone({ onDrop, noClick: true });
  const style = useMemo(() => (
      { ...baseStyle, ...(isDragActive ? borderDragStyle : borderNormalStyle)}
  ), [isDragActive]);
  const files = useMemo(() => 
      acceptedFiles.map((file: FileWithPath) => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      )
  ), [acceptedFiles]);
  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
          {
            isDragActive ?
              <p>複数ファイルでもファイル選択の両方OK</p> :
              <p>ここにドラッグ＆ドロップ</p>
          }
        <button type="button" onClick={open}>Select files</button>
      </div>
      <aside className="mt-1">
        <h4 className="mb-3">Fileリスト</h4>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}

export default App;