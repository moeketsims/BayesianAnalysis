import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dataDir = join(root, "data");
mkdirSync(dataDir, { recursive: true });

let seed = 20260511;

function random() {
  seed = (1664525 * seed + 1013904223) % 4294967296;
  return seed / 4294967296;
}

function normal(mean = 0, sd = 1) {
  const u1 = Math.max(random(), 1e-12);
  const u2 = random();
  return mean + sd * Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
}

function logistic(x) {
  return 1 / (1 + Math.exp(-x));
}

function choice(values) {
  return values[Math.floor(random() * values.length)];
}

function csvEscape(value) {
  if (typeof value === "number") return Number.isInteger(value) ? String(value) : value.toFixed(3);
  const text = String(value);
  return text.includes(",") ? `"${text}"` : text;
}

function writeCsv(name, rows) {
  const headers = Object.keys(rows[0]);
  const text = [
    headers.join(","),
    ...rows.map((row) => headers.map((header) => csvEscape(row[header])).join(",")),
  ].join("\n");
  writeFileSync(join(dataDir, name), `${text}\n`, "utf8");
}

function generateEducationIntervention() {
  const schools = Array.from({ length: 12 }, (_, i) => ({
    school_id: `S${String(i + 1).padStart(2, "0")}`,
    school_context: choice(["urban", "peri_urban", "rural"]),
    school_effect: normal(0, 4.5),
  }));

  const rows = [];
  let studentNumber = 1;

  for (const school of schools) {
    const n = 18 + Math.floor(random() * 8);
    for (let i = 0; i < n; i += 1) {
      const ses = Math.max(-2.2, Math.min(2.2, normal(0, 0.85)));
      const baseline = Math.max(25, Math.min(95, normal(58 + 6 * ses + school.school_effect, 9)));
      const gender = choice(["female", "male"]);
      const intervention = random() < (school.school_context === "rural" ? 0.45 : 0.55) ? 1 : 0;
      const attendance = Math.max(55, Math.min(100, normal(82 + 4 * ses + 3 * intervention, 7)));
      const trueEffect = 4.2 + (school.school_context === "rural" ? 1.1 : 0);
      const endline = Math.max(
        20,
        Math.min(
          100,
          normal(20 + 0.68 * baseline + trueEffect * intervention + 2.8 * ses + 0.09 * attendance + school.school_effect, 6.5)
        )
      );

      rows.push({
        student_id: `ST${String(studentNumber).padStart(3, "0")}`,
        school_id: school.school_id,
        school_context: school.school_context,
        intervention,
        gender,
        ses_index: ses,
        baseline_score: baseline,
        attendance_rate: attendance,
        endline_score: endline,
      });
      studentNumber += 1;
    }
  }

  return rows;
}

function generateTeacherAdoptionSurvey() {
  const rows = [];
  const provinces = ["A", "B", "C", "D"];

  for (let i = 1; i <= 180; i += 1) {
    const years_experience = Math.max(0, Math.round(normal(10, 6)));
    const prior_training = random() < 0.38 ? 1 : 0;
    const school_support = Math.round(Math.max(1, Math.min(5, normal(3.1 + 0.5 * prior_training, 0.9))));
    const province = choice(provinces);
    const logitP = -2.1 + 0.08 * years_experience + 0.85 * prior_training + 0.48 * school_support + (province === "D" ? -0.45 : 0);
    const adopted = random() < logistic(logitP) ? 1 : 0;

    rows.push({
      teacher_id: `T${String(i).padStart(3, "0")}`,
      province,
      years_experience,
      prior_training,
      school_support,
      adopted,
    });
  }

  return rows;
}

function generateStudentEngagementOrdinal() {
  const rows = [];

  for (let i = 1; i <= 220; i += 1) {
    const intervention = random() < 0.5 ? 1 : 0;
    const baseline_motivation = Math.round(Math.max(1, Math.min(5, normal(3.0, 1.0))));
    const teacher_feedback = Math.round(Math.max(1, Math.min(5, normal(3.2 + 0.4 * intervention, 0.9))));
    const latent = normal(-0.2 + 0.55 * intervention + 0.38 * baseline_motivation + 0.42 * teacher_feedback, 1.0);
    const engagement =
      latent < 1.8 ? 1 :
      latent < 2.6 ? 2 :
      latent < 3.4 ? 3 :
      latent < 4.4 ? 4 :
      5;

    rows.push({
      respondent_id: `R${String(i).padStart(3, "0")}`,
      intervention,
      baseline_motivation,
      teacher_feedback,
      engagement,
    });
  }

  return rows;
}

writeCsv("education_intervention.csv", generateEducationIntervention());
writeCsv("teacher_adoption_survey.csv", generateTeacherAdoptionSurvey());
writeCsv("student_engagement_ordinal.csv", generateStudentEngagementOrdinal());

console.log("Synthetic workshop datasets written to data/.");

