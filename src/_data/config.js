// Config for the entire site.
module.exports = {
  // Site title.
  title: "Ankur Taneja",

  // Default description for pages. Provide "description" in the front matter of
  // a page to override this.
  description: "Contact information for Ankur Taneja",

  // Site URLs.
  baseUrl: "https://www.ankurtaneja.com", // No slash at the end.
  shortBaseUrl: "www.ankurtaneja.com", // Same as baseUrl but without http or https.

  // Your name.
  name: "Ankur Taneja",

  // Profile picture on home page. Set to null to leave out.
  profilePic: {
    best: "https://d35hr0os3yc7ki.cloudfront.net/AnkurTaneja/Ankur_1.jpg",
    small: "https://d35hr0os3yc7ki.cloudfront.net/AnkurTaneja/Ankur_1.jpg",
  },

  // Name pronunciation. Set to null to leave out.
  pronunciation: "https://d35hr0os3yc7ki.cloudfront.net/AnkurTaneja/Ankur_audio.mp3",

  // Tagline that shows up below the profile picture on the home page and below
  // the name on the business card. Set to null to leave out.
  tagline: "Tech Evangelist at Tagglabs",

  // Path to Open Graph image. Change this URL whenever the image changes so
  // that sites like FB change their preview. Set to null to leave out.
  openGraph: {
    absolute: true,
    url: "https://d35hr0os3yc7ki.cloudfront.net/AnkurTaneja/Ankur_1.jpg",
  },

  // Path to Twitter preview image. Set to null to leave out.
  twitterPreview: {
    absolute: true,
    url: "https://d35hr0os3yc7ki.cloudfront.net/AnkurTaneja/Ankur_1.jpg",
  },

  // Links to your other websites.
  // - "fa" is the FontAwesome code for the icon; for example, see here:
  //   https://fontawesome.com/v5.15/icons/globe-americas
  // - textColor is configured strangely because tailwind needs to pick up on it
  //   and avoid purging the class name -- see here:
  //   https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
  //   - See tailwind.config.js (in the root of this repo) for how to add custom
  //     colors.
  links: [
    {
      name: "Email",
      desc: "ankur@tagglabs.in",
      url: "mailto:ankur@tagglabs.in",
      fa: "fas fa-envelope",
      textColor: "text-gray-600",
    },
    {
      name: "Twitter",
      desc: "@@AnkurTaneja10",
      url: "https://twitter.com/ankurtaneja10",
      fa: "fab fa-twitter",
      textColor: "text-twitter",
    },
    {
      name: "LinkedIn",
      desc: "@Ankur Taneja",
      url: "https://www.linkedin.com/in/ankur8187/",
      fa: "fab fa-linkedin",
      textColor: "text-linkedin",
    },
     {
      name: "Instagram",
      desc: "@beacon.of_hope",
      url: "https://www.instagram.com/beacon.of_hope/",
      fa: "fab fa-instagram",
      textColor: "text-instagram",
    },
    {
      name: "Save Contact",
      url: "https://d35hr0os3yc7ki.cloudfront.net/AnkurTaneja/Ankur_contact.vcf",
      fa: "fas fa-file-alt",
      textColor: "text-yellow-500",
    },
  ],
};
