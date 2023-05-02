import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: React.CSSProperties;
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    heading1?: React.CSSProperties;
    heading2?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
    heading1:true;
    heading2:true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: 'Gilroy',
    body1: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '22px',
      letterSpacing: '0em',
      textAlign: 'left',
      fontStyle:'normal',
      fontFamily:'Arial'
    },
    body2: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '17px',
      letterSpacing: '0.01em',
      textAlign: 'left',
  
    },
    button: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '19px',
      letterSpacing: '0em',
      textAlign: 'left',
      fontStyle:'normal',
      fontFamily:"Arial",
      textTransform: "capitalize",
    },
    h4: {
      display: "flex",
      alignItems: "flex-start",
      alignContent: "flex-start",
      color: "#E8E7F0",
      fontFamily: 'Arial',
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "28px",
      lineHeight: "29px",
      letterSpacing: "-0.005em",
    },
  },
});

export default theme