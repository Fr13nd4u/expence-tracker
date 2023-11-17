import { FC } from "react";
import { Avatar, Box, IconButton, Typography } from "@mui/material";

import avatar_src from "../../assets/avatar.png";
import bell_icon from "../../assets/bell_icon.png";

interface HeaderTitleProp {
  title: string;
}

const HeaderTitle: FC<HeaderTitleProp> = ({ title }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      marginBottom="36px"
    >
      <Avatar
        alt="Avatar"
        src={avatar_src}
        variant="rounded"
        sx={{ background: "#8234F8", width: "43px", height: "43px" }}
      />

      <Typography variant="h5" sx={{ fontWeight: 500 }}>
        {title}
      </Typography>

      <IconButton>
        <img src={bell_icon} alt="bell" />
      </IconButton>
    </Box>
  );
};

export default HeaderTitle;
