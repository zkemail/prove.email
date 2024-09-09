"use client";

import React from "react";
import { Link, SvgIconProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface IconLinkProps {
  href: string;
  IconComponent: React.ComponentType<SvgIconProps>;
  dark?: boolean;
  size?: "small" | "medium" | "large";
  target?: boolean;
}

const IconLink: React.FC<IconLinkProps> = ({
  href,
  IconComponent,
  dark,
  size = "medium",
  target = false,
}) => {
  const theme = useTheme();

  const getSize = () => {
    switch (size) {
      case "small":
        return "16px";
      case "large":
        return "32px";
      case "medium":
      default:
        return "24px";
    }
  };

  return (
    <Link
      href={href}
      target={target ? "_self" : "_blank"}
      color="inherit"
      underline="none"
      sx={{
        padding: "0px",
        lineHeight: "0px",
        marginTop: "0px",
        fontSize: getSize(),
        [theme.breakpoints.down("sm")]: {
          fontSize: getSize(),
        },
      }}
    >
      <IconComponent sx={{ color: dark ? 'white' : 'black', fontSize: 'inherit', "&:hover": { color: theme.palette.secondary.main } }} />
    </Link>
  );
};

export default IconLink;
