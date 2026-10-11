// Tiny event bus so the hero, sticky bar and cards can open the lead modal and
// drive the batch filters without lifting state through the server-rendered page.
export const OPEN_LEAD_EVENT = 'bt-open-lead';
export const SET_FILTER_EVENT = 'bt-set-filter';

export interface OpenLeadDetail {
  batchId?: string;
}

export interface SetFilterDetail {
  grade?: number | null;
  category?: string | null;
}

export function openLead(batchId?: string) {
  window.dispatchEvent(new CustomEvent<OpenLeadDetail>(OPEN_LEAD_EVENT, { detail: { batchId } }));
}

export function setFilter(detail: SetFilterDetail) {
  window.dispatchEvent(new CustomEvent<SetFilterDetail>(SET_FILTER_EVENT, { detail }));
  document.getElementById('batches')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
