module.exports = {
  // Format date to a readable format (e.g., January 1, 2024)
  format_date: (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  },

  // Pluralize a word based on the number (e.g., "comment" -> "comments" if count > 1)
  pluralize: (word, count) => {
    return count === 1 ? word : `${word}s`;
  },

  // Shorten content to a specific character limit (e.g., for previews)
  shorten_content: (content, limit = 100) => {
    if (content.length > limit) {
      return content.slice(0, limit) + "...";
    }
    return content;
  },
};
