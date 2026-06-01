const copyButton = document.querySelector("[data-copy-target]");
const navLinks = Array.from(document.querySelectorAll(".site-nav a[href^='#']"));

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const targetId = copyButton.getAttribute("data-copy-target");
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    const text = target.innerText.trim();

    try {
      await navigator.clipboard.writeText(text);
      const originalText = copyButton.textContent;
      copyButton.textContent = "Copied";

      window.setTimeout(() => {
        copyButton.textContent = originalText;
      }, 1400);
    } catch (error) {
      copyButton.textContent = "Copy failed";
      window.setTimeout(() => {
        copyButton.textContent = "Copy BibTeX";
      }, 1400);
    }
  });
}

if (navLinks.length > 0) {
  const observedSections = navLinks
    .map((link) => {
      const selector = link.getAttribute("href");
      return {
        link,
        section: selector ? document.querySelector(selector) : null,
      };
    })
    .filter((item) => item.section);

  const setActiveLink = (id) => {
    observedSections.forEach(({ link, section }) => {
      const isActive = section.id === id;
      link.classList.toggle("active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  if (observedSections.length > 0) {
    setActiveLink(observedSections[0].section.id);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveLink(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-120px 0px -10% 0px",
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      }
    );

    observedSections.forEach(({ section }) => {
      sectionObserver.observe(section);
    });
  }
}
