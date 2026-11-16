export const statusMap = {
  received: { label: "접수", tone: "blue" },
  preparing: { label: "탐색 준비", tone: "gray" },
  searching: { label: "탐색 중", tone: "green" },
  candidate_found: { label: "후보 발견", tone: "rose" },
  closed: { label: "종료", tone: "gray" },
  failed: { label: "실패", tone: "red" },
  cancelled: { label: "취소됨", tone: "gray" },
  online: { label: "정상", tone: "green" },
  unstable: { label: "연결 불안정", tone: "amber" },
  offline: { label: "연결 없음", tone: "red" },
  error: { label: "오류", tone: "amber" }
};

// Local demo collections start empty in the portfolio snapshot.
export const dashboardSummary = [];
export const cases = [];
export const candidates = [];
export const chartSeries = [];
export const monthlyChartSeries = [];
export const scanJobs = [];
export const routePoints = [];
export const auditLogs = [];
export const notifications = [];
export const users = [];
