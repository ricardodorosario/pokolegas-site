export function toggleSocialPanel(socialPanel, component) {
  component.setState((state) => ({
    ...state,
    socialPanelOpened:
      state.socialPanelOpened !== "" && state.socialPanelOpened === socialPanel
        ? ""
        : socialPanel,
  }));
}
