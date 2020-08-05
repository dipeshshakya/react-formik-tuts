import React from "react";

function SimpleForm() {
  return (
    <div>
      <form>
        <label htmlFor="name">Name </label>
        <input type="text" name="Name" id="name" />
        <label htmlFor="email" id="email">
          Email
        </label>
        <input type="email" name="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SimpleForm;
