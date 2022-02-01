import React, { useState } from "react";
import axios from "axios";

export default function FileUpload() {
  const [file, setFile] = useState(null);

  async function handleSubmit(event: any) {
    event.preventDefault();
    if (file !== null) {
      const data = new FormData();
      data.append("files", file);

      const upload = await axios.post(
        "https://strapi.peaklinems.de/upload",
        data,
        {
          headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        }
      );

      console.log(upload);
    }
  }

  function handleChange(event: any) {
    setFile(event.target.files[0]);
  }

  return (
    <div className="rounded-md">
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="file"
          name="file"
          onChange={(event) => handleChange(event)}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
