import React from "react";

import { TextsComboBox } from "../../components/TextsComboBox/TextsComboBox";
export const EditText = ({ texts, selectedText, setSelectedText }) => {
  if (texts && selectedText) {
    return (
      <div>
        <TextsComboBox
          texts={texts}
          selectedText={selectedText}
          setSelectedText={setSelectedText}
        />
      </div>
    );
  }
};
