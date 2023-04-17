import amazon from "../../../assets/images/family/amazon.png";

import { Typography, Box } from "@mui/material";

const AmazonSmile = () => {
  return (
    <section id="giving" className="py-5">
      <div className="container">
        <div id="amazonSmile">
          <div className="d-flex justify-content-center mb-5">
            <a href="https://smile.amazon.com">
              <img src={amazon} className="img-fluid" alt="Amazon Smile Logo" />
            </a>
          </div>
          <Typography variant="p">
            AmazonSmile is a program that donates 0.5% of your eligible
            purchases on Amazon to a charity of your choice. All you need to do
            is start your shopping at{" "}
            <a href="https://smile.amazon.com">smile.amazon.com</a>. The
            donation will be made at no extra cost to you and you can choose
            from nearly one million public charitable organizations.
          </Typography>
          <Box sx={{ my: 3 }}>
            <Typography variant="h5">Explanation</Typography>
            <Typography variant="p">
              <a href="https://smile.amazon.com">AmazonSmile</a> is a website
              operated by Amazon with the same products, prices, and shopping
              features as Amazon.com. The difference is that when you shop on
              AmazonSmile, the AmazonSmile Foundation will donate 0.5% of the
              purchase price of eligible products to the charitable organization
              of your choice. Please choose Tabernacle Christian School in
              Concord, CA.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5">
              How To Start Using AmazonSmile Today!
            </Typography>
            <Typography variant="p">
              Sign in to <a href="https://smile.amazon.com">smile.amazon.com</a>{" "}
              on your desktop or mobile phone browser. Search for Tabernacle
              Christian School and make sure to choose the one in Concord, CA!
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5">AmazonSmile With Amazon App</Typography>

            <ol>
              <li>
                <Typography variant="p">
                  Download or update to the latest version of the Amazon
                  Shopping app on your phone. You can find it in the{" "}
                  <a href="https://apps.apple.com">App Store</a> for iOS or{" "}
                  <a href="https://play.google.com">Google Play</a> for Android.
                </Typography>
              </li>
              <li>
                <Typography variant="p">
                  Open the app and find ’Settings’ in the main menu (☰). Tap on
                  ‘AmazonSmile’ and follow the on-screen instructions to turn on
                  AmazonSmile on your phone.
                </Typography>
              </li>
            </ol>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default AmazonSmile;
