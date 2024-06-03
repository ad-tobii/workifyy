import Form from "../Component/Form"
import FormNav from "../../Forms/Component/FormNav";
import {ClientFormNav } from "../../../Helper/Data";

function Clientsignup() {
  return (
    <div>
      <FormNav Formnavigation={ClientFormNav} />
      <Form />
    </div>
  );
}

export default Clientsignup