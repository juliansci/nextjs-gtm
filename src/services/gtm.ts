export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG;

declare global {
  interface Window {
    dataLayer: any;
  }
}

export const pageview = (url: string) => {
  if (window && window.dataLayer) {
    window.dataLayer.push({
      event: "pageview",
      page: url,
    });
  }
};
