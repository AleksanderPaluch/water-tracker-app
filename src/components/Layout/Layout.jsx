import { Suspense } from "react";
import PropTypes from "prop-types";
import Container from "../Container/Container";
import { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";

const Layout = ({ children }) => {
  return (
    <Container>
      <Suspense fallback={<Loader />}>{children}</Suspense>
      <Toaster />
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
