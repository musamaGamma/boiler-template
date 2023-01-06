import { AppBar, Button, IconButton, Menu } from "@mui/material";
import React from "react";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
//icons
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <AppBar
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        background: "white",
        color: "black",
      }}>
      <div>logo</div>
      <nav className="child:mx-2 hidden md:block">
        <Link>
          <Trans>Home</Trans>
        </Link>
        <Link>
          <Trans>About</Trans>
        </Link>
        <Link>
          <Trans>Services</Trans>
        </Link>
        <Link>
          <Trans>Pricing</Trans>
        </Link>
        <Link>
          <Trans>Contact</Trans>
        </Link>
      </nav>
      {/* CTA button */}

      <div className="child:!mx-2">
        <Button
          variant="contained"
          color="primary"
          className="!rounded-xl !font-bold !px-4 !hidden sm:!inline-block">
          contact us
        </Button>
        <IconButton className="md:!hidden">
          <MenuIcon />
        </IconButton>
      </div>
    </AppBar>
  );
};

export default Header;
