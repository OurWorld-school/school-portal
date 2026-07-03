export interface GradeItem {
  gradeName: string;
  gradeRange: string;
  gradeRemark: string;
  schoolName?: any;
}

export const getGradeForScore = (
  score: number,
  gradesList: GradeItem[]
): { grade: string; remark: string } | null => {
  if (!gradesList || gradesList.length === 0) return null;

  for (const gradeItem of gradesList) {
    const rangeStr = gradeItem.gradeRange;
    if (!rangeStr) continue;

    // Remove percentage signs, remove spaces, make lowercase
    const clean = rangeStr.replace(/%/g, "").replace(/\s+/g, "").toLowerCase();

    // Split by delimiters like hyphens, dashes, "~", or "to"
    const parts = clean.split(/[-–—_~to]+/);
    if (parts.length === 2) {
      const min = parseFloat(parts[0]);
      const max = parseFloat(parts[1]);
      if (!isNaN(min) && !isNaN(max)) {
        if (score >= min && score <= max) {
          return { grade: gradeItem.gradeName, remark: gradeItem.gradeRemark };
        }
      }
    } else if (parts.length === 1) {
      const single = parseFloat(parts[0]);
      if (!isNaN(single)) {
        if (score === single) {
          return { grade: gradeItem.gradeName, remark: gradeItem.gradeRemark };
        }
      }
    }
  }
  return null;
};
