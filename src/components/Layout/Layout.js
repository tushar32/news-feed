import React, { Suspense } from "react";
import Container from 'react-bootstrap/Container';
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Spinner } from "react-bootstrap";
import { fallbackRender } from "../fallbackRender";
import { ErrorBoundary, } from "react-error-boundary";
import FallbackLoader from "../fallBackLoader";

const Layout = () => {
    return (
        <>
            <NavBar />
            <Container fluid >
                <ErrorBoundary fallbackRender={fallbackRender}>
                    <Suspense fallback={<FallbackLoader />}>
                        <Outlet/>
                    </Suspense>
                </ErrorBoundary>
            </Container>
        </>
  
    );
  };
  
  export default Layout;
  