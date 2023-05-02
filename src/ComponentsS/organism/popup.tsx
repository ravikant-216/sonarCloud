import React, { useState } from "react";
import TextAtom from "../atom/text";
import Slider from "../Molecules/slider";
import { ThemeProvider ,styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Box from "@mui/material/Box";
import theme from "../theme/theme";
import Button from "@mui/material/Button";

export interface PopProps {
  onClose: () => void;
}

const OuterBox = styled(Typography)`
  background-color: #201f24;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const LowerButton = styled(Button)`
  display: flex;
  color: #e8e8e9;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  gap: 8px;
  margin-left: 25px;
  margin-top: 20px;
  width: 270px;
  height: 50px;
  background: #6c5dd3;
  border-radius: 12px;
  flex: none;
  order: 6;
  align-self: stretch;
  flex-grow: 0;
  border: none;
  cursor: pointer;
  &:hover,
  &.Mui-focusVisible {
    background: #6c5dd3;
  }
`;

export function Pop({ onClose }: PopProps) {
  const [sliderValue, setSliderValue] = useState<number>(0.0);
  const [interest, setInterest] = useState(0);

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
    const newInterest = (value * 12) / 100;
    setInterest(parseFloat(newInterest.toFixed(2)));
  };

  return (
    <ThemeProvider theme={theme}>
      <OuterBox className="popup">
        <Typography variant="h4">
          <Box display="flex" alignItems="center">
            Summary
            <InfoOutlinedIcon sx={{ color: "#727080", marginLeft: 1 }} />
          </Box>
        </Typography>

        <TextAtom variant="body1" textField="Term" value="12 months" />
        <TextAtom variant="body1" textField="Selected contracts" value={2} />
        <Box className="slider">
          <Slider initialValue={0} onChange={handleSliderChange} />
        </Box>
        <TextAtom
          variant="body1"
          textField="Pay back amount"
          value={`$${sliderValue}`}
        />

        <TextAtom
          variant="body1"
          textField="Rate %"
          value={`(12.00%) $${interest}`}
        />

        <hr></hr>
        <TextAtom
          variant="h6"
          textField="Total Payout"
          value={`$${sliderValue + interest}`}
        />
        <LowerButton onClick={onClose} id="bt">
          Review Your Credit
        </LowerButton>
      </OuterBox>
    </ThemeProvider>
  );
}
