import { Suspense } from "react";
import PropTypes from "prop-types";
import Container from "../Container/Container";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <Container>
      <Suspense fallback={null}>{children}</Suspense>
      <Toaster />
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
