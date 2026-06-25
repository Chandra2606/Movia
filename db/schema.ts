export const testimonialSchema = `
CREATE TABLE IF NOT EXISTS testimonials (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  testimonial TEXT NOT NULL,
  created_at TEXT NOT NULL
);`;

export const supportLeadSchema = `
CREATE TABLE IF NOT EXISTS support_leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'ai-chat',
  created_at TEXT NOT NULL
);`;
