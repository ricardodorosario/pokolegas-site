export function toggleSocialPanel(event, socialPanel, component) {
  let title = "";
  let imgLogo = "";
  if (event) {
    console.log(event.currentTarget);
    title = event.currentTarget.firstChild.firstChild.alt;
    imgLogo = event.currentTarget.firstChild.firstChild.currentSrc;
  }
  component.setState((state) => ({
    ...state,
    socialPanelOpened:
      state.socialPanelOpened !== "" && state.socialPanelOpened === socialPanel
        ? ""
        : socialPanel,
    title,
    imgLogo,
  }));
}
