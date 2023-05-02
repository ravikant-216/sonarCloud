import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Mytheme from "../theme/theme";

export interface TextAtomProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1";
  textField: string;
  value: string | number;
}
const theme = createTheme(Mytheme);
const TermTypography = styled(Typography)`
  margin-right: 10px;
  color: #a5a5a6;
`;
const ValueTypography = styled(Typography)`
  text-align: right;
  color: #e8e7f0;
  padding: 0px;
  gap: 12px;
  margin: 8px 0;
`;

const TextBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 12px;
  margin: 8px 0;
`;

function TextAtom({
  variant = "h4",
  textField = "Left Text",
  value = "Right Text",
}: TextAtomProps) {
  let formattedValue = value;
  if (typeof value === "string") {
    const regex = /(\d+\.\d+)/;
    const numberMatch = regex.exec(value);

    if (numberMatch) {
      const numberValue = parseFloat(numberMatch[0]);
      formattedValue = value.replace(numberMatch[0], numberValue.toFixed(2));
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <TextBox className="text-atom">
        <TermTypography variant={variant} className="term">
          {textField}
        </TermTypography>
        <ValueTypography variant={variant} className="value">
          {formattedValue}
        </ValueTypography>
      </TextBox>
    </ThemeProvider>
  );
}

export default TextAtom;
