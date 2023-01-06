import { Drawer, List, ListItem } from "@mui/material";
import React from "react";
import { Trans } from "react-i18next";

import { Link } from "react-router-dom";

const Sidebar = ({ open, setOpen }) => {
  return (
    <Drawer
      open={open}
      anchor="right"
      classes={{ paper: "glass text-white p-2 w-52 sm:w-64  md:w-72" }}
      onClose={() => setOpen(false)}>
      <List className="md:ml-4  child-hover:!text-primary">
        <ListItem
          className="w-full text-right !text-white !p-2 !pt-4 child:border-b child:border-slate-600 child:mx-4"
          component={Link}
          to="/">
          <Trans>Home</Trans>
        </ListItem>
        <ListItem
          className="w-full text-right !text-white !p-2 !pt-4 child:border-b child:border-slate-600 child:mx-4"
          component={Link}
          to="/">
          <Trans>About</Trans>
        </ListItem>
        <ListItem
          className="w-full text-right !text-white !p-2 !pt-4 child:border-b child:border-slate-600 child:mx-4"
          component={Link}
          to="/">
          <Trans>Services</Trans>
        </ListItem>
        <ListItem
          className="w-full text-right !text-white !p-2 !pt-4 child:border-b child:border-slate-600 child:mx-4"
          component={Link}
          to="/">
          <Trans>Pricing</Trans>
        </ListItem>
        <ListItem
          className="w-full text-right !text-white !p-2 !pt-4 child:border-b child:border-slate-600 child:mx-4"
          component={Link}
          to="/">
          <Trans>Contact</Trans>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
