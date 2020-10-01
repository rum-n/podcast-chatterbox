import React, { useRef, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API, Storage } from "aws-amplify";
import { onError } from "../libs/errorLib";
import InsideFooter from './../components/footer/InsideFooter';

const GuestPage = ({match}) => {
  const file = useRef(null);
  const { id } = useParams();
  const history = useHistory();
  const [guest, setGuest] = useState(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    function loadGuest() {
      return API.get("guests", `/guests/${id}`);
    }

    async function onLoad() {
      try {
        const guest = await loadGuest();
        const { content, attachment } = guest;

        if (attachment) {
          guest.attachmentURL = await Storage.vault.get(attachment);
        }

        setContent(content);
        setGuest(guest);
      } catch (e) {
        onError(e);
      }
    }

    onLoad();
  }, [id]);


  return (
    <div>
        
        
        <hr className='details-separator'/>
      <InsideFooter/>
    </div>
  );
}

export default GuestPage;