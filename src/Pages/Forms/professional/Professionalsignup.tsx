import FormNav from "../../Forms/Component/FormNav";
import { ProfessionalFormNav } from "../../../Helper/Data";

import Form from "../Component/Form";
function Professionalsignup() {
  return (
    <div>
      <FormNav Formnavigation={ProfessionalFormNav} />
      <Form />
    </div>
  );
}

export default Professionalsignup;
