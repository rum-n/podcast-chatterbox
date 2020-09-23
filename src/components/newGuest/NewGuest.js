import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { onError } from "../../libs/errorLib";
import config from "../../config";
import { API } from "aws-amplify";
import "./styles.css";

const NewGuest = () => {
  const file = useRef(null);
  const history = useHistory();
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return content.length > 0;
  }

  function handleFileChange(event) {
    file.current = event.target.files[0];
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
      alert(
        `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
          1000000} MB.`
      );
      return;
    }
  
    setIsLoading(true);
  
    try {
      await createGuest({ content });
      history.push("/main");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }
  
  function createGuest(guest) {
    return API.post("guests", "/guests", {
      body: guest
    });
  }

  return (
    <div className="new-guest">
      <form className='new-guest-form' onSubmit={handleSubmit}>
          <input
            value={content}
            type="textarea"
            onChange={e => setContent(e.target.value)}
          />
          <label>Attachment</label>
          <input onChange={handleFileChange} type="file" />
        <button
          type="submit"
          disabled={!validateForm() && isLoading}
        >
          {isLoading ? "Loading..." : "Create"}
        </button>
      </form>
    </div>
  );
}

export default NewGuest;