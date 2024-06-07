import Form from "../../Forms/Component/Form";
import FormNav from "../../Forms/Component/FormNav";
import { ClientFormNav } from "../../../Helper/Data";

function Clientsignup() {
  return (
    <div>
      <FormNav Formnavigation={ClientFormNav} />
      <Form text="Sign-up-to-get-Clients" />
    </div>
  );
}

export default Clientsignup;
