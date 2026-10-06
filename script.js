import { content } from "./content.js";
import { activities } from "./activities-content.js";

const main = document.querySelector("main");
const routes = new Set(["illy", "productions", "individual-songs", "cs-projects", "activities"]);
let videos = new Map();
const escape = value => String(value).replace(/[&<>"']/g, character => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[character]));

function externalLink(label, url, className = "text-link") {
  return `<a class="${className}" href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)}<span class="link-arrow" aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a>`;
}
function intro(eyebrow, title, description) {
  return `<header class="page-intro"><p class="eyebrow">${escape(eyebrow)}</p><h1>${escape(title)}</h1><p class="intro-text">${escape(description)}</p></header>`;
}
function performerMarker(video) {
  if (video.id !== content.featuredVideoId) return "";
  // Keep the annotation below “ĐÁM” and point from beside pnq's face.
  const arrow = "M 346 270 C 372 263 399 283 424 304 M 399 300 L 424 304 L 417 280";
  return `<span class="performer-marker" aria-hidden="true"><svg viewBox="0 0 1280 720" fill="none"><path class="performer-arrow-outline" d="${arrow}" vector-effect="non-scaling-stroke"/><path class="performer-arrow" d="${arrow}" vector-effect="non-scaling-stroke"/></svg><span class="performer-label">me</span></span>`;
}
function videoPoster(video, priority = false) {
  const identification = video.id === content.featuredVideoId ? "; pnq is the leftmost standing performer" : "";
  return `<button class="video-poster" data-action="play" data-video-id="${escape(video.id)}" aria-label="Play ${escape(video.title)}"><img src="${escape(video.image)}" alt="Video artwork for ${escape(video.title + identification)}" width="1280" height="720" loading="${priority ? "eager" : "lazy"}" ${priority ? 'fetchpriority="high"' : ""}><span class="play-control" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 5v14l11-7z" fill="currentColor"/></svg><span>Play</span></span></button>`;
}
function videoCard(videoId, { featured = false } = {}) {
  const video = videos.get(videoId);
  if (!video) return "";
  const label = content.videoLabels[videoId] || { title: video.title, artists: "" };
  const surface = `<div class="video-surface" data-video-surface="${escape(videoId)}">${videoPoster(video, featured)}</div>`;
  const media = featured ? `<div class="featured-media">${surface}${performerMarker(video)}</div>` : surface;
  return `<article class="video-card ${featured ? "video-card-featured" : ""}">${media}<div class="video-caption"><h3 title="${escape(video.title)}">${escape(label.title)}</h3>${label.artists ? `<p class="video-byline">${escape(label.artists)}</p>` : ""}<div class="video-actions">${externalLink("YouTube", video.url)}<button class="text-button" data-action="stop" data-video-id="${escape(videoId)}" hidden>Close player</button></div></div></article>`;
}
function clubPage() {
  const club = content.club;
  const show = content.show;
  return `<header class="music-heading"><p class="eyebrow">Rap & live performance</p><h1>The ILLY club + Dấu Chân show</h1></header>
    <section class="featured-performance" aria-label="Featured Dấu Chân performance">${videoCard(content.featuredVideoId, { featured: true })}</section>
    <section class="story-section" aria-labelledby="club-heading"><h2 id="club-heading">Meet The ILLY</h2><p class="story-copy">${escape(club.description)}</p><ol class="role-timeline" aria-label="Roles in The ILLY">${club.roles.map(role => `<li><strong>${escape(role.title)}</strong><span>${escape(role.period)}</span></li>`).join("")}</ol><div class="club-links" aria-label="Club profiles">${content.profiles.map(profile => externalLink(profile.label, profile.url)).join("")}</div></section>
    <section class="story-section" aria-labelledby="show-heading"><h2 id="show-heading">Dấu Chân: our benefit show</h2><p class="story-copy">In ${escape(show.period)}, we brought the club’s music to a live audience at a student-run benefit show. I developed the show’s concept and setlist, and wrote and performed music for the event.</p><div class="show-impact" aria-label="Dấu Chân show results"><div class="show-facts">${show.facts.map(fact => `<div><strong>${escape(fact.value)}${fact.suffix ? ` <small>${escape(fact.suffix)}</small>` : ""}</strong><span>${escape(fact.label)}</span></div>`).join("")}</div><p class="donation-note">${escape(show.donation)}</p></div></section>
    <section class="story-section contribution-section" aria-labelledby="contribution-heading"><h2 id="contribution-heading">What I contributed</h2><div class="contribution-list">${club.contributions.map(item => `<section><h3>${escape(item.title)}</h3><p class="story-copy">${escape(item.text)}</p></section>`).join("")}</div></section>
    <section class="story-section" aria-labelledby="more-performances-heading"><h2 id="more-performances-heading">More from the show</h2><div class="related-performances">${content.performanceIds.filter(id => id !== content.featuredVideoId).map(id => videoCard(id)).join("")}</div></section>`;
}
function productionPage() {
  const description = `I release music as ${content.stageNames.join(" and ")}. ${content.songwritingDescription}`;
  return `${intro("Rap writing & releases", "Selected songs", description)}<section class="video-grid production-grid" aria-label="Selected songs">${content.productionIds.map(id => videoCard(id)).join("")}</section>`;
}
function instagramSongCard(song) {
  return `<article class="video-card instagram-song"><a class="video-surface instagram-poster" href="${escape(song.url)}" target="_blank" rel="noopener noreferrer" aria-label="Listen to ${escape(song.title)} on Instagram (opens in a new tab)"><img src="${escape(song.image)}" alt="Instagram artwork for ${escape(song.title)}" loading="lazy"><span class="play-control" aria-hidden="true">Watch on Instagram <span class="link-arrow">↗</span></span></a><div class="video-caption"><h3>${escape(song.title)}</h3><p class="video-byline">pnq · @nauq_nnnn</p><div class="video-actions">${externalLink("Instagram", song.url)}</div></div></article>`;
}
function personalMusicPage() {
  return `${intro("Independent music · pnq / Wyrl", "My own releases", "My personal music, released outside The ILLY. Explore songs and freestyles from my own YouTube channel and Instagram account.")}<div class="club-links personal-profile-links" aria-label="My music profiles">${content.personalProfiles.map(profile => externalLink(profile.label, profile.url, "outline-button")).join("")}</div><section class="personal-music-section" aria-labelledby="personal-instagram-heading"><h2 id="personal-instagram-heading">On my Instagram</h2><div class="video-grid production-grid">${content.personalInstagramSongs.map(instagramSongCard).join("")}</div></section><section class="story-section personal-music-section" aria-labelledby="personal-youtube-heading"><h2 id="personal-youtube-heading">On my YouTube</h2><div class="video-grid production-grid">${content.personalVideoIds.map(id => videoCard(id)).join("")}</div></section>`;
}
function projectMedia(project) {
  if (!project.image) return `<div class="project-media"><div class="project-image project-placeholder"><svg viewBox="0 0 40 32" aria-hidden="true"><rect x="1" y="1" width="38" height="25" rx="2"/><path d="M15 31h10M20 26v5M1 7h38"/></svg><p>Application preview</p><span>Screenshot coming soon</span></div></div>`;
  return `<div class="project-media"><img class="project-image" src="${escape(project.image)}" alt="${escape(project.imageAlt || `${project.title} application screenshot`)}" loading="lazy"></div>`;
}
function projectProductionLink(project) {
  if (project.liveUrl) return externalLink("View production", project.liveUrl, "outline-button");
  return `<button class="outline-button" type="button" disabled title="Production link coming soon" aria-label="View production — link coming soon">View production <span class="button-status">Soon</span></button>`;
}
function projectsPage() {
  return `${intro("Computer science", "CS projects", "Interactive tools for financial research, alongside my sign language translation project.")}<section class="project-list" aria-label="Computer science projects">${content.projects.map(project => `<article class="project-card">${projectMedia(project)}<div class="project-copy"><p class="project-context"><span class="eyebrow">${escape(project.role || project.status)}</span>${project.period ? `<span class="project-date">${escape(project.period)}</span>` : ""}</p><h2>${escape(project.title)}</h2>${project.technologies?.length ? `<ul class="technology-list" aria-label="Technologies">${project.technologies.map(technology => `<li>${escape(technology)}</li>`).join("")}</ul>` : ""}<p class="project-description">${escape(project.description)}</p>${project.contribution ? `<details class="role-details"><summary>Development details</summary><div><p>${escape(project.contribution)}</p>${project.features?.length ? `<ul class="project-features">${project.features.map(feature => `<li>${escape(feature)}</li>`).join("")}</ul>` : ""}</div></details>` : ""}${project.repositoryUrl || project.liveUrl ? `<div class="project-links">${project.repositoryUrl ? externalLink("View code on GitHub", project.repositoryUrl, "outline-button") : ""}${projectProductionLink(project)}${project.walkthroughUrl ? externalLink("Watch walkthrough", project.walkthroughUrl) : ""}</div>` : ""}</div></article>`).join("")}</section>`;
}
function currentRoute() {
  const route = location.hash.slice(1);
  if (route === "dau-chan") return "illy";
  return routes.has(route) ? route : "illy";
}
function conferenceMarker(photo) {
  if (!photo.marker) return "";
  const { labelX, labelY, path } = photo.marker;
  return `<span class="conference-marker" aria-hidden="true"><svg viewBox="0 0 100 100" preserveAspectRatio="none" fill="none"><path class="performer-arrow-outline" d="${escape(path)}" vector-effect="non-scaling-stroke"/><path class="performer-arrow" d="${escape(path)}" vector-effect="non-scaling-stroke"/></svg><span class="conference-marker-label" style="left:${escape(labelX)}%;top:${escape(labelY)}%">me</span></span>`;
}
function conferencePhoto(photo, index) {
  if (!photo.image) return `<div class="conference-photo-placeholder"><svg viewBox="0 0 40 32" fill="none" aria-hidden="true"><rect x="1" y="1" width="38" height="30" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M2 27l10-10 8 8 8-12 10 14"/></svg><span>Photo coming soon</span></div>`;
  return `<button class="gallery-photo-button" data-photo-index="${index}" aria-label="Enlarge photo for ${escape(photo.conference)} ${escape(photo.year)}"><img src="${escape(photo.image)}" alt="${escape(photo.alt)}" loading="${index === 0 ? "eager" : "lazy"}">${conferenceMarker(photo)}<span class="photo-expand" aria-hidden="true">⤢</span></button>`;
}
function competitionCard(competition, category) {
  return `<article class="modeling-card competition-card"><a class="report-media certificate-preview" href="${escape(competition.certificateUrl)}" target="_blank" rel="noopener noreferrer" aria-label="View ${escape(competition.competition)} ${escape(competition.year)} certificate (opens in a new tab)"><img src="${escape(competition.image)}" alt="${escape(competition.imageAlt)}" loading="lazy"></a><div class="modeling-copy"><p class="eyebrow">${escape(category)} · ${escape(competition.competition)}</p><h3>${escape(competition.title)}</h3><p class="project-context"><span>${escape(competition.role)}</span><span class="project-date">${escape(competition.year)}</span></p><p class="project-description">${escape(competition.description)}</p>${competition.contributions?.length ? `<ul class="modeling-contributions">${competition.contributions.map(item => `<li>${escape(item)}</li>`).join("")}</ul>` : ""}<div class="report-bottom"><span class="activity-recognition">${escape(competition.result)}</span>${externalLink("View certificate", competition.certificateUrl, "outline-button")}</div></div></article>`;
}
function activitiesPage() {
  const { mun, report, computerScienceCompetition } = activities;
  return `${intro("Beyond music & code", "More activities", "Debating global issues, modeling real-world problems, and exploring computer science through competitions.")}
    <section class="activity-section" aria-labelledby="mun-heading">
      <div class="activity-section-heading"><h2 id="mun-heading">Model United Nations</h2><p class="activity-period">Delegate · 2024–2026</p></div>
      <p class="activity-summary">${escape(mun.summary)}</p>
      <div class="activity-gallery">${mun.photos.map((photo, index) => `<figure class="activity-photo">${conferencePhoto(photo, index)}<figcaption><h3 class="conference-title">${escape(photo.conference)} <span>${escape(photo.year)}</span></h3><div class="conference-details"><span class="conference-representation">${escape(photo.representation)}</span><span class="activity-recognition">${escape(photo.recognition)}</span></div></figcaption></figure>`).join("")}</div>
      <p class="other-conferences">${escape(mun.otherConferences)}</p>
    </section>
    <section class="activity-section competitions-section" aria-labelledby="competitions-heading">
      <div class="activity-section-heading"><h2 id="competitions-heading">Competitions & honors</h2><p class="activity-period">Math & computer science</p></div>
      ${competitionCard(report, "Math modeling")}
      ${competitionCard(computerScienceCompetition, "Computer science")}
    </section>
    <dialog class="gallery-dialog" aria-labelledby="gallery-dialog-title"><button class="gallery-close" data-action="close-gallery" aria-label="Close photo">✕</button><div class="gallery-dialog-media"><div class="gallery-image-frame"><img class="gallery-dialog-image" alt=""><div class="gallery-annotation"></div></div></div><div class="gallery-dialog-caption"><h2 id="gallery-dialog-title"></h2><p class="gallery-dialog-description"></p></div></dialog>`;
}
function renderRoute({ focus = false } = {}) {
  const route = currentRoute();
  const pages = { illy: clubPage, productions: productionPage, "individual-songs": personalMusicPage, "cs-projects": projectsPage, activities: activitiesPage };
  main.innerHTML = pages[route]();
  document.querySelectorAll("[data-route]").forEach(link => {
    if (link.dataset.route === route) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  document.title = `${content.displayName} | Portfolio`;
  if (focus) {
    window.scrollTo({ top: 0, behavior: "auto" });
    main.focus({ preventScroll: true });
  }
}
main.addEventListener("click", event => {
  const photoButton = event.target.closest("button[data-photo-index]");
  if (photoButton) {
    const photo = activities.mun.photos[Number(photoButton.dataset.photoIndex)];
    if (!photo?.image) return;
    const dialog = main.querySelector(".gallery-dialog");
    const image = dialog.querySelector("img");
    image.src = photo.image;
    image.alt = photo.alt;
    dialog.querySelector(".gallery-annotation").innerHTML = conferenceMarker(photo);
    dialog.querySelector("h2").textContent = `${photo.conference} ${photo.year}`;
    dialog.querySelector(".gallery-dialog-description").textContent = `${photo.representation} · ${photo.recognition}`;
    dialog.showModal();
    return;
  }
  if (event.target.closest('[data-action="close-gallery"]')) {
    main.querySelector(".gallery-dialog").close();
    return;
  }
  const button = event.target.closest("button[data-video-id]");
  if (!button) return;
  const videoId = button.dataset.videoId;
  if (!/^[A-Za-z0-9_-]{11}$/.test(videoId) || !videos.has(videoId)) return;
  const card = button.closest(".video-card");
  const surface = card.querySelector(".video-surface");
  const closeButton = card.querySelector('[data-action="stop"]');
  const video = videos.get(videoId);
  if (button.dataset.action === "stop") {
    surface.innerHTML = videoPoster(video);
    closeButton.hidden = true;
    surface.querySelector("button").focus();
    return;
  }
  // Keep a single performance playing at a time.
  main.querySelectorAll('.video-card iframe').forEach(player => {
    const previousCard = player.closest('.video-card');
    const previousSurface = previousCard.querySelector('.video-surface');
    previousSurface.innerHTML = videoPoster(videos.get(previousSurface.dataset.videoSurface));
    previousCard.querySelector('[data-action="stop"]').hidden = true;
  });
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`;
  iframe.title = video.title;
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  surface.replaceChildren(iframe);
  closeButton.hidden = false;
  iframe.focus();
});
async function initialize() {
  const response = await fetch("./youtube-metadata.json");
  if (!response.ok) throw new Error("Unable to load video information");
  const records = await response.json();
  videos = new Map(records.filter(video => video.title && video.image).map(video => [video.id, video]));
  document.querySelector(".brand-name").textContent = content.displayName;
  document.querySelector(".brand-alias").textContent = `· ${content.stageNames[0]}`;
  document.querySelector(".brand").setAttribute("aria-label", `${content.displayName}, ${content.stageNames[0]}, portfolio home`);
  renderRoute();
  window.addEventListener("hashchange", () => {
    if (location.hash === "#main-content") {
      main.focus({ preventScroll: true });
      return;
    }
    renderRoute({ focus: true });
  });
}
initialize().catch(error => {
  console.error(error);
  main.innerHTML = `<div class="page-intro"><h1>The ILLY</h1><p>Video information couldn’t load. ${externalLink("Explore the club on YouTube", "https://www.youtube.com/@TheILLYminarics")}</p><button class="outline-button" id="retry-loading">Try again</button></div>`;
  document.querySelector("#retry-loading").addEventListener("click", () => location.reload());
});
