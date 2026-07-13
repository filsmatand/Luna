import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-HGFF9ED49R");
};

export const trackPageView = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};