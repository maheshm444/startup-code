import { withTranslation } from "react-i18next";
import { StyledTextArea, StyledContainer, Label } from "./styles";
import { InputProps } from "../types";

const TextArea = ({ name, display_tile, placeholder, onChange, t }: InputProps) => (
  <StyledContainer>
    {name && display_tile && <Label htmlFor={name}>{t(name)}</Label>}
    <StyledTextArea
      placeholder={t(placeholder)}
      id={name}
      name={name}
      onChange={onChange}
    />
  </StyledContainer>
);

export default withTranslation()(TextArea);
