import React from "react";

import { TextsComboBox } from "../../components/TextsComboBox/TextsComboBox";
import { EditDailyMessageForm } from "../../components/EditDailyMessageForm/EditDailyMessageForm";
export const EditText = ({
  texts,
  setTexts,
  selectedText,
  setSelectedText,
  
}) => {
  if (texts && selectedText) {
    return (
      <div>
        <TextsComboBox
          texts={texts}
          selectedText={selectedText}
          setSelectedText={setSelectedText}
        />
        <EditDailyMessageForm
          texts={texts}
          setTexts={setTexts}
          selectedText={selectedText}
          setSelectedText={setSelectedText}
          
        />
      </div>
    );
  }
};
