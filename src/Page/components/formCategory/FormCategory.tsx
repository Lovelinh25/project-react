import {
  AppBar,
  Box,
  Divider,
  FormControl,
  InputAdornment,
  MenuItem,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
const dataCategory = ["car1", "car2", "car3"]; // Example data, replace it with your actual data
export const FormCategory = () => {
  const [category, setCategory] = useState<string[]>([]);
  console.log({ category });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCategory(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <form>
      {" "}
      <Paper
        sx={{
          padding: 2,
          margin: 2,
          minWidth: 800,
          backgroundColor: "rgba(0,0,0,0.05)",
        }}
        elevation={4}
      >
        {" "}
        <FormControl fullWidth>
          {" "}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {" "}
            <Box
              sx={{
                width: 10,
                height: 50,
                bgcolor: "#FFC900",
                marginRight: 2,
                borderRadius: "10px",
              }}
            />{" "}
            <Typography variant="h6">
              danh mục thiết bị muốn bán hàng
            </Typography>{" "}
          </Box>{" "}
          <TextField
            label="Danh mục muốn bán hàng"
            sx={{ marginTop: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {" "}
                  <SearchIcon />{" "}
                </InputAdornment>
              ),
            }}
            select
            value={category}
            onChange={handleChange}
            fullWidth
            SelectProps={{ multiple: true }}
          >
            {" "}
            {dataCategory.map((categoryValue) => (
              <MenuItem key={categoryValue} value={categoryValue}>
                {" "}
                {categoryValue}{" "}
              </MenuItem>
            ))}{" "}
          </TextField>{" "}
          <Typography>chọn mode từ thiết bị</Typography>
          <Box width='250'>
            <TextField label='select modu ' select
            value={category}
            onChange={handleChange}
            fullWidth
            >
              <MenuItem value='in'>india</MenuItem>
              <MenuItem value='in'>india</MenuItem>
              <MenuItem value='in'>india</MenuItem>
            </TextField>
          </Box>
        </FormControl>{" "}
      </Paper>{" "}
    </form>
  );
};
