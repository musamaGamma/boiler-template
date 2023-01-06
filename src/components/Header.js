import { AppBar } from "@mui/material";
import React from "react";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar>
      <nav>
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
    </AppBar>
  );
};

export default Header;
