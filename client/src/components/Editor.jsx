import React, { useEffect, useState } from "react";
import * as localForage from "localforage";

const Editor = ({ autoMerge }) => {
  const [content, setContent] = useState("Your first note here");
  const handleChangeContent = (e) => {
    // console.log(e.target.value);
    console.log(autoMerge.addItem);
    // autoMerge.addItem(e.target.value);
    setContent(e.target.value);
  };

  let onLoad = async () => {
    let binary = await localForage.getItem(docId);
    setContent(binary);
  };

  useEffect(() => {}, []);

  return (
    <div className="  w-full h-full ">
      {/* <SearchPill/> */}
      {/* <ActionPill/> */}
      <textarea
        className="editor card-content outline-none focus:outline-none p-10  
        absolute top-1/2 left-1/2 white-text w-4/5  h-4/5 -translate-x-1/2 -translate-y-1/2 bg-ternary
        text-xl text-white rounded-lg resize-none"
        autoFocus={true}
        onChange={handleChangeContent}
      ></textarea>
    </div>
  );
};

export default Editor;
