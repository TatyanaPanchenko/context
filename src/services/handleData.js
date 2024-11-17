export async function getData(setValueContext) {
  const response = await fetch("http://localhost:3001/posts");
  const data = await response.json();
  setValueContext(data);
}

// export function setData(title, text, setUpdateContext) {
//   // e.preventDefault();
//   fetch("http://localhost:3001/posts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(title, text),
//   })
//     .then((result) => result.json())
//     .then((data) => setUpdateContext(data));
// }
