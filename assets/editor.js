wp.domReady(() => {
  /**
   * Conditionally add/remove body class "het-template-hides-title" of the gutenberg iframe
   * wheather the current template is "No Title" or not.
   */
  const het_conditionalBodyClass = () => {
    const currentTemplate = wp.data
      .select("core/editor")
      .getEditedPostAttribute("template");

    // Gutenberg editor runs in an iframe
    const iframe = document.querySelector('iframe[name="editor-canvas"]');
    const iframeBody = iframe?.contentWindow?.document?.body;

    if (iframeBody) {
      const hetClassName = "het-template-hides-title";

      if (currentTemplate === "no-title") {
        iframeBody.classList.add(hetClassName);
      } else {
        iframeBody.classList.remove(hetClassName);
      }
    }
  };

  // Runs on init and on every change in the editor
  wp.data.subscribe(het_conditionalBodyClass);
});
