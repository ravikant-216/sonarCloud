import React, { useState } from "react";
import Mytheme from "../theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Slider } from "@mui/material";
import Button from "@mui/material/Button/Button";

export interface SliderProps {
  initialValue: number;
  onChange: (value: number) => void;
}

const MainBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextSlide=styled(Typography)
`
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 140%;
color: #A5A5A6;
`;
const ResetButton =styled(Button)`
background: #2d2d30;
border-radius: 12px;
border: none;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: #C9C8CC;
  &:hover, &.Mui-focusVisible {
    background: #2d2d30;
  }
`;

const SliderRange=styled(Slider)
`
::-webkit-Slider-thumb{
  -webkit-appearance:none; 
  width:23px;
  height:23px;
  border-radius:25%;
  background-color:#B4A9FF;
  cursor:pointer;
}

`

const Sliders: React.FC<SliderProps> = ({ initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleValueChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
    onChange(newValue as number);
  };

  const handleResetClick = () => {
    setValue(initialValue);
    onChange(initialValue);
  };

  return (
    <ThemeProvider theme={Mytheme}>
      <Box>
        <MainBox>
          <TextSlide variant="body1" sx={{ color: "#A5A5A6" }}>
            Slide to autoselect
          </TextSlide>
          <ResetButton onClick={handleResetClick}>
            Reset
          </ResetButton>
        </MainBox>
        <SliderRange
          min={0.0}
          max={880000.0}
          step={0.01}
          value={value}
          onChange={handleValueChange}
          sx={{
            color: "#6C5DD3",
            width: "100%",
            height:"8px",
            marginBottom: "10px",
            "& .MuiSlider-rail": {
              backgroundColor: "#3A3A3D"
            },
            "& .MuiSlider-thumb": {
              width: "23px",
                height: "23px",
              backgroundColor: "#6C5DD3",
              border: "3px solid #B4A9FF",
              borderRadius:"5px",
              "&:hover, &.Mui-focusVisible": {
                boxShadow: "none",
              },
            },
          }}
        />
        <Box>
          <Typography
            variant="body1"
            sx={{ color: "#B4A9FF", display: "inline-block", marginRight: 1 }}
          >
            ${value}{" "}
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "inline-block", color: "#A5A5A6" }}
          >
            selected of
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "inline-block", color: "#E8E7F0", marginLeft: 1 }}
          >
            {" "}
            $880000.00
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Sliders;
