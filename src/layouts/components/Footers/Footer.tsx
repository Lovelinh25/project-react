import {
  AppBar,
  Box,
  Container,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import img from "../../image/5065b658abc48a7dc25e86e6bcf93d52.png";
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer: React.FC = () => {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "#FFC900",
          color: "text.secondary",
          py: 3,
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                <img src={img} style={{ width: 200, margin: 5 }} />
              </Typography>
              <Typography variant="body2" component='p'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus, repellendus quos praesentium fuga molestias saepe?
                Atque provident culpa vitae harum ipsa delectus commodi iusto?
                Voluptatem officiis consequuntur blanditiis necessitatibus ea?
              </Typography>
              {/* Add your logo component or image here */}
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Typography variant="subtitle1" color="text.primary" gutterBottom>
                Người Dùng
              </Typography>
              <Link href="#" color="inherit" display="block">
                Features
              </Link>
              <Link href="#" color="inherit" display="block">
                Hướng dẫn thuê
              </Link>
              <Link href="#" color="inherit" display="block">
                Hướng dẫn mua
              </Link>

              {/* <Link href="#" color="inherit" display="block">
              FAQ
            </Link> */}

              <Typography
                variant="subtitle1"
                color="text.primary"
                gutterBottom
                sx={{ marginTop: 2 }}
              >
                Đối Tác
              </Typography>
              <Link href="#" color="inherit" display="block">
                FAQs
              </Link>
              <Link href="#" color="inherit" display="block">
                Trở thành đối tác
              </Link>
              <Link href="#" color="inherit" display="block">
                Hướng dẫn bán
              </Link>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Typography variant="subtitle1" color="text.primary" gutterBottom>
                Truy cập nhanh
              </Typography>
              <Link href="#" color="inherit" display="block">
                Đăng ký
              </Link>
              <Link href="#" color="inherit" display="block">
                Về chúng tôi
              </Link>
              <Link href="#" color="inherit" display="block">
                Sản phẩm
              </Link>
              <Link href="#" color="inherit" display="block">
                Blog
              </Link>
              <Link href="#" color="inherit" display="block">
                Bảo hiểm
              </Link>
              <Link href="#" color="inherit" display="block">
                Điều kiện
              </Link>
              <Link href="#" color="inherit" display="block">
                FAQs
              </Link>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Typography variant="subtitle1" color="text.primary" gutterBottom>
                liên hệ
              </Typography>
              <Typography  color="text.primary" gutterBottom>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                porro 
              </Typography>
              <Typography variant="subtitle1" color="text.primary" gutterBottom>
                Hottline
              </Typography>
              <Link href="#" color="inherit" display="block">
                +65-8831 8705
              </Link>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Typography variant="subtitle1" color="text.primary" gutterBottom>
                SOCIAL MEDIA
              </Typography>
              <IconButton aria-label="Facebook" color="inherit" component="a">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="Twitter" color="inherit" component="a">
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="Instagram" color="inherit" component="a">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="Instagram" color="inherit" component="a">
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label="Instagram" color="inherit" component="a">
                <YouTubeIcon />
              </IconButton>

              <Typography variant="subtitle1" color="text.primary" gutterBottom>
                Email
              </Typography>
              <Link href="#" color="inherit" display="block">
                info@gmail.com
              </Link>
            </Grid>
          </Grid>

          {/* <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ pt: 4 }}
        >
          © 2024 Company Co. All rights reserved.
        </Typography> */}
        </Container>
      </Box>
      <Toolbar
        sx={{
          justifyContent: "center",
          flexDirection: "column",
          margin: "auto",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ pt: 4 }}
        >
          © 2024 Company Co. All rights reserved.
        </Typography>
      </Toolbar>
    </div>
  );
};
