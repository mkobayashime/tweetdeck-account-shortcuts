import { defineContentScript } from "wxt/sandbox";

export default defineContentScript({
  matches: ["https://tweetdeck.twitter.com/", "https://x.com/i/tweetdeck*"],
  main() {
    const selectAccount = (index: number) => {
      const determineButtonToClick = (
        buttonElements: Element[],
        index: number,
      ) =>
        index < buttonElements.length
          ? buttonElements[index]
          : buttonElements[0];

      const clickAccountInTheIndex = (index: number) => {
        const buttons = Array.from(
          document.getElementsByClassName("js-account-item"),
        );
        if (!buttons.length) return;

        const buttonToClick = determineButtonToClick(buttons, index);
        if (buttonToClick instanceof HTMLElement) buttonToClick?.click();
      };

      const retweetModal = document.getElementById("actions-modal");
      if (retweetModal?.style?.display === "block") {
        const buttons = Array.from(
          retweetModal.querySelectorAll(".js-account-item"),
        );
        if (!buttons?.length) return;

        const buttonToClick = determineButtonToClick(buttons, index);
        if (buttonToClick instanceof HTMLElement) buttonToClick?.click();

        return;
      }

      const replyPopoutButton = document.querySelector(
        'button[title="Popout"]',
      );
      if (replyPopoutButton instanceof HTMLElement) {
        replyPopoutButton.click();
        clickAccountInTheIndex(index);
        return;
      }

      const drawerToggleButton =
        document.getElementsByClassName("js-show-drawer")[0];
      const application = document.getElementsByClassName("application")[0];
      if (!(drawerToggleButton instanceof HTMLElement) || !application) return;

      // if the tweet composing drawer is not opened
      if (!application.classList.contains("hide-detail-view-inline")) {
        drawerToggleButton.click();
      }

      clickAccountInTheIndex(index);
    };

    const quote = () => {
      const quoteButton = document.querySelector('button[data-action="quote"]');
      if (quoteButton instanceof HTMLElement) quoteButton.click();
    };

    const isTyping = () => {
      // HTML tags to be detected as typing
      const inputTags = ["INPUT", "TEXTAREA", "SELECT"];

      const tagName = document.activeElement?.tagName;
      return inputTags.includes(tagName ?? "");
    };

    //
    (() => {
      document.onkeydown = (e) => {
        if (!isTyping() && e.shiftKey && e.code.includes("Digit")) {
          e.preventDefault();

          const numKeyIndex = Number.parseInt(e.code.slice(-1));
          if (Number.isNaN(numKeyIndex)) return;

          selectAccount(numKeyIndex > 0 ? numKeyIndex - 1 : 9);
        }

        if (!isTyping() && e.altKey && e.key === "Enter") {
          quote();
        }
      };
    })();
  },
});
