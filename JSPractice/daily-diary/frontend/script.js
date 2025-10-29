// Config
const API_BASE = "http://localhost:5000/api/diary";
const PAGE_CHAR_LIMIT = 1200;

// State
let currentDateISO = toISO(new Date());
let currentDiary = null;
let currentPage = 1;

// DOM
const openDrawerBtn = document.getElementById("openDrawer");
const drawer = document.getElementById("drawer");
const closeDrawerBtn = document.getElementById("closeDrawer");
const recentDatesEl = document.getElementById("recentDates");
const pageListEl = document.getElementById("pageList");
const pageEditor = document.getElementById("pageEditor");
const saveBtn = document.getElementById("saveBtn");
const charCounter = document.getElementById("charCounter");
const dateLabel = document.getElementById("dateLabel");
const prevDateBtn = document.getElementById("prevDate");
const nextDateBtn = document.getElementById("nextDate");
const pageInfo = document.getElementById("pageInfo");
const newPageBtn = document.getElementById("newPageBtn");
const deletePageBtn = document.getElementById("deletePageBtn");
const jumpDate = document.getElementById("jumpDate");
const goToDateBtn = document.getElementById("goToDate");
const monthPicker = document.getElementById("monthPicker");
const openCalendar = document.getElementById("openCalendar");
const calendarModal = document.getElementById("calendarModal");
const calendarGrid = document.getElementById("calendarGrid");
const closeCalendar = document.getElementById("closeCalendar");
const tagsInput = document.getElementById("tags");
const pageList = document.getElementById("pageList");

// helpers
function toISO(d) {
  const date = d ? new Date(d) : new Date();
  return (
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0")
  );
}
function isoToPretty(iso) {
  const d = new Date(iso);
  return d.toDateString();
}

// Load diary for date (create if missing)
async function loadDiary(dateISO) {
  currentDateISO = dateISO;
  const res = await fetch(`${API_BASE}/${dateISO}`);
  currentDiary = await res.json();
  // default to page 1
  currentPage = 1;
  renderDiary();
  refreshRecentDates();
}

// Render current diary/page
function renderDiary() {
  dateLabel.textContent = isoToPretty(currentDateISO);
  if (!currentDiary) return;
  updatePageList();
  showPage(currentPage);
}

// show page
function showPage(pageNum) {
  const page = currentDiary.pages.find((p) => p.pageNumber === pageNum);
  if (!page) {
    pageEditor.value = "";
    pageInfo.textContent = `Page ${pageNum}`;
    charCounter.textContent = `0 / ${PAGE_CHAR_LIMIT}`;
    return;
  }
  pageEditor.value = page.content || "";
  pageInfo.textContent = `Page ${pageNum} / ${currentDiary.pages.length}`;
  charCounter.textContent = `${pageEditor.value.length} / ${PAGE_CHAR_LIMIT}`;
  tagsInput.value = ""; // tags are free text for now (not stored separately)
}

// Update UI list of pages
function updatePageList() {
  pageListEl.innerHTML = "";
  currentDiary.pages.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = `Page ${p.pageNumber} ${
      p.content && p.content.trim().length > 0 ? "•" : ""
    }`;
    li.onclick = () => {
      currentPage = p.pageNumber;
      showPage(currentPage);
    };
    pageListEl.appendChild(li);
  });
}

// Save current page to server
async function saveCurrentPage() {
  const content = pageEditor.value;
  // auto-split into pages if too long
  if (content.length > PAGE_CHAR_LIMIT) {
    // Save first PAGE_CHAR_LIMIT into current page,
    // create new page(s) with overflow
    let remaining = content;
    // fill current and subsequent pages as needed
    let pageIndex = currentPage - 1; // index in array
    while (remaining.length > 0) {
      const chunk = remaining.slice(0, PAGE_CHAR_LIMIT);
      // ensure diary pages exist
      if (!currentDiary.pages[pageIndex]) {
        currentDiary.pages.push({ pageNumber: pageIndex + 1, content: "" });
      }
      currentDiary.pages[pageIndex].content = chunk;
      remaining = remaining.slice(PAGE_CHAR_LIMIT);
      pageIndex++;
    }
    // if we trimmed pages (i.e., content now shorter than earlier pages), leave them as-is
    // send the full page update to backend for the date
    // we'll update all pages on backend one by one for simplicity
    for (const p of currentDiary.pages) {
      await fetch(API_BASE, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dateISO: currentDateISO,
          pageNumber: p.pageNumber,
          content: p.content,
        }),
      });
    }
    // reload diary
    await loadDiary(currentDateISO);
    // open the page after last filled
    currentPage = Math.min(currentDiary.pages.length, pageIndex);
    showPage(currentPage);
    return;
  }

  // otherwise save just this page
  await fetch(API_BASE, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      dateISO: currentDateISO,
      pageNumber: currentPage,
      content,
    }),
  });

  // update local model
  const p = currentDiary.pages.find((p) => p.pageNumber === currentPage);
  if (p) {
    p.content = content;
    p.updatedAt = new Date();
  } else {
    currentDiary.pages.push({
      pageNumber: currentPage,
      content,
      updatedAt: new Date(),
    });
  }

  // if last page and content nearly full -> create a new empty page so user can continue
  if (
    currentDiary.pages[currentDiary.pages.length - 1].content.length >
    PAGE_CHAR_LIMIT * 0.9
  ) {
    await fetch(`${API_BASE}/new-page`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dateISO: currentDateISO }),
    });
    currentDiary = await (await fetch(`${API_BASE}/${currentDateISO}`)).json();
  }

  updatePageList();
  charCounter.textContent = `${pageEditor.value.length} / ${PAGE_CHAR_LIMIT}`;
}

// Auto-save while typing (debounce)
let saveTimer = null;
pageEditor.addEventListener("input", () => {
  charCounter.textContent = `${pageEditor.value.length} / ${PAGE_CHAR_LIMIT}`;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => saveCurrentPage(), 900);
});

// Navigation
prevDateBtn.addEventListener("click", () => {
  const d = new Date(currentDateISO);
  d.setDate(d.getDate() - 1);
  loadDiary(toISO(d));
});
nextDateBtn.addEventListener("click", () => {
  const d = new Date(currentDateISO);
  d.setDate(d.getDate() + 1);
  loadDiary(toISO(d));
});

// Drawer open/close
openDrawerBtn.onclick = () => drawer.classList.remove("closed");
closeDrawerBtn.onclick = () => drawer.classList.add("closed");

// Recent dates (simple): get last 12 diaries by read from server by iterating last 12 days
async function refreshRecentDates() {
  recentDatesEl.innerHTML = "";
  const list = [];
  for (let i = 0; i < 12; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const iso = toISO(d);
    // try to fetch but don't create new if absent: use GET that creates if missing — that's convenient but it creates entries.
    // to avoid creating too many empty docs, we'll call the endpoint which does create; it's simple for MVP.
    const res = await fetch(`${API_BASE}/${iso}`);
    const diary = await res.json();
    list.push(diary);
  }
  list.forEach((d) => {
    const li = document.createElement("li");
    li.textContent = `${d.dateISO} ${
      d.pages.some((p) => p.content?.trim()) ? "•" : ""
    }`;
    li.onclick = () => {
      drawer.classList.add("closed");
      loadDiary(d.dateISO);
    };
    recentDatesEl.appendChild(li);
  });
}

// New page button
newPageBtn.onclick = async () => {
  await fetch(`${API_BASE}/new-page`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ dateISO: currentDateISO }),
  });
  currentDiary = await (await fetch(`${API_BASE}/${currentDateISO}`)).json();
  currentPage = currentDiary.pages.length;
  renderDiary();
};

// Delete page
deletePageBtn.onclick = async () => {
  if (!confirm("Delete this page?")) return;
  await fetch(API_BASE, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ dateISO: currentDateISO, pageNumber: currentPage }),
  });
  currentDiary = await (await fetch(`${API_BASE}/${currentDateISO}`)).json();
  currentPage = Math.max(1, Math.min(currentPage, currentDiary.pages.length));
  renderDiary();
};

// Jump to date from drawer
goToDateBtn.onclick = () => {
  if (!jumpDate.value) return;
  loadDiary(jumpDate.value);
  drawer.classList.add("closed");
};

// Save button explicit
saveBtn.onclick = () => saveCurrentPage();

// Calendar
openCalendar.onclick = async () => {
  calendarModal.classList.remove("hidden");
  const [yStr, mStr] = (
    monthPicker.value ||
    (() => {
      const now = new Date();
      return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
        2,
        "0"
      )}`;
    })()
  ).split("-");
  const year = parseInt(yStr),
    month = parseInt(mStr);
  document.getElementById("calendarTitle").textContent = `${year} - ${String(
    month
  ).padStart(2, "0")}`;
  // clear grid
  calendarGrid.innerHTML = "";
  // get month overview
  const res = await fetch(
    `${API_BASE}/month/overview?year=${year}&month=${month}`
  );
  const data = await res.json();
  const writtenSet = new Set(data.written || []);
  const first = new Date(year, month - 1, 1);
  const startDow = first.getDay(); // 0..6 (Sun..Sat)
  const days = new Date(year, month, 0).getDate();

  // add blank cells for start offset
  for (let i = 0; i < startDow; i++) {
    const cell = document.createElement("div");
    cell.className = "day-cell";
    calendarGrid.appendChild(cell);
  }

  for (let d = 1; d <= days; d++) {
    const iso = `${year}-${String(month).padStart(2, "0")}-${String(d).padStart(
      2,
      "0"
    )}`;
    const cell = document.createElement("div");
    cell.className = "day-cell";
    if (writtenSet.has(iso)) {
      cell.classList.add("written");
      const dot = document.createElement("div");
      dot.className = "dot";
      cell.appendChild(dot);
    }
    const dayNum = document.createElement("div");
    dayNum.textContent = d;
    cell.prepend(dayNum);
    cell.onclick = () => {
      loadDiary(iso);
      calendarModal.classList.add("hidden");
    };
    calendarGrid.appendChild(cell);
  }
};

closeCalendar.onclick = () => calendarModal.classList.add("hidden");

// initial load
document.addEventListener("DOMContentLoaded", async () => {
  // set monthPicker to current month
  const now = new Date();
  monthPicker.value = `${now.getFullYear()}-${String(
    now.getMonth() + 1
  ).padStart(2, "0")}`;
  await loadDiary(currentDateISO);
});
