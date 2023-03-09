import * as Automerge from "@automerge/automerge";
import { v4 as uuidv4 } from "uuid";

let doc = Automerge.init();
let docId = uuidv4();
let actorId = Automerge.getActorId(doc);

function addItem(text) {
  console.log(text);
  // let newDoc = Automerge.change(doc, (doc) => {
  //   if (!doc.items) doc.items = [];
  //   doc.items.push({ text });)}
  // updateDoc(newDoc);
  let binary = Automerge.save(newDoc);
  // console.log(binary);
  // localForage.setItem(docId, binary).catch((err) => console.log(err));
}
function updateDoc(newDoc) {
  doc = newDoc;
  console.log(doc.items);
}

const autoMerge = {
  addItem,
  updateDoc,
};
export default autoMerge;
