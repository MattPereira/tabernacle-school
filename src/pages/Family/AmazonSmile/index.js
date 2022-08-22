import amazon from "../../../assets/images/family/amazon.png";

const AmazonSmile = () => {
  return (
    <section id="giving" className="py-5">
      <div className="container py-5">
        <div id="amazonSmile">
          <div className="d-flex justify-content-center mb-5">
            <a href="https://smile.amazon.com">
              <img
                src={amazon}
                className="img-fluid mb-5"
                alt="Amazon Smile Logo"
              />
            </a>
          </div>
          <p className="lead">
            AmazonSmile is a program that donates 0.5% of your eligible
            purchases on Amazon to a charity of your choice. All you need to do
            is start your shopping at{" "}
            <a href="https://smile.amazon.com">smile.amazon.com</a>. The
            donation will be made at no extra cost to you and you can choose
            from nearly one million public charitable organizations.
          </p>
          <h5 className="fw-bold">Explanation</h5>
          <p className="lead">
            <a href="https://smile.amazon.com">AmazonSmile</a> is a website
            operated by Amazon with the same products, prices, and shopping
            features as Amazon.com. The difference is that when you shop on
            AmazonSmile, the AmazonSmile Foundation will donate 0.5% of the
            purchase price of eligible products to the charitable organization
            of your choice. Please choose Tabernacle Christian School in
            Concord, CA.
          </p>
          <h5 className="fw-bold">How To Start Using AmazonSmile Today!</h5>
          <p className="lead">
            Sign in to <a href="https://smile.amazon.com">smile.amazon.com</a>{" "}
            on your desktop or mobile phone browser. Search for Tabernacle
            Christian School and make sure to choose the one in Concord, CA!
          </p>
          <h5 className="fw-bold">AmazonSmile With Amazon App</h5>
          <ol>
            <li className="lead">
              Download or update to the latest version of the Amazon Shopping
              app on your phone. You can find it in the{" "}
              <a href="https://apps.apple.com">App Store</a> for iOS or{" "}
              <a href="https://play.google.com">Google Play</a> for Android.
            </li>
            <li className="lead">
              Open the app and find ’Settings’ in the main menu (☰). Tap on
              ‘AmazonSmile’ and follow the on-screen instructions to turn on
              AmazonSmile on your phone.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default AmazonSmile;
