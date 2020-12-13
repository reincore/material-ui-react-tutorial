import React, { useState } from "react";

import SaveIcon from "@material-ui/icons/Save";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CheckboxExample = () => {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <FormControlLabel
        label="Testing Checkbox"
        labelPlacement="start"
        control={
          <Checkbox
            checked={checked}
            icon={<SaveIcon />}
            checkedIcon={<SaveIcon />}
            onChange={e => setChecked(e.target.checked)}
            inputProps={{
              "aria-label": "secondary checkbox"
            }}
          />
        }
      />
    </div>
  );
};
export default CheckboxExample;
