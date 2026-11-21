/* ==========================================================================
   Kuća Vivaldi ★★★★ — Interactive Logic
   ========================================================================== */

(() => {
  const UNITS = {
    s1: {
      nameHr: "Superior Dvokrevetna Soba (S1)",
      nameEn: "Superior Double Room (S1)",
      price: 165,
      img: "images/vivaldi-01.jpg",
    },
    s2: {
      nameHr: "Deluxe Kamena Soba (S2)",
      nameEn: "Deluxe Stone Room (S2)",
      price: 185,
      img: "images/vivaldi-03.jpg",
    },
    s3: {
      nameHr: "Comfort Romantična Soba (S3)",
      nameEn: "Comfort Romantic Room (S3)",
      price: 150,
      img: "images/vivaldi-02.jpg",
    },
    house: {
      nameHr: "Cijela Kuća Vivaldi (do 6 gostiju)",
      nameEn: "Entire Vivaldi House (up to 6 guests)",
      price: 460,
      img: "images/vivaldi-18.jpg",
    },
  };

  const TRANSLATIONS = {
    en: {
      nav_about: "The House",
      nav_rooms: "Accommodation",
      nav_amenities: "Amenities",
      nav_gallery: "Gallery",
      nav_location: "Location",
      nav_reviews: "Reviews",
      nav_book: "Book Now",
      hero_eyebrow: "NALJEŠKOVIĆEVA 23 · DUBROVNIK OLD TOWN",
      hero_title: "Stone elegance in the heart<br /><em>of Dubrovnik Old Town</em>",
      hero_lead:
        "An authentic 4-star stone residence inside the historic city walls — blending timeless baroque charm, warm Dalmatian stone, and modern luxury just steps from Stradun.",
      hero_cta_book: "Book Your Stay",
      hero_cta_gallery: "Explore Gallery",
      label_checkin: "Check-in",
      label_checkout: "Check-out",
      label_guests: "Guests",
      label_unit: "Accommodation",
      btn_check: "Check Price",
      trust_rating: "Booking.com Guest Rating",
      trust_stars: "Official Classification",
      trust_stradun: "Walk to Stradun",
      trust_rooms: "Or Whole House Rental",
      about_eyebrow: "THE STORY OF VIVALDI",
      about_title: "Where centuries-old stone meets serene luxury",
      about_p1:
        "Tucked along the sunlit stone alleyway of Nalješkovićeva 23, House Vivaldi is a lovingly restored historic Dubrovnik home preserving the authentic spirit of the Old Town. Step through the dark pine doors and past the cello in the stone stairwell to feel its unmistakable warmth.",
      about_p2:
        "The house offers three spacious double rooms that can be booked individually or together as an <strong>entire private residence</strong> for family and friends up to 6 guests. Exposed stone walls, antique carved mirrors, brass bathroom fixtures, underfloor heating, and morning coffee on the limestone steps create an unforgettable stay.",
      hl_authentic: "Original restored Dubrovnik stone",
      hl_year: "Underfloor heating & A/C year-round",
      rooms_eyebrow: "ACCOMMODATION",
      rooms_title: "Choose your Old Town sanctuary",
      rooms_sub:
        "Reserve one of our three refined double rooms or rent the entire Vivaldi House for complete privacy.",
      badge_popular: "Most Popular",
      meta_2guests: "Up to 2 guests",
      room1_desc:
        "Spacious ground-floor room with private entrance straight off the stone lane, original stone wall, French provincial armchairs, SMEG coffee station, and marble walk-in shower.",
      room2_desc:
        "Bright upper-floor room with traditional green wooden shutters, warm chandelier, cozy seating area with SAT LCD TV, minibar, and brass-accented marble bathroom.",
      room3_desc:
        "Intimate, tastefully appointed double room ideal for couples seeking peaceful comfort in the very heart of Dubrovnik, with premium soundproofing and modern amenities.",
      price_from: "from",
      price_night: "/ night",
      btn_select: "Select",
      house_eyebrow: "EXCLUSIVE RENTAL",
      house_title: "Entire Vivaldi House — exclusively yours",
      house_desc:
        "Traveling with family or friends? Book all three rooms and enjoy complete privacy in your own stone residence within Dubrovnik's walls — 3 bedrooms, 3 private bathrooms, up to 6 guests.",
      btn_book_house: "Book Entire House",
      amen_eyebrow: "EFFORTLESS COMFORT",
      amen_title: "Thoughtfully curated amenities",
      am1_t: "Free High-Speed Wi-Fi",
      am1_d: "Reliable fiber connection throughout the entire house.",
      am2_t: "A/C & Underfloor Heating",
      am2_d: "Refreshing coolness in summer and cozy warmth in winter.",
      am3_t: "SMEG Coffee & Tea Corner",
      am3_d: "Electric kettle, espresso maker, minibar, and wine glasses.",
      am4_t: "Marble Bathroom",
      am4_d: "Walk-in shower, plush bathrobes, hair dryer, and fine toiletries.",
      am5_t: "SAT LCD TV & Safe",
      am5_d: "Flat-screen satellite television and personal safety deposit box.",
      am6_t: "Transfer & Concierge",
      am6_d: "Airport pickup arrangement and curated local host tips.",
      gal_eyebrow: "AUTHENTIC PHOTOGRAPHY",
      gal_title: "Step inside House Vivaldi",
      flt_all: "All",
      flt_int: "Interior",
      flt_det: "Bathroom & Details",
      flt_ext: "Exterior & Old Town",
      loc_eyebrow: "UNBEATABLE LOCATION",
      loc_title: "Right in the heart of Old Town",
      loc_desc:
        "Nalješkovićeva 23 sits inside the UNESCO-protected historic core. Every iconic Dubrovnik landmark, restaurant, gallery, and hidden cliffside beach is just a short stroll away.",
      loc_addr_label: "PROPERTY ADDRESS",
      loc_gmaps: "Open in Google Maps →",
      rev_eyebrow: "GUEST IMPRESSIONS",
      rev_title: "Exceptional 9.6 / 10 Rating",
      book_eyebrow: "DIRECT RESERVATION",
      book_title: "Send an inquiry or reserve",
      book_sub:
        "Fill in your dates for a fast direct confirmation with zero hidden fees. We reply promptly.",
      label_name: "Full Name",
      label_email: "Email Address",
      label_phone: "Phone / WhatsApp",
      label_arrival: "Estimated Arrival",
      label_notes: "Special Requests (optional)",
      btn_submit: "Send Reservation Request",
      sum_dates: "Dates",
      sum_nights: "Nights",
      sum_rate: "Nightly Rate",
      sum_tax: "City tax & cleaning",
      sum_included: "Included",
      sum_total: "Estimated Total",
      sum_t1: "Direct communication with the host",
      sum_t2: "Check-in from 14:00 · Check-out by 10:00",
      sum_t3: "Best rate for direct inquiries",
      btn_bookingcom: "View listing on Booking.com →",
      footer_desc:
        "Authentic 4-star stone vacation house in the heart of Dubrovnik's historic Old Town.",
      footer_nav: "Navigation",
      footer_contact: "Contact",
      mod_title: "Inquiry Received",
      mod_ref: "Reference:",
      mod_ok: "Close",
    },
  };

  let currentLang = "hr";
  const hrSnapshots = {};

  // Cache original Croatian strings
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    hrSnapshots[el.dataset.i18n] = el.innerHTML;
  });

  // Current year in footer
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header scroll effect & mobile navigation
  const header = document.getElementById("siteHeader");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Language toggle (HR / EN)
  const langToggle = document.getElementById("langToggle");
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "hr" ? "en" : "hr";
    document.documentElement.lang = currentLang;

    const spans = langToggle.querySelectorAll("span");
    spans[0].classList.toggle("lang-active", currentLang === "hr");
    spans[1].classList.toggle("lang-active", currentLang === "en");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (currentLang === "en" && TRANSLATIONS.en[key]) {
        el.innerHTML = TRANSLATIONS.en[key];
      } else if (hrSnapshots[key]) {
        el.innerHTML = hrSnapshots[key];
      }
    });

    updateSummary();
  });

  // Date helpers
  const formatISO = (date) => date.toISOString().split("T")[0];
  const formatHuman = (isoStr) => {
    if (!isoStr) return "—";
    const [y, m, d] = isoStr.split("-");
    return `${d}.${m}.${y}.`;
  };

  const today = new Date();
  const defaultIn = new Date(today);
  defaultIn.setDate(today.getDate() + 7);
  const defaultOut = new Date(defaultIn);
  defaultOut.setDate(defaultIn.getDate() + 3);

  const quickCheckin = document.getElementById("quickCheckin");
  const quickCheckout = document.getElementById("quickCheckout");
  const quickGuests = document.getElementById("quickGuests");
  const quickUnit = document.getElementById("quickUnit");

  const bookCheckin = document.getElementById("bookCheckin");
  const bookCheckout = document.getElementById("bookCheckout");
  const bookGuests = document.getElementById("bookGuests");
  const bookUnit = document.getElementById("bookUnit");

  const minDateStr = formatISO(today);
  [quickCheckin, quickCheckout, bookCheckin, bookCheckout].forEach((input) => {
    input.min = minDateStr;
  });

  quickCheckin.value = formatISO(defaultIn);
  quickCheckout.value = formatISO(defaultOut);
  bookCheckin.value = formatISO(defaultIn);
  bookCheckout.value = formatISO(defaultOut);

  // Dynamic Summary Calculator
  const summaryImg = document.getElementById("summaryImg");
  const summaryUnitName = document.getElementById("summaryUnitName");
  const summaryDates = document.getElementById("summaryDates");
  const summaryNights = document.getElementById("summaryNights");
  const summaryRate = document.getElementById("summaryRate");
  const summaryTotal = document.getElementById("summaryTotal");

  function getNights(inVal, outVal) {
    const d1 = new Date(inVal);
    const d2 = new Date(outVal);
    const diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  }

  function updateSummary() {
    const unitKey = bookUnit.value;
    const unit = UNITS[unitKey] || UNITS.s1;

    // Ensure checkout is after checkin
    if (bookCheckin.value && bookCheckout.value && bookCheckout.value <= bookCheckin.value) {
      const nextDay = new Date(bookCheckin.value);
      nextDay.setDate(nextDay.getDate() + 1);
      bookCheckout.value = formatISO(nextDay);
    }

    const nights = getNights(bookCheckin.value, bookCheckout.value);
    const total = nights * unit.price;

    summaryImg.src = unit.img;
    summaryUnitName.textContent = currentLang === "en" ? unit.nameEn : unit.nameHr;
    summaryDates.textContent = `${formatHuman(bookCheckin.value)} – ${formatHuman(bookCheckout.value)}`;

    if (currentLang === "en") {
      summaryNights.textContent = `${nights} ${nights === 1 ? "night" : "nights"}`;
    } else {
      summaryNights.textContent = `${nights} ${nights === 1 ? "noćenje" : "noćenja"}`;
    }

    summaryRate.textContent = `${unit.price} €`;
    summaryTotal.textContent = `${total} €`;
  }

  [bookUnit, bookCheckin, bookCheckout, bookGuests].forEach((el) => {
    el.addEventListener("change", updateSummary);
  });
  updateSummary();

  // Quick availability form -> sync to full booking form & scroll
  const quickForm = document.getElementById("quickBookingForm");
  quickForm.addEventListener("submit", (e) => {
    e.preventDefault();
    bookCheckin.value = quickCheckin.value;
    bookCheckout.value = quickCheckout.value;
    bookGuests.value = quickGuests.value;
    bookUnit.value = quickUnit.value;
    updateSummary();
    document.getElementById("rezervacija").scrollIntoView({ behavior: "smooth" });
  });

  // Room card "Odaberi" buttons
  document.querySelectorAll(".select-room-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      bookUnit.value = btn.dataset.unit;
      if (btn.dataset.guests) {
        bookGuests.value = btn.dataset.guests;
      }
      updateSummary();
      document.getElementById("rezervacija").scrollIntoView({ behavior: "smooth" });
    });
  });

  // Booking Form Submit -> Confirmation Modal
  const bookingForm = document.getElementById("bookingForm");
  const confirmModal = document.getElementById("confirmModal");
  const confirmMessage = document.getElementById("confirmMessage");
  const confirmRef = document.getElementById("confirmRef");
  const confirmClose = document.getElementById("confirmClose");
  const confirmOk = document.getElementById("confirmOk");

  const closeConfirmModal = () => {
    confirmModal.classList.remove("open");
    confirmModal.setAttribute("aria-hidden", "true");
  };

  confirmClose.addEventListener("click", closeConfirmModal);
  confirmOk.addEventListener("click", closeConfirmModal);
  confirmModal.addEventListener("click", (e) => {
    if (e.target === confirmModal) closeConfirmModal();
  });

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("bookName").value.trim();
    const unit = UNITS[bookUnit.value] || UNITS.s1;
    const nights = getNights(bookCheckin.value, bookCheckout.value);
    const total = nights * unit.price;
    const ref = `VIV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    confirmRef.textContent = ref;
    if (currentLang === "en") {
      confirmMessage.textContent = `Thank you, ${name}! Your request for ${unit.nameEn} (${formatHuman(bookCheckin.value)} – ${formatHuman(bookCheckout.value)}, estimated ${total} €) has been logged. Our host will contact you shortly to finalize your stay.`;
    } else {
      confirmMessage.textContent = `Hvala, ${name}! Vaš upit za ${unit.nameHr} (${formatHuman(bookCheckin.value)} – ${formatHuman(bookCheckout.value)}, okvirno ${total} €) je zaprimljen. Domaćin će vam se javiti u najkraćem roku radi potvrde.`;
    }

    confirmModal.classList.add("open");
    confirmModal.setAttribute("aria-hidden", "false");
    bookingForm.reset();
    bookCheckin.value = formatISO(defaultIn);
    bookCheckout.value = formatISO(defaultOut);
    updateSummary();
  });

  // Gallery Filtering & Lightbox
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;

      galleryItems.forEach((item) => {
        const match = filter === "all" || item.dataset.category === filter;
        item.classList.toggle("hidden", !match);
      });
    });
  });

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");

  let activeLightboxItems = [];
  let currentIndex = 0;

  function showLightboxImage(idx) {
    if (!activeLightboxItems.length) return;
    currentIndex = (idx + activeLightboxItems.length) % activeLightboxItems.length;
    const item = activeLightboxItems[currentIndex];
    const img = item.querySelector("img");
    const cap = item.querySelector("figcaption");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = cap ? cap.textContent : img.alt;
  }

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      activeLightboxItems = galleryItems.filter((el) => !el.classList.contains("hidden"));
      const idx = activeLightboxItems.indexOf(item);
      showLightboxImage(idx);
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  };

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => showLightboxImage(currentIndex - 1));
  lightboxNext.addEventListener("click", () => showLightboxImage(currentIndex + 1));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showLightboxImage(currentIndex - 1);
    if (e.key === "ArrowRight") showLightboxImage(currentIndex + 1);
  });

  // Scroll Reveal Animation
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }
})();
