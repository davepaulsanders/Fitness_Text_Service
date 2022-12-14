import React from "react";
import { ComboBox } from "../../components/ComboBox/ComboBox";
import { MessageForm } from "../../components/MessageForm/MessageForm";
export const SendText = ({
  clients,
  selected,
  setSelected,
  selectedGroup,
  setSelectedGroup,
}) => {
  return (
    <div>
      <ComboBox
        singleSelection={false}
        clients={clients}
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
      />
      <MessageForm
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
      />
    </div>
  );
};
