import React, { useRef } from "react";
import SparkMD5 from "spark-md5";

const UpLoad = () => {
  // 声明一个叫 “count” 的 state 变量。
  // const [count, setCount] = useState(0);
  // const [num, setNum] = useState(0)
  const fileDom = useRef();
  const submitBtnClick = () => {
    const file = fileDom.current.files[0];
    if (!file) {
      alert("没有上传文件！");
      return;
    }
    console.log(file);
    const fileSize = file.size; // 文件大小
    const chunkSize = 2 * 1024 * 1024; // 切片大小
    const chunks = Math.ceil(fileSize / chunkSize); // 切片数量
    const blobSlice =
      File.prototype.slice ||
      File.prototype.mozSlice ||
      File.prototype.webkitSlice;
    const spark = new SparkMD5.ArrayBuffer();
    const reader = new FileReader();
    let currentChunk = 0;
    reader.onload = function (e) {
      const result = e.target.result;
      spark.append(result);
      currentChunk++;
      if (currentChunk < chunks) {
        loadNext();
        console.log(
          `第${currentChunk}分片解析完成，开始解析${currentChunk + 1}分片`
        );
      } else {
        const md5 = spark.end();
        console.log("解析完成");
        console.log(md5);
      }
    };
    function loadNext() {
      var start = currentChunk * chunkSize;
      var end = start + chunkSize > file.size ? file.size : start + chunkSize;
      reader.readAsArrayBuffer(blobSlice.call(file, start, end));
    }
    loadNext();
  };
  return (
    <div>
      <h1>大文件上传测试</h1>
      <div>
        <h3>自定义上传文件</h3>
        <input ref={fileDom} type="file" name="avatar" />
        <input type="button" onClick={submitBtnClick} value="提交" />
      </div>
    </div>
  );
};

export default UpLoad;
