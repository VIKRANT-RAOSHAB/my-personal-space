const postGrid = document.getElementById("postGrid");
const blogFilter = document.getElementById("blogFilter");
const emptyState = document.getElementById("emptyState");

function prettyDate(dateString) {
  const date = new Date(dateString + "T12:00:00");
  if (Number.isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric" }).format(date);
}

function renderPosts() {
  const selected = blogFilter.value;
  const posts = (window.blogPosts || []).filter(post => selected === "all" || post.category === selected);
  postGrid.innerHTML = "";
  emptyState.hidden = posts.length > 0;

  posts.forEach((post, index) => {
    const card = document.createElement("article");
    card.className = "post-card";
    const meta = document.createElement("div");
    meta.className = "post-meta";
    const category = document.createElement("span");
    category.className = "post-category";
    category.textContent = post.category || "Notes";
    const date = document.createElement("span");
    date.textContent = prettyDate(post.date || "");
    meta.append(category, date);

    const title = document.createElement("h3");
    title.textContent = post.title || "Untitled";
    const excerpt = document.createElement("p");
    excerpt.textContent = post.excerpt || "";
    const read = document.createElement("button");
    read.className = "post-read";
    read.type = "button";
    read.textContent = "Read entry ↗";
    read.style.cssText = "background:none;border:0;padding:0;text-align:left;cursor:pointer;font:inherit;color:var(--purple)";
    read.addEventListener("click", () => openPost(post));

    card.append(meta, title, excerpt, read);
    postGrid.appendChild(card);
  });
}

function openPost(post) {
  // Lightweight reader using a dialog created in JavaScript.
  let dialog = document.getElementById("postDialog");
  if (!dialog) {
    dialog = document.createElement("dialog");
    dialog.id = "postDialog";
    dialog.className = "post-dialog";
    document.body.appendChild(dialog);
  }
  dialog.innerHTML = "";
  const close = document.createElement("button");
  close.className = "dialog-close";
  close.type = "button";
  close.textContent = "Close ×";
  close.addEventListener("click", () => dialog.close());
  const category = document.createElement("p");
  category.className = "eyebrow";
  category.textContent = `${post.category || "Notes"} / ${prettyDate(post.date || "")}`;
  const title = document.createElement("h2");
  title.textContent = post.title || "Untitled";
  const body = document.createElement("p");
  body.className = "dialog-body";
  body.textContent = post.body || post.excerpt || "";
  dialog.append(close, category, title, body);
  if (typeof dialog.showModal === "function") dialog.showModal();
  else alert(`${post.title}\n\n${post.body || post.excerpt || ""}`);
}

blogFilter.addEventListener("change", renderPosts);
renderPosts();
document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
