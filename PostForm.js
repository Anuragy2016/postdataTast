import "./styles.css";
import { useEffect, useState, memo } from "react";

function PostForm(props) {
  const [title, setTitle] = useState(props.editItem.title);
  const [body, setBody] = useState(props.editItem.body);
  function OnSubmit() {
    props.SubmitHandler({
      userId: 1,
      title: title,
      body: body,
    });
  }
  return (
    <div className="App">
      <div>
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label for="body">Body</label>
        <input
          type="text"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button onClick={OnSubmit}>Submit</button>
    </div>
  );
}
export default memo(PostForm);
