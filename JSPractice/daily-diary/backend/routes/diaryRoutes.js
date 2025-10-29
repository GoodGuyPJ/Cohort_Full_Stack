import express from "express";
import Diary from "../models/Diary.js";

const router = express.Router();

/**
 * Utility: normalize date string YYYY-MM-DD
 */
function dateISOFromStr(d) {
  // if d is Date or string
  const date = d ? new Date(d) : new Date();
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/**
 * Get diary for a date. If doesn't exist, create an empty diary with one page.
 * Query param pageLimit (optional) ignored here; frontend handles pages.
 */
router.get("/:date?", async (req, res) => {
  try {
    const dateParam = req.params.date || undefined;
    const dateISO = dateISOFromStr(dateParam);
    let diary = await Diary.findOne({ dateISO });
    if (!diary) {
      diary = new Diary({
        dateISO,
        pages: [{ pageNumber: 1, content: "" }]
      });
      await diary.save();
    }
    res.json(diary);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * Update / save a specific page content for a date.
 * Body: { dateISO: "YYYY-MM-DD", pageNumber: 1, content: "..." }
 * If pageNumber > existing pages => create pages up to that number.
 */
router.put("/", async (req, res) => {
  try {
    const { dateISO, pageNumber, content } = req.body;
    if (!dateISO || !pageNumber) return res.status(400).json({ error: "dateISO and pageNumber required" });

    let diary = await Diary.findOne({ dateISO });
    if (!diary) {
      diary = new Diary({ dateISO, pages: [] });
    }

    // ensure pages up to pageNumber exist
    while (diary.pages.length < pageNumber) {
      diary.pages.push({ pageNumber: diary.pages.length + 1, content: "" });
    }

    const pageIndex = diary.pages.findIndex(p => p.pageNumber === pageNumber);
    if (pageIndex !== -1) {
      diary.pages[pageIndex].content = content;
      diary.pages[pageIndex].updatedAt = new Date();
    } else {
      diary.pages.push({ pageNumber, content, updatedAt: new Date() });
    }

    await diary.save();
    res.json(diary);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * Create new empty page for a date (use when auto-creating next page)
 * Body: { dateISO }
 * Returns the diary object.
 */
router.post("/new-page", async (req, res) => {
  try {
    const { dateISO } = req.body;
    if (!dateISO) return res.status(400).json({ error: "dateISO required" });
    let diary = await Diary.findOne({ dateISO });
    if (!diary) {
      diary = new Diary({ dateISO, pages: [{ pageNumber: 1, content: "" }] });
    } else {
      const next = diary.pages.length + 1;
      diary.pages.push({ pageNumber: next, content: "" });
    }
    await diary.save();
    res.json(diary);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * Get diary month overview for calendar
 * Query: /month?year=2025&month=10   (month 1..12)
 * Returns array of dateISO strings that have entries (pages non-empty).
 */
router.get("/month/overview", async (req, res) => {
  try {
    const year = parseInt(req.query.year);
    const month = parseInt(req.query.month); // 1-12
    if (!year || !month) return res.status(400).json({ error: "year and month required" });

    // start and end ISO strings
    const start = new Date(year, month - 1, 1);
    const end = new Date(year, month, 0, 23, 59, 59);

    // find diaries in month where at least one page has non-empty content
    const diaries = await Diary.find({
      dateISO: {
        $gte: `${year}-${String(month).padStart(2, "0")}-01`,
        $lte: `${year}-${String(month).padStart(2, "0")}-${String(end.getDate()).padStart(2, "0")}`
      }
    });

    const writtenDates = diaries.filter(d =>
      d.pages.some(p => p.content && p.content.trim().length > 0)
    ).map(d => d.dateISO);

    res.json({ written: writtenDates });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * Delete page
 * Body: { dateISO, pageNumber }
 */
router.delete("/", async (req, res) => {
  try {
    const { dateISO, pageNumber } = req.body;
    if (!dateISO || !pageNumber) return res.status(400).json({ error: "dateISO and pageNumber required" });
    let diary = await Diary.findOne({ dateISO });
    if (!diary) return res.status(404).json({ error: "Diary not found" });

    diary.pages = diary.pages.filter(p => p.pageNumber !== pageNumber);
    // re-number pages
    diary.pages = diary.pages.map((p, idx) => ({ pageNumber: idx + 1, content: p.content, updatedAt: p.updatedAt }));
    await diary.save();
    res.json(diary);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
