export default defineContentScript({
  matches: ["https://tweetdeck.twitter.com/"],
  runAt: "document_end",
  main() {
    const selectAccount = (index) => {
      const determineButtonToClick = (buttonElements, index) =>
        index < buttonElements.length
          ? buttonElements[index]
          : buttonElements[0];

      const clickAccountInTheIndex = (index) => {
        const buttons = Array.from(
          document.getElementsByClassName("js-account-item"),
        );
        if (!buttons.length) return;

        const buttonToClick = determineButtonToClick(buttons, index);
        buttonToClick?.click();
      };

      const retweetModal = document.getElementById("actions-modal");
      if (retweetModal?.style?.display === "block") {
        const buttons = Array.from(
          retweetModal.querySelectorAll(".js-account-item"),
        );
        if (!buttons?.length) return;

        const buttonToClick = determineButtonToClick(buttons, index);
        buttonToClick?.click();

        return;
      }

      const replyPopoutButton = document.querySelector(
        'button[title="Popout"]',
      );
      if (replyPopoutButton) {
        replyPopoutButton.click();
        clickAccountInTheIndex(index);
        return;
      }

      const drawerToggleButton =
        document.getElementsByClassName("js-show-drawer")[0];
      const application = document.getElementsByClassName("application")[0];
      if (!drawerToggleButton || !application) return;

      // if the tweet composing drawer is not opened
      if (!application.classList.contains("hide-detail-view-inline")) {
        drawerToggleButton.click();
      }

      clickAccountInTheIndex(index);
    };

    const quote = () =>
      document.querySelector('button[data-action="quote"]')?.click();

    const isTyping = () => {
      // HTML tags to be detected as typing
      const inputTags = ["INPUT", "TEXTAREA", "SELECT"];

      const tagName = document.activeElement.tagName;
      return inputTags.includes(tagName) ? true : false;
    };

    //
    (() => {
      document.onkeydown = (e) => {
        if (!isTyping() && e.shiftKey && e.code.includes("Digit")) {
          e.preventDefault();

          const numKeyIndex = e.code.slice(-1);
          numKeyIndex > 0 ? selectAccount(numKeyIndex - 1) : selectAccount(9);
        }

        if (!isTyping() && e.altKey && e.key === "Enter") {
          quote();
        }
      };
    })();
  },
});
